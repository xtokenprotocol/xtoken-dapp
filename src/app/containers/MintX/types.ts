/* --- STATE --- */
import { Asset } from 'types/asset';
import { Nullable } from 'types';

export interface CurrencyState {
  tab: TabType;
  asset: Asset;
  collateral: Nullable<Asset>;
  lendAmount: string;
  borrowAmount: string;
  repayItem: Nullable<string>;
  repayModalOpen: boolean;
}

export enum TabType {
  LEND = 'lend',
  BORROW = 'borrow',
  MINT = 'mint',
}

export type ContainerState = CurrencyState;
