import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../../assets/index.scss';

// import LendingContainer from '../../LendingContainer';
// import BorrowingContainer from '../../BorrowingContainer';
import MintContainer from '../../MintContainer';
import { selectCurrency } from '../../selectors';
import { actions } from '../../slice';
import { TabType } from '../../types';
import { translations } from 'locales/i18n';

type Props = {};

const CurrencyDetails: React.FC<Props> = () => {
  const { tab, asset } = useSelector(selectCurrency);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  console.log(tab, asset);

  return (
    <div id="currency-details" className="xtoken-tabs">
      <Tabs
        id="borrow-&-lend-tabs"
        activeKey={tab}
        onSelect={k => dispatch(actions.changeTab((k as unknown) as TabType))}
        defaultActiveKey="lend"
      >
        {/* <Tab eventKey={TabType.LEND} title={t(translations.lend.currency.lend)}>
          <LendingContainer currency={asset} />
        </Tab> */}
        {/* <Tab
          eventKey={TabType.BORROW}
          title={t(translations.lend.currency.borrow)}
        >
          <BorrowingContainer currency={asset} />
        </Tab> */}
        <Tab
          eventKey={TabType.MINT}
          title={t(translations.lend.currency.mint)}
        >
          <MintContainer currency={asset} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CurrencyDetails;
