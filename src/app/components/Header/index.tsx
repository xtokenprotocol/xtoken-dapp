/**
 *
 * Header
 *
 */
import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoSvg from 'assets/images/xtoken.svg';
import { Container } from 'react-bootstrap';
import WalletConnector from '../../containers/WalletConnector';
import styled from 'styled-components';
import { Icon, Menu, MenuItem, Popover } from '@blueprintjs/core';
import { media } from '../../../styles/media';
import { WhitelistedNotification } from '../WhitelistedNotification/Loadable';
import { translations } from 'locales/i18n';

export function Header() {
  const { t } = useTranslation();
  const history = useHistory();

  const pages = [
    { to: '/lend', title: t(translations.mainMenu.lend), exact: true },
    t(translations.mainMenu.stats),
    { to: '/wallet', title: t(translations.mainMenu.wallet) },
  ];

  const menuItems = pages.map((item, index) => {
    let link: {
      to: string;
      title: string;
      exact: boolean;
      onClick?: () => void;
    } = item as any;

    if (typeof item === 'string') {
      link = {
        to: `/${item.toLowerCase()}`,
        title: item,
        exact: false,
      };
    }

    return (
      <MenuItem
        key={index}
        text={link.title}
        onClick={() => (link.onClick ? link.onClick() : history.push(link.to))}
      />
    );
  });

  const dropDownMenu = <Menu>{menuItems}</Menu>;

  return (
    <>
      <header>
        <Container className="d-flex justify-content-between align-items-center mt-4 mb-5">
          <div className="d-xl-none">
            <Popover content={<Menu>{dropDownMenu}</Menu>}>
              <button className="hamburger" type="button">
                <Icon icon="menu" />
              </button>
            </Popover>
          </div>
          <div className="mr-3">
            <Link to="/">
              <StyledLogo src={logoSvg} />
            </Link>
          </div>
          <div className="d-xl-flex flex-row align-items-center">
            <div className="d-none d-xl-block">
              {/* <NavLink className="nav-item mr-4" to="/lend" exact>
                {t(translations.mainMenu.lend)}
              </NavLink> */}
              {/* <NavLink className="nav-item mr-4" to="/stats">
                {t(translations.mainMenu.stats)}
              </NavLink> */}
              <NavLink className="nav-item mr-4" to="/wallet">
                {t(translations.mainMenu.wallet)}
              </NavLink>
            </div>
            <WalletConnector />
          </div>
        </Container>
      </header>
      <WhitelistedNotification />
    </>
  );
}

const StyledLogo = styled.img.attrs(_ => ({
  alt: '',
}))`
  width: 114px;
  height: 48px;
  margin: 0 15px;
  ${media.xl`
  width: 138px;
  height: 58px;
  margin: 0 15px 0 0;
  `}
`;
