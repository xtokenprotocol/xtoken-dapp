import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// import LendingContainer from '../../LendingContainer';
// import BorrowingContainer from '../../BorrowingContainer';
import MintContainer from '../../MintContainer';
import '../../assets/index.scss';
import { selectLendBorrow } from '../../selectors';
import { actions } from '../../slice';
import { TabType } from '../../types';
import { translations } from 'locales/i18n';

type Props = {};

const CurrencyDetails: React.FC<Props> = () => {
  const { tab, asset } = useSelector(selectLendBorrow);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div id="xtoken-tabs" className="xtoken-tabs">
      <Tabs
        activeKey={tab}
        onSelect={k => dispatch(actions.changeTab((k as unknown) as TabType))}
        defaultActiveKey="lend"
        id="borrow-&-lend-tabs"
      >
        {/* <Tab eventKey={TabType.LEND} title={t(translations.lend.currency.lend)}>
          <LendingContainer currency={asset} />
        </Tab> */}
        <Tab
          eventKey={TabType.MINT}
          title={t(translations.lend.currency.borrow)}
        >
          <MintContainer currency={asset} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CurrencyDetails;
