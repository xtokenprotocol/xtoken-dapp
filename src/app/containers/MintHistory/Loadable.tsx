/**
 *
 * Asynchronously loads the component for BorrowHistory
 *
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import { PageSkeleton } from 'app/components/PageSkeleton';

export const MintHistory = lazyLoad(
  () => import('./index'),
  module => module.MintHistory,
  { fallback: <PageSkeleton /> },
);
