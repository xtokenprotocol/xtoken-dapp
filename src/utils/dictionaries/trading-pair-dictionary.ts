import { Asset } from 'types/asset';
import { TradingPair } from '../models/trading-pair';

export enum TradingPairType {
  BTC_BUSD = 'BTC_BUSD',
  BTC_JFIN = 'BTC_JFIN',
  GOLD_JFIN = 'GOLD_JFIN',
}

export class TradingPairDictionary {
  public static longPositionTokens = [Asset.BUSD, Asset.JFIN];
  public static pairs: Map<TradingPairType, TradingPair> = new Map<
    TradingPairType,
    TradingPair
  >([
    [
      TradingPairType.BTC_JFIN,
      new TradingPair(
        'BTC',
        // asset
        Asset.BNB,
        'Bitfinex:BTCUSD',
        // asset for long position
        Asset.JFIN,
        // asset for sort position
        Asset.BNB,
        [Asset.BNB, Asset.JFIN, Asset.BUSD],
        [Asset.BNB, Asset.JFIN, Asset.BUSD],
      ),
    ],
    [
      TradingPairType.GOLD_JFIN,
      new TradingPair(
        'GASH',
        // asset
        Asset.GASH,
        'Bitfinex:BTCUSD',
        // asset for long position
        Asset.JFIN,
        // asset for sort position
        Asset.GASH,
        [Asset.JFIN, Asset.GASH, Asset.BUSD],
        [Asset.JFIN, Asset.GASH, Asset.BUSD],
      ),
    ],
  ]);

  public static get(pair: TradingPairType): TradingPair {
    return this.pairs.get(pair) as TradingPair;
  }

  public static getByLoanAsset(asset: Asset): TradingPair {
    return this.list().find(
      item => item.getShortAsset() === asset || item.getLongAsset() === asset,
    ) as TradingPair;
  }

  public static getByShortAsset(asset: Asset): TradingPair {
    return this.list().find(
      item => item.getShortAsset() === asset,
    ) as TradingPair;
  }

  public static getByLongAsset(asset: Asset): TradingPair {
    return this.list().find(
      item => item.getLongAsset() === asset,
    ) as TradingPair;
  }

  public static list(): Array<TradingPair> {
    return Array.from(this.pairs.values());
  }

  public static pairTypeList(): Array<TradingPairType> {
    return Array.from(this.pairs.keys());
  }

  public static find(pairs: Array<TradingPairType>): Array<TradingPair> {
    return pairs.map(asset => this.get(asset));
  }

  public static entries() {
    return Array.from(this.pairs.entries());
  }
}
