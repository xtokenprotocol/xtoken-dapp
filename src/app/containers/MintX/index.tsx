import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import CurrencyContainer from './components/CurrencyContainer';
import './assets/index.scss';
import CurrencyDetails from './components/CurrencyDetails';
import LendingHistory from './components/LendingHistory';
import { Header } from 'app/components/Header';
import { lendBorrowSaga } from './saga';
import { actions, reducer, sliceKey } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLendBorrow } from './selectors';
import { TabType } from './types';
import { Footer } from '../../components/Footer';
import { RepayPositionHandler } from '../RepayPositionHandler/Loadable';
import { BorrowActivity } from '../../components/BorrowActivity/Loadable';

type Props = {};

const Mint: React.FC<Props> = props => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: lendBorrowSaga });

  const state = useSelector(selectLendBorrow);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main className="container">
        <Row>
          <div id="currency-list" className="col-12 col-lg-6">
            <CurrencyContainer
              state={state.asset}
              setState={asset => dispatch(actions.changeAsset(asset))}
            />
          </div>
          <div id="currency-details" className="col-12 col-lg-6 mt-3 mt-lg-0">
            <CurrencyDetails />
          </div>
        </Row>
      </main>
      <Container className="mt-4" id="history-tab">
        {/* EDITED {state.tab === TabType.LEND && <LendingHistory />} */}
        {state.tab === TabType.BORROW && <BorrowActivity />}
        <RepayPositionHandler />
      </Container>
      <Footer />
    </>
  );
};

export default Mint;
