import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { min, bignumber } from 'mathjs';

import { Asset } from 'types/asset';
import { weiTo18 } from 'utils/blockchain/math-helpers';

import { useAssetBalanceOf } from 'app/hooks/useAssetBalanceOf';
import { useLending_balanceOf } from 'app/hooks/lending/useLending_balanceOf';
import { useLending_approveAndLend } from 'app/hooks/lending/useLending_approveAndLend';
import { useLending_approveAndUnlend } from 'app/hooks/lending/useLending_approveAndUnlend';
import { useLending_transactionLimit } from 'app/hooks/lending/useLending_transactionLimit';

import { useIsAmountWithinLimits } from 'app/hooks/useIsAmountWithinLimits';
import { useAccount, useIsConnected } from 'app/hooks/useAccount';
import { useWeiAmount } from 'app/hooks/useWeiAmount';

import TabContainer from '../components/TabContainer';
import { actions } from '../slice';
import '../assets/index.scss';
import { SendTxResponse } from '../../../hooks/useSendContractTx';
import { useLending_profitOf } from '../../../hooks/lending/useLending_profitOf';
import { TxType } from '../../../../store/global/transactions-store/types';

type Props = {
  currency: Asset;
};

const LendingContainer: React.FC<Props> = ({ currency }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<string>('');
  const isConnected = useIsConnected();

  const weiAmount = useWeiAmount(amount);

  const onChangeAmount = (e: string) => {
    setAmount(e);
  };

  const { value: userBalance } = useAssetBalanceOf(currency as Asset);
  const { value: profitCall } = useLending_profitOf(
    currency as Asset,
    useAccount(),
  );

  const { value: depositedBalance } = useLending_balanceOf(
    currency as Asset,
    useAccount(),
  );

  const [profit, setProfit] = useState(profitCall);

  const [ticker] = useState('0');

  useEffect(() => {
    setAmount('0');
  }, [currency]);

  useEffect(() => {
    setProfit('0');
  }, [currency]);

  // useEffect(() => {
  //   setTicker(
  //     bignumber(balance)
  //       .mul(
  //         bignumber(interestCall).div(100).div(31536000 /* seconds in year */),
  //       )
  //       .div(10 ** 18)
  //       .toFixed(0),
  //   );
  // }, [balance, interestCall]);

  useEffect(() => {
    const ms = 1000;
    // const diff = bignumber(ticker).div(1000).div(ms);
    let value = bignumber(profitCall).add(profit);
    const interval = setInterval(() => {
      // value = value.add(diff);
      setProfit(value.toFixed(0));
    }, ms);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profitCall, ticker]);

  const {
    value: maxAmount,
    loading: loadingLimit,
  } = useLending_transactionLimit(currency, currency);

  const onMaxChange = (type: string) => {
    let amount = '0';
    if (type === 'Deposit') {
      amount = userBalance;
      if (maxAmount !== '0') {
        amount = min(userBalance, maxAmount);
      }
    } else if (type === 'Redeem') {
      // amount = depositedBalance;
      amount = (BigInt(depositedBalance) + BigInt(profit)).toString();
      // alert(`${depositedBalance} + ${BigInt(profit)} = ${amount}`);
    }
    setAmount(weiTo18(amount));
  };

  const [txState, setTxState] = useState<SendTxResponse>({
    txHash: null as any,
    status: TxType.NONE,
    loading: false,
    txData: null,
  });

  // LENDING
  const { lend, ...lendTx } = useLending_approveAndLend(currency, weiAmount);
  const { unlend, ...unlendTx } = useLending_approveAndUnlend(
    currency,
    weiAmount,
  );

  const handleLendSubmit = useCallback(() => {
    if (!lendTx.loading) {
      lend();
    }
  }, [lendTx.loading, lend]);

  const handleUnlendSubmit = useCallback(() => {
    if (!unlendTx.loading) {
      unlend();
    }
  }, [unlendTx.loading, unlend]);

  const valid = useIsAmountWithinLimits(
    weiAmount,
    '1',
    maxAmount !== '0' ? maxAmount : undefined,
  );

  useEffect(() => {
    setTxState(lendTx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(lendTx)]);

  useEffect(() => {
    setTxState(unlendTx as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(unlendTx)]);

  useEffect(() => {
    dispatch(actions.changeLendAmount(amount));
  }, [amount, dispatch]);

  return (
    <TabContainer
      onMaxChange={onMaxChange}
      txState={txState}
      isConnected={isConnected}
      valid={valid}
      leftButton="Deposit"
      rightButton="Redeem"
      amountValue={amount}
      onChangeAmount={onChangeAmount}
      handleSubmit={handleLendSubmit}
      handleSubmitWithdraw={handleUnlendSubmit}
      currency={currency}
      maxValue={maxAmount}
      loadingLimit={loadingLimit}
    />
  );
};

export default LendingContainer;
