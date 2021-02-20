/**
 *
 * StatsList
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Asset } from '../../../types/asset';
import { AssetsDictionary } from '../../../utils/dictionaries/assets-dictionary';
import { getLendingContractName } from '../../../utils/blockchain/contract-helpers';
import { StatsRowData } from '../StatsRowData';
import { translations } from 'locales/i18n';

interface Props {
  asset: Asset;
}

export function StatsList(props: Props) {
  const { t } = useTranslation();
  const logo = AssetsDictionary.get(props.asset).logoSvg;
  const lendingContract = getLendingContractName(props.asset);

  return (
    <>
      <div className="stats-list-item">
        <div className="text-left text-nowrap center-children">
          <img
            className="d-inline"
            style={{ height: '36px', marginRight: '10px' }}
            src={logo}
            alt=""
          />{' '}
          <h5 style={{ height: '1rem' }}>
            <strong>{props.asset}</strong>
          </h5>
        </div>

        <div className="stats-list-subitems">
          <div className="d-flex justify-between stats-list-subitem">
            <div className="text-left">
              {t(translations.statsPage.totalAssetSupplied)}
            </div>
            <div className="text-right text-nowrap">
              <StatsRowData
                contract={lendingContract}
                data="totalAssetSupply"
                displayType="normal"
                prepend={props.asset}
              />
            </div>
          </div>

          <div className="d-flex justify-between stats-list-subitem">
            <div className="text-left">
              {t(translations.statsPage.totalAssetBorrowed)}
            </div>
            <div className="text-right text-nowrap">
              <StatsRowData
                contract={lendingContract}
                data="totalAssetBorrow"
                displayType="normal"
                prepend={props.asset}
              />
            </div>
          </div>

          <div className="d-flex justify-between stats-list-subitem">
            <div className="text-left">
              {t(translations.statsPage.totalAvailable)}
            </div>
            <div className="text-right text-nowrap">
              <StatsRowData
                contract={lendingContract}
                data="marketLiquidity"
                displayType="normal"
                prepend={props.asset}
              />
            </div>
          </div>

          <div className="d-flex justify-between stats-list-subitem">
            <div className="text-left">
              {t(translations.statsPage.supplyAPR)}
            </div>
            <div className="text-right text-nowrap">
              <StatsRowData
                contract={lendingContract}
                data="supplyInterestRate"
                displayType="percentage"
                prepend="%"
              />
            </div>
          </div>

          <div className="d-flex justify-between stats-list-subitem">
            <div className="text-left">
              {t(translations.statsPage.borrowAPR)}
            </div>
            <div className="text-right text-nowrap">
              <StatsRowData
                contract={lendingContract}
                data="borrowInterestRate"
                displayType="percentage"
                prepend="%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
