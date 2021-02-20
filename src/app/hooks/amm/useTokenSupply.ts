import { Asset } from 'types/asset';
import { getPoolTokenContractName } from 'utils/blockchain/contract-helpers';
import { useCacheCallWithValue } from '../useCacheCallWithValue';
import { xToken } from '../../../utils/xtoken';
import { ContractName } from '../../../utils/types/contracts';

/**
 * Total supply of selected tokens.
 * @param pool
 * @param asset
 */
export function useTokenSupply(pool: Asset, asset: Asset) {
  const contractName = getPoolTokenContractName(pool, asset);
  return useCacheCallWithValue(
    xToken.contracts.hasOwnProperty(contractName)
      ? contractName
      : ('' as ContractName),
    'totalSupply',
    '0',
  );
}
