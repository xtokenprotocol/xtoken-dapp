/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { StatsPage } from './containers/StatsPage/Loadable';
import { WalletProvider } from './containers/WalletProvider';
//import { LiquidityPage } from './containers/LiquidityPage/Loadable';
import { currentNetwork } from '../utils/classifiers';
// import LendBorrow from './containers/LendBorrow';
import Currency from './containers/Currency';
//import { TradingPage } from './containers/TradingPage/Loadable';
//import { SandboxPage } from './containers/SandboxPage/Loadable';
import { EmailPage } from './containers/EmailPage';
import { useEffect, useState } from 'react';

import { TutorialDialog } from './components/TutorialDialog/container';
import { WalletPage } from './containers/WalletPage/Loadable';

const title =
  currentNetwork !== 'mainnet' ? `JREPO ${currentNetwork}` : 'JREPO';

function getFaviconEl(): HTMLLinkElement {
  return document.getElementById('favicon') as HTMLLinkElement;
}

function resolveColorScheme() {
  try {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  } catch (e) {
    return 'light';
  }
}

export function App() {
  const [theme, setTheme] = useState(resolveColorScheme());
  useEffect(() => {
    try {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', e => {
          setTheme(e.matches ? 'dark' : 'light');
        });
    } catch (e) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    // add white favicon for dark mode.
    const fav = getFaviconEl();
    fav.href = theme === 'dark' ? '/favicon-white.png' : '/favicon.png';
    fav.type = 'image/png';
    fav.sizes.add('48x48');
  }, [theme]);

  return (
    <BrowserRouter>
      <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title}>
        <meta name="description" content="xToken Lending" />
      </Helmet>
      <WalletProvider>
        <TutorialDialog />
        <Switch>
          <Route exact path="/" component={Currency} />
          {/* <Route exact path="/lend" component={Mint} /> */}
          <Route exact path="/stats" component={StatsPage} />
          <Route exact path="/wallet" component={WalletPage} />
          <Route
            exact
            path="/optin-success"
            render={props => <EmailPage {...props} type="OPTIN" />}
          />
          <Route
            exact
            path="/unsubscribe"
            render={props => <EmailPage {...props} type="UNSUBSCRIBE" />}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </WalletProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
