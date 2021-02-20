import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.currency || initialState;

export const selectLendBorrow = createSelector(
  [selectDomain],
  currencyState => currencyState,
);
