import { Asset } from 'types/asset';
import { useCallback } from 'react';
import { appContracts } from '../../../utils/blockchain/app-contracts';
import { useDepositCollateral } from './useDepositCollateral';
import {
  CheckAndApproveResult,
  contractWriter,
} from '../../../utils/xtoken/contract-writer';

export function useApproveAndAddMargin(
  collateralToken: Asset,
  loanId: string,
  depositAmount,
) {
  const { send, ...txState } = useDepositCollateral(
    collateralToken,
    loanId,
    depositAmount,
  );

  const handleTx = useCallback(async () => {
    let tx: CheckAndApproveResult = {};
    if (collateralToken !== Asset.BNB) {
      tx = await contractWriter.checkAndApprove(
        collateralToken,
        appContracts.xtokenProtocol.address,
        depositAmount,
      );
      if (tx.rejected) {
        return;
      }
    }
    await send(tx?.nonce, tx?.approveTx);
  }, [collateralToken, depositAmount, send]);

  return {
    send: () => handleTx(),
    ...txState,
  };
}
