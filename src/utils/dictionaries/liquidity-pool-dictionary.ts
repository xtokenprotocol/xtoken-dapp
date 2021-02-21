import { Asset } from 'types/asset';
import {
  LiquidityPool,
  LiquidityPoolSupplyAsset,
} from '../models/liquidity-pool';

export class LiquidityPoolDictionary {
  public static pools: Map<Asset, LiquidityPool> = new Map<
    Asset,
    LiquidityPool
  >([
    [
      Asset.BUSD,
      new LiquidityPool(Asset.BUSD, [
        new LiquidityPoolSupplyAsset(Asset.BUSD, {
          mainnet: '0x2dc80332C19FBCd5169ab4a579d87eE006Cb72c0',
          testnet: '0x6787161bc4F8d54e6ac6fcB9643Af6f4a12DfF28',
        }),
        new LiquidityPoolSupplyAsset(Asset.BNB, {
          mainnet: '0x840437BdE7346EC13B5451417Df50586F4dAF836',
          testnet: '0x7F433CC76298bB5099c15C1C7C8f2e89A8370111',
        }),
      ]),
    ],
  ]);

  public static get(asset: Asset): LiquidityPool {
    return this.pools.get(asset) as LiquidityPool;
  }

  public static list(): Array<LiquidityPool> {
    return Array.from(this.pools.values());
  }

  public static pairTypeList(): Array<Asset> {
    return Array.from(this.pools.keys());
  }

  public static find(pairs: Array<Asset>): Array<LiquidityPool> {
    return pairs.map(asset => this.get(asset));
  }

  public static getPoolAsset(pool: Asset, asset: Asset) {
    return this.get(pool).getPoolAsset(asset);
  }

  public static entries() {
    return Array.from(this.pools.entries());
  }
}
