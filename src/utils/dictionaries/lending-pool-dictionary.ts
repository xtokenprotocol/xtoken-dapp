import { Asset } from 'types/asset';
import { LendingPool } from '../models/lending-pool';

export class LendingPoolDictionary {
  public static pools: Map<Asset, LendingPool> = new Map<Asset, LendingPool>([
    //[Asset.BNB, new LendingPool('BTC', Asset.BNB, [Asset.JFIN, Asset.GASH])],
    //[Asset.BUSDJ, new LendingPool('BUSDJ', Asset.BUSDJ, [Asset.JFIN])],
    // eslint-disable-next-line
    [Asset.BUSD, new LendingPool('BUSD', Asset.BUSD, [Asset.BUSD, Asset.JFIN, Asset.GASH])],
    // eslint-disable-next-line
    [Asset.JFIN, new LendingPool('JFIN', Asset.JFIN, [Asset.BUSD, Asset.JFIN, Asset.GASH])],
    // eslint-disable-next-line
    [Asset.GASH, new LendingPool('GASH', Asset.GASH, [Asset.BUSD, Asset.JFIN, Asset.GASH])],
    // eslint-disable-next-line
    [Asset.ETH, new LendingPool('ETH', Asset.ETH, [Asset.BUSD, Asset.JFIN, Asset.GASH])],

    /*
    [Asset.BUSD, new LendingPool('BUSD', Asset.BUSD, [Asset.BUSD, Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND, Asset.DOGE, Asset.USDT])],
    // eslint-disable-next-line
    [Asset.JFIN, new LendingPool('JFIN', Asset.JFIN, [Asset.BUSD, Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND, Asset.DOGE, Asset.USDT])],
    // eslint-disable-next-line
    [Asset.GASH, new LendingPool('GASH', Asset.GASH, [Asset.BUSD, Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND, Asset.DOGE, Asset.USDT])],
    // eslint-disable-next-line
    [Asset.ETH, new LendingPool('ETH', Asset.ETH, [Asset.BUSD, Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND, Asset.DOGE, Asset.USDT])],
    // eslint-disable-next-line
    [Asset.BAND, new LendingPool('BAND', Asset.BAND, [Asset.BUSD, Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND, Asset.DOGE, Asset.USDT])],
    // eslint-disable-next-line
    [Asset.ALPHA, new LendingPool('ALPHA', Asset.ALPHA, [Asset.BUSD, Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND, Asset.DOGE, Asset.USDT])],
    // eslint-disable-next-line
    [Asset.DOGE, new LendingPool('DOGE', Asset.DOGE, [Asset.BUSD, Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND, Asset.DOGE, Asset.USDT])],
    // eslint-disable-next-line
    [Asset.USDT, new LendingPool('USDT', Asset.USDT, [Asset.BUSD, Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND, Asset.DOGE, Asset.USDT])],
    // eslint-disable-next-line
    //[Asset.ALPHA, new LendingPool('ALPHA', Asset.ALPHA, [Asset.BUSD,Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND,Asset.WBTC,Asset.DOGE,Asset.USDT])],
    // eslint-disable-next-line
    //[Asset.WBTC, new LendingPool('WBTC', Asset.WBTC, [Asset.BUSD,Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND,Asset.WBTC,Asset.DOGE,Asset.USDT])],
    // eslint-disable-next-line
    //[Asset.DOGE, new LendingPool('DOGE', Asset.DOGE, [Asset.BUSD,Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND,Asset.WBTC,Asset.DOGE,Asset.USDT])],
    // eslint-disable-next-line
    //[Asset.BAND, new LendingPool('BAND', Asset.BAND, [Asset.BUSD,Asset.JFIN, Asset.GASH, Asset.ETH, Asset.ALPHA, Asset.BAND,Asset.WBTC,Asset.DOGE,Asset.USDT])],
    */
  ]);

  public static get(asset: Asset): LendingPool {
    return this.pools.get(asset) as LendingPool;
  }

  public static list(): Array<LendingPool> {
    return Array.from(this.pools.values());
  }

  public static assetList(): Array<Asset> {
    return Array.from(this.pools.keys());
  }

  public static find(assets: Array<Asset>): Array<LendingPool> {
    return assets.map(asset => this.get(asset));
  }

  public static entries() {
    return Array.from(this.pools.entries());
  }
}
