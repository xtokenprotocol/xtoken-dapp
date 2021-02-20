import { useCacheCallWithValue } from '../useCacheCallWithValue';

export function useMaxSwapSize() {
  return useCacheCallWithValue('xtokenProtocol', 'maxSwapSize', '0');
}
