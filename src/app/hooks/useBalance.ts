import { useEffect, useState } from 'react';
import { xToken } from '../../utils/xtoken';
import { useSelector } from 'react-redux';
import { selectWalletProvider } from '../containers/WalletProvider/selectors';

export function useBalance() {
  const { syncBlockNumber, address } = useSelector(selectWalletProvider);
  const [state, setState] = useState({
    value: '0',
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (address) {
      setState(prevState => ({ ...prevState, loading: true, error: null }));
      xToken
        .getWeb3()
        .eth.getBalance(address)
        .then(balance => {
          setState(prevState => ({
            ...prevState,
            value: balance,
            loading: false,
            error: null,
          }));
        })
        .catch(error => {
          setState(prevState => ({ ...prevState, error }));
        });
    } else {
      setState(prevState => ({ ...prevState, loading: false }));
    }
  }, [address, syncBlockNumber]);
  return state;
}
