import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Icon,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Spinner,
} from '@blueprintjs/core';
import styled from 'styled-components';

import '../LendBorrow/assets/index.scss';
import { useSelector } from 'react-redux';
import { prettyTx } from 'utils/helpers';
import { xToken } from '../../../utils/xtoken';
import { translations } from 'locales/i18n';
import { selectWalletProvider } from '../WalletProvider/selectors';
import { media } from '../../../styles/media';
import { useHistory } from 'react-router-dom';

type Props = {};

const WalletConnectorContainer: React.FC<Props> = props => {
  const { connected, connecting, address } = useSelector(selectWalletProvider);
  const { t } = useTranslation();
  const history = useHistory();

  const handleWalletConnection = useCallback(() => {
    xToken
      .connect()
      .then(() => {})
      .catch(console.error);
  }, []);

  const handleDisconnect = () => {
    xToken.disconnect().then(() => {});
  };

  return (
    <div className="d-flex flex-row align-items-center">
      {!connected && !address ? (
        <StyledButton
          onClick={handleWalletConnection}
          className="d-flex justify-content-center align-items-center bg-gold"
        >
          {connecting && <Spinner size={22} />}
          {!connecting && (
            <>
              <span className="d-none d-xl-inline">
                {t(translations.wallet.connect_btn)}
              </span>
              <Icon icon="log-in" className="d-xl-none" />
            </>
          )}
        </StyledButton>
      ) : (
        <div className="d-flex align-items-center">
          <Popover
            content={
              <Menu>
                <MenuItem icon="user" text={prettyTx(address)} />
                <MenuDivider />
                <MenuItem
                  icon="briefcase"
                  text={t(translations.wallet.my_wallet)}
                  onClick={() => history.push('/wallet')}
                />
                <MenuDivider />
                <MenuItem
                  icon="log-out"
                  text={t(translations.wallet.disconnect)}
                  onClick={handleDisconnect}
                />
              </Menu>
            }
          >
            <>
              <div className="engage-wallet w-auto justify-content-center align-items-center d-none d-xl-flex mr-3">
                <span className="d-flex flex-nowrap flex-row align-items-center">
                  <span>{prettyTx(address, 5, 3)}</span>
                  <Icon icon="caret-down" className="ml-2" />
                </span>
              </div>
              <StyledButton className="d-xl-none">
                <Icon icon="user" />
              </StyledButton>
            </>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default WalletConnectorContainer;

const StyledButton = styled.button.attrs(_ => ({
  type: 'button',
}))`
  border: none;
  background: none;
  color: var(--white);
  width: 48px;
  height: 48px;
  text-align: center;
  ${media.xl`
  text-align: inherit;
  background: #242424;
  margin-right: 50px;
  width: 125px;
  height: 58px;
  padding: 2px 20px;
  border-radius: 8px;
  font-weight: 600;
  border-right: 5px solid #fff;
  border-bottom: 5px solid #fff;
  border-left: 1px solid #fff;
  border-top: 1px solid #fff;

  &:hover, &:active, &:focus {
    background: none !important;
    color: #fec006 !important;
    border-right: 5px solid #fec006;
    border-bottom: 5px solid #fec006;
    border-left: 1px solid #fec006;
    border-top: 1px solid #fec006;
  }
  `}
`;
