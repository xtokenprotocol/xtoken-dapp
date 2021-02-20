/**
 *
 * Asynchronously loads the component for BorrowActivity
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MintActivity = lazyLoad(
  () => import('./index'),
  module => module.MintActivity,
);
