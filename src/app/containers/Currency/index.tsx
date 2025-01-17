import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import './assets/index.scss';

import CurrencyContainer from './components/CurrencyContainer';
import CurrencyDetails from './components/CurrencyDetails';
// import LendingHistory from './components/LendingHistory';
import { Header } from 'app/components/Header';
import { lendBorrowSaga } from './saga';
import { actions, reducer, sliceKey } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrency } from './selectors';
import { TabType } from './types';
import { Footer } from '../../components/Footer';
import { RepayPositionHandler } from '../RepayPositionHandler/Loadable';
// import { BorrowActivity } from '../../components/BorrowActivity/Loadable';
import { MintActivity } from '../../components/MintActivity/Loadable';

type Props = {};

const Currency: React.FC<Props> = props => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: lendBorrowSaga });

  const state = useSelector(selectCurrency);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main className="container">
        <Row>
          <div className="col-12 col-lg-6">
            <CurrencyContainer
              state={state.asset}
              setState={asset => dispatch(actions.changeAsset(asset))}
            />
          </div>
          <div className="col-12 col-lg-6 mt-3 mt-lg-0">
            <CurrencyDetails />
          </div>
        </Row>
      </main>
      <Container className="mt-4">
        {/* {state.tab === TabType.LEND && <LendingHistory />} */}
        {/* {state.tab === TabType.BORROW && <BorrowActivity />} */}
        {state.tab === TabType.MINT && <MintActivity />}
        <RepayPositionHandler />
      </Container>
      <Footer />
    </>
  );
};

export default Currency;
