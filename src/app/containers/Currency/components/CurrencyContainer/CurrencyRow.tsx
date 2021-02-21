import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import clsx from 'clsx';
import { bignumber } from 'mathjs';
import { Text } from '@blueprintjs/core';

import { Asset } from 'types/asset';
import { NextSupplyInterestRate } from 'app/components/NextSupplyInterestRate';
import { NextBorrowInterestRate } from 'app/components/NextBorrowInterestRate';
import { useCachedAssetPrice } from 'app/hooks/trading/useCachedAssetPrice';
import { LendingPool } from 'utils/models/lending-pool';
import { translations } from 'locales/i18n';
import { weiToFixed } from 'utils/blockchain/math-helpers';
import { usePriceFeeds_QueryRate } from 'app/hooks/price-feeds/useQueryRate';
import { contractReader } from 'utils/xtoken/contract-reader';
import { getTokenContract } from 'utils/blockchain/contract-helpers';
import { useCallback } from 'react';
import { AssetsDictionary } from 'utils/dictionaries/assets-dictionary';
import { useAssetBalanceOf } from 'app/hooks/useAssetBalanceOf';
import { LoadableValue } from 'app/components/LoadableValue';
import { numberToUSD } from 'utils/display-text/format';

import '../../assets/index.scss';
import './style.scss';
import { LoanTokenGraphs } from '../../../../components/LoanTokenGraphs';

type Props = {
  lendingPool: LendingPool;
  lendingAmount: string;
  borrowAmount: string;
  currencyPrice: string;
  active: boolean;
};

// function getAssetPrice(source: Asset, target: Asset, items: CachedAssetRate[]) {
//   const item = items.find(
//     item => item.source === source && item.target === target,
//   );
//   return item?.value?.rate || '0';
// }

const CurrencyRow: React.FC<Props> = ({
  lendingPool,
  lendingAmount,
  borrowAmount,
  currencyPrice,
  active,
}) => {
  const { t } = useTranslation();
  const asset = lendingPool.getAsset();
  const item = AssetsDictionary.get(asset);
  const tokens = useAssetBalanceOf(item.asset);
  const dollars = useCachedAssetPrice(item.asset, Asset.BUSD);

  console.log(tokens)

  const [dollarValue, setDollarValue] = useState('0');

  useEffect(() => {
    if (item.asset === Asset.BUSD) {
      setDollarValue(tokens.value);
    } else {
      setDollarValue(
        bignumber(tokens.value)
          .mul(dollars.value)
          .div(10 ** item.decimals)
          .toFixed(0),
      );
      if (item.asset === Asset.BNB) {
        setDollarValue('0');
      }
    }
  }, [dollars.value, tokens.value, item.asset, item.decimals]);



  // const items = usePriceFeeds_QueryRate(asset, asset);

  // const getRate = useCallback(async (sourceAsset: Asset, destAsset: Asset) => {
  //   return contractReader.call('priceFeed', 'queryRate', [
  //     getTokenContract(sourceAsset).address,
  //     getTokenContract(destAsset).address,
  //   ]);
  // }, []);

  // console.log(getRate(asset, Asset.BUSD));
  
  return (
    <div
      className={clsx(
        'xtoken-border px-3 py-1 py-lg-2 currency-container font-family-work-sans mb-2 text-muted',
        active && 'currency-container__active',
      )}
    >
      <div className="d-flex flex-row justify-content-start align-items-center currency currency-title w-lg-25 mb-3 mb-lg-0">
        <StyledImage src={lendingPool.getAssetDetails().logoSvg} />
        <h3 className="m-0 font-family-rowdies">{lendingPool.getName()}</h3>

        <div className="d-flex flex-row justify-content-end align-items-center currency ml-auto">
          {/* <div className="mr-5 w-50">
            <Text ellipsize className="text-muted">
              {t(translations.lend.currency.lendArp)}:
            </Text>
            <NextSupplyInterestRate
              asset={lendingPool.getAsset()}
              weiAmount={lendingAmount}
            />
          </div> */}
          {/* <div className="mr-3 w-50">
            <Text ellipsize className="text-muted">
              {t(translations.lend.currency.borrowArp)}:
            </Text>
            <NextBorrowInterestRate
              asset={lendingPool.getAsset()}
              weiAmount={borrowAmount}
            />
          </div> */}
          <div className="mr-3 w-100">
            {/* <Text ellipsize className="text-muted">
              {t(translations.lend.currency.borrowArp)}:
            </Text>
            <NextBorrowInterestRate
              asset={lendingPool.getAsset()}
              weiAmount={borrowAmount}
            /> */}
            <Text ellipsize className="text-muted">
              {t(translations.lend.currency.price)}:
            </Text>
            <LoadableValue
              value={numberToUSD(Number(weiToFixed(dollarValue, 4)), 4)}
              loading={dollars.loading}
            />
            {/* <NextBorrowInterestRate
              asset={lendingPool.getAsset()}
              weiAmount={currencyPrice}
            /> */}
          </div>
        </div>
      </div>
      {active && (
        <div className="mt-3">
          <LoanTokenGraphs lendingPool={lendingPool} />
        </div>
      )}
    </div>
  );
};

export default CurrencyRow;

const StyledImage = styled.img`
  width: 44px;
  height: 44px;
  object-fit: scale-down;
  margin-right: 11px;
`;
