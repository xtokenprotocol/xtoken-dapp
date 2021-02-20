/**
 * Do not import this file directly.
 * Use getContract(contractName) helper
 * @example getContract('xtokenProtocol');
 */

import bzxAbi from './abi/bzxAbi.json';
import priceFeedsAbi from './abi/priceFeedAbi.json';
//import LiquidityPoolV2Converter from './abi/LiquidityPoolV2Converter.json';
import tokenAbi from './abi/abiTestToken.json';
import abiTestWBRTCToken from './abi/abiTestWBRTCToken.json';
//import LoanTokenLogicWrbtc from './abi/LoanTokenLogicWrbtc.json';
import LoanTokenLogicStandard from './abi/LoanTokenLogicStandard.json';
import TestTokenABI from './abi/abiTestToken.json';
import SwapNetworkABI from './abi/xTokenSwapNetwork.json';
import ConverterRegistryABI from './abi/ConverterRegistry.json';
import RBTCWrapperProxy from './abi/RBTCWrapperProxy.json';

export const contracts = {
  xtokenProtocol: {
    address: '0xf263906c77C64f8426dEa674891c80d894880dDA',
    abi: bzxAbi,
    blockNumber: 4613455,
  },
  BTCWrapperProxy: {
    address: '0x78E7e79F1acc1f57a3291d5BfA8436A0771C1800',
    abi: RBTCWrapperProxy,
    blockNumber: 2838500,
  },
  priceFeed: {
    address: '0x203daeCF10a354DF18Ba3DA24Df41Ba1904a3e7F',
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
  BNB_token: {
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    abi: abiTestWBRTCToken,
    blockNumber: 4613443,
  },
  BUSD_token: {
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSD_lending: {
    address: '0xE5ee1384332167761F9d939Ad0A2815AA87777f3',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },
  JFIN_token: {
    address: '0x8ad88bc768048596f58cd6572dbab979274faccb',
    abi: TestTokenABI,
    blockNumber: 4862414,
  },
  JFIN_lending: {
    address: '0xaea417e9C9F2322C30ce5238a67D627595e8A781',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  GASH_token: {
    address: '0xea080f4bb819a54cf47a0b10771476f548738287',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  GASH_lending: {
    address: '0x4Ad11800e197B3A17d78a5c2466647527750560c',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613566,
  },
  ETH_token: {
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  ETH_lending: {
    address: '0x2eF35B4408DD6aE9B0d36f38e68f5339438D0aFE',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  BAND_token: {
    address: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  BAND_lending: {
    address: '0x2F848ea7f4fBd5460222180397406c7727306D11',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  ALPHA_token: {
    address: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  ALPHA_lending: {
    address: '0x47A279c22b975f949F99F5c95e5332fbacE966A0',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  WBTC_token: {
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  WBTC_lending: {
    address: '0x49CAF3504830FCc19f650E1973911ddDe790F83F',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  DOGE_token: {
    address: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  DOGE_lending: {
    address: '0xd82bd5fEF87214298D706762Ace12E21825CE5BC',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  USDT_token: {
    address: '0x55d398326f99059ff775485246999027b3197955',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  USDT_lending: {
    address: '0x879Aa05B89203b4b4b0dc798e8a3935Bd5Ddf343',
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
