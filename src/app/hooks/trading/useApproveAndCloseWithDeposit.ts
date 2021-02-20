import { Asset } from 'types/asset';
import { useCloseWithDeposit } from './useCloseWithDeposit';
import { getContract } from '../../../utils/blockchain/contract-helpers';
import {
  CheckAndApproveResult,
  contractWriter,
} from '../../../utils/xtoken/contract-writer';

export function useApproveAndCloseWithDeposit(
  borrowToken: Asset,
  collateralToken: Asset,
  loanId: string,
  receiver: string,
  repayAmount: string,
) {
  const { send, ...txState } = useCloseWithDeposit(
    borrowToken,
    loanId,
    receiver,
    repayAmount,
  );

  return {
    send: async () => {
      let tx: CheckAndApproveResult = {};
      if (borrowToken !== Asset.BNB) {
        tx = await contractWriter.checkAndApprove(
          borrowToken,
          getContract('xtokenProtocol').address,
          repayAmount,
        );
        if (tx.rejected) {
          return;
        }
      }
      await send(tx?.nonce, tx?.approveTx);
    },
    ...txState,
  };
}
