import { Asset } from 'types/asset';
import { getTokenContract } from 'utils/blockchain/contract-helpers';
import { useCacheCallWithValue } from '../useCacheCallWithValue';

/**
 * @param borrowToken
 * @param collateralToken
 * @param withdrawAmount
 * @param newPrincipal
 * @param isTorqueLoan
 */
export function useGetRequiredCollateral(
  borrowToken: Asset,
  collateralToken: Asset,
  withdrawAmount: string,
  newPrincipal: string,
  isTorqueLoan: boolean,
) {
  return useCacheCallWithValue(
    'xtokenProtocol',
    'getRequiredCollateral',
    '0',
    getTokenContract(borrowToken).address,
    getTokenContract(collateralToken).address,
    withdrawAmount,
    newPrincipal,
    isTorqueLoan,
  );
}
