/**
 * Do not import this file directly.
 * Use getContract(contractName) helper
 * @example getContract('xtokenProtocol');
 */

import bzxAbi from './abi/bzxAbi.json';
import priceFeedsAbi from './abi/priceFeedAbi.json';
//import LiquidityPoolV2Converter from './abi/LiquidityPoolV2Converter.json';
//import RBTCWrapperProxy from './abi/RBTCWrapperProxy.json';
import tokenAbi from './abi/abiTestToken.json';
import TestTokenABI from './abi/abiTestToken.json';
import abiTestWBRTCToken from './abi/abiTestWBRTCToken.json';
import LoanTokenLogicWrbtc from './abi/LoanTokenLogicWrbtc.json';
import LoanTokenLogicStandard from './abi/LoanTokenLogicStandard.json';
import SwapNetworkABI from './abi/xTokenSwapNetwork.json';
import ConverterRegistryABI from './abi/ConverterRegistry.json';
/*
{
    "WBASE": "0xbAFeE0D462FC95553a2F891ab4758f6361737B0e",
    "xTHB": "0xF48496cb8eC05fA18c5D194c9475f2cFEEEeD54F",
    "xGOLD": "0x1817E2B6210Ff0B78890E388a4F27d8Ad577d875",
    "xGOOGL": "0x37150e602795CA6E765054FE23d3b79dA4cB7d24",
    "xAAPL": "0x17Df7EC93d4C258C8Adf63f20365E3BCf73c778e",
    "xTSLA": "0x4f2ca5F8DEd2DA0541a9c861A0205BF9Ca4630a6",
    "BUSD": "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
    "mocOracleAddress": "0x34261a4BBD67a89e4F5CEC5aecb1e6252Ce141B3",
    "tfiOracleAddress": "0xFc6ac0478867ce1F7f536214E3a611a7C154aF39",
    "THBOracleAddress": "0xaaB8bBCd0aD8F2D1169e104F20d9A2A6B0c0D0da",
    "GOLDOracleAddress": "0xB0d718CaaDA6d4e6872f8Cb830616e2B0C2455D0",
    "GOOGLOracleAddress": "0xCebf9309F0374D0d3e8635f9F439849e3F45Bab0",
    "AAPLOracleAddress": "0x1a22320526EBD8C2324708196DBc2D42644186f0",
    "TSLAOracleAddress": "0x62A1BeB1C943b637215Cd16437A2E62D52404C10",
    "thaifiProtocol": "0x546aAb05d4487C5451587DB7E81f621431d00Ade",
    "PriceFeeds": "0x2BFa9F6EC6Cf03c12021f9EDC4e9248c8E7dC979",
    "LoanTokenLogicStandard": "0xdF5fb5ecD5Aac914B6d0981837E82E2969909Ab1",
    "xTHB-P": "0x8d806Dc7D98c6C8422F3De4e4E907217a0F26405",
    "xTHB-P_PriceFeed": "0xaaB8bBCd0aD8F2D1169e104F20d9A2A6B0c0D0da",
    "xGOLD-P": "0x890690e530F2C8125B3f117bB49Cfe849FBECCdA",
    "xGOLD-P_PriceFeed": "0xB0d718CaaDA6d4e6872f8Cb830616e2B0C2455D0",
    "xGOOGL-P": "0x3bBb46d191A0890C8ad3f8A2151ff3f65CefaC54",
    "xGOOGL-P_PriceFeed": "0xCebf9309F0374D0d3e8635f9F439849e3F45Bab0",
    "xAAPL-P": "0x817A27fF6316A3237bF6E78dab65D044B8322DB6",
    "xAAPL-P_PriceFeed": "0x1a22320526EBD8C2324708196DBc2D42644186f0",
    "xTSLA-P": "0x9E467DBE7dbDa9f5c19E2C422A02a9b5ffF9AF75",
    "xTSLA-P_PriceFeed": "0x62A1BeB1C943b637215Cd16437A2E62D52404C10"
}

*/
export const contracts = {
  xtokenProtocol: {
    address: '0x546aAb05d4487C5451587DB7E81f621431d00Ade',
    abi: bzxAbi,
    blockNumber: 4613455,
  },
  priceFeed: {
    address: '0x2BFa9F6EC6Cf03c12021f9EDC4e9248c8E7dC979',
    abi: priceFeedsAbi,
    blockNumber: 4613459,
  },
  swapNetwork: {
    address: '0x79D7554a96d7bB2e63eEf43584d4E6235030f90E',
    abi: SwapNetworkABI,
    blockNumber: 4613467,
  },
  converterRegistry: {
    address: '0x6f76921e800746c4f007dDC35Ca931D82702bD86',
    abi: ConverterRegistryABI,
    blockNumber: 4640122,
  },
  BTC_token: {
    address: '0x00993649DDeCc3A05EA58185ff7293470F68Fd38',
    abi: abiTestWBRTCToken,
    blockNumber: 4613443,
  },
  BTC_lending: {
    address: '0xeAB0644D8b2335D2cE37D0f7da52B2Be9C60AF52',
    abi: LoanTokenLogicWrbtc,
    blockNumber: 4613527,
  },
  BUSD_token: {
    address: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSD_lending: {
    address: '0x2aFa681B90d730185847ba2c246eDDEEd94503a9',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },
  xTHB_token: {
    address: '0xF48496cb8eC05fA18c5D194c9475f2cFEEEeD54F',
    abi: TestTokenABI,
    blockNumber: 4862414,
  },
  xTHB_lending: {
    address: '0x8d806Dc7D98c6C8422F3De4e4E907217a0F26405',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  xGOLD_token: {
    address: '0x1817E2B6210Ff0B78890E388a4F27d8Ad577d875',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  xGOLD_lending: {
    address: '0x890690e530F2C8125B3f117bB49Cfe849FBECCdA',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613566,
  },
  xGOOGL_token: {
    address: '0x37150e602795CA6E765054FE23d3b79dA4cB7d24',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  xGOOGL_lending: {
    address: '0x3bBb46d191A0890C8ad3f8A2151ff3f65CefaC54',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  xAAPL_token: {
    address: '0x17Df7EC93d4C258C8Adf63f20365E3BCf73c778e',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  xAAPL_lending: {
    address: '0x817A27fF6316A3237bF6E78dab65D044B8322DB6',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  xTSLA_token: {
    address: '0x4f2ca5F8DEd2DA0541a9c861A0205BF9Ca4630a6',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  xTSLA_lending: {
    address: '0x9E467DBE7dbDa9f5c19E2C422A02a9b5ffF9AF75',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  ...(process.env.REACT_APP_WHITELIST_TOKEN &&
    process.env.REACT_APP_WHITELIST === 'true' && {
      whitelistToken: {
        address: process.env.REACT_APP_WHITELIST_TOKEN,
        abi: tokenAbi,
        blockNumber: 1218844,
      },
    }),
};
