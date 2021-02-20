import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, TabType } from './types';
import { Asset } from '../../../types/asset';

// The initial state of the WalletConnector container
export const initialState: ContainerState = {
  tab: TabType.MINT,
  asset: Asset.BUSD,
  collateral: null,
  lendAmount: '',
  borrowAmount: '',
  repayItem: null,
  repayModalOpen: false,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeTab(state, { payload }: PayloadAction<TabType>) {
      state.tab = payload;
    },
    changeAsset(state, { payload }: PayloadAction<Asset>) {
      state.asset = payload;
    },
    changeCollateral(state, { payload }: PayloadAction<Asset>) {
      state.collateral = payload;
    },
    changeLendAmount(state, { payload }: PayloadAction<string>) {
      state.lendAmount = payload;
    },
    changeBorrowAmount(state, { payload }: PayloadAction<string>) {
      state.borrowAmount = payload;
    },
    openRepayModal(state, { payload }: PayloadAction<string>) {
      state.repayItem = payload;
      state.repayModalOpen = true;
    },
    closeRepayModal(state) {
      state.repayItem = null;
      state.repayModalOpen = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = currencySlice;
