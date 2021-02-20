import { Asset } from 'types/asset';
import {
  getAmmContract,
  getAmmContractName,
  getTokenContract,
} from 'utils/blockchain/contract-helpers';
import { useSendContractTx } from '../useSendContractTx';
import { useAccount } from '../useAccount';
import { TxType } from '../../../store/global/transactions-store/types';

export function useAddLiquidity(
  pool: Asset,
  asset: Asset,
  amount: string,
  minReturn: string,
) {
  const account = useAccount();
  const { send, ...rest } = useSendContractTx(
    asset === Asset.BNB ? 'BTCWrapperProxy' : getAmmContractName(pool),
    'addLiquidity',
  );
  return {
    deposit: (nonce?: number, approveTx?: string | null) => {
      return send(
        [
          asset === Asset.BNB
            ? getAmmContract(pool).address
            : getTokenContract(asset).address,
          amount,
          minReturn,
        ],
        {
          from: account,
          value: asset === Asset.BNB ? amount : '0',
          nonce,
        },
        {
          approveTransactionHash: approveTx,
          type: TxType.ADD_LIQUIDITY,
        },
      );
    },
    ...rest,
  };
}
