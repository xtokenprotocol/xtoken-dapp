import { Asset } from 'types/asset';

import busdIcon from 'assets/images/tokens/busd.svg';
import jfinIcon from 'assets/images/tokens/jfin.svg';
import bnbIcon from 'assets/images/tokens/bnb.svg';
import goldIcon from 'assets/images/tokens/gold.svg';
import ethIcon from 'assets/images/tokens/eth.svg';
import alphaIcon from 'assets/images/tokens/alpha.svg';
import applIcon from 'assets/images/tokens/apple.svg';
import googlIcon from 'assets/images/tokens/google.svg';
import tslaIcon from 'assets/images/tokens/tesla.svg';
import thbIcon from 'assets/images/tokens/thb.svg';
import bandIcon from 'assets/images/tokens/band.svg';
import usdtIcon from 'assets/images/tokens/usdt.svg';
//import btcIcon from 'assets/images/tokens/btc.svg';

import { AssetDetails } from '../models/asset-details';

export class AssetsDictionary {
  public static assets: Map<Asset, AssetDetails> = new Map<Asset, AssetDetails>(
    [
      [Asset.xTHB, new AssetDetails(Asset.xTHB, 'xTHB', 'xTHB', 18, thbIcon)],
      [Asset.BUSD, new AssetDetails(Asset.BUSD, 'BUSD', 'BUSD', 18, busdIcon)],
      [
        Asset.xGOLD,
        new AssetDetails(Asset.xGOLD, 'xGOLD', 'xGOLD', 18, jfinIcon),
      ],
      [
        Asset.xGOOGL,
        new AssetDetails(Asset.xGOOGL, 'xGOOGL', 'xGOOGL', 18, googlIcon),
      ],
      [
        Asset.xAAPL,
        new AssetDetails(Asset.xAAPL, 'xAAPL', 'xAAPL', 18, applIcon),
      ],
      // eslint-disable-next-line
      [Asset.xTSLA, new AssetDetails(Asset.xTSLA, 'xTSLA', 'xTSLA', 18, tslaIcon)],

    ],
  );

  public static get(asset: Asset): AssetDetails {
    return this.assets.get(asset) as AssetDetails;
  }

  public static getByLoanContractAddress(address: string): AssetDetails {
    return this.list().find(
      item =>
        item.lendingContract.address.toLowerCase() === address.toLowerCase(),
    ) as AssetDetails;
  }

  public static getByTokenContractAddress(address: string): AssetDetails {
    return this.list().find(
      item =>
        item.tokenContract.address.toLowerCase() === address.toLowerCase(),
    ) as AssetDetails;
  }

  public static list(): Array<AssetDetails> {
    return Array.from(this.assets.values());
  }

  public static assetList(): Array<Asset> {
    return Array.from(this.assets.keys());
  }

  public static find(assets: Array<Asset>): Array<AssetDetails> {
    return assets.map(asset => this.get(asset));
  }
}
