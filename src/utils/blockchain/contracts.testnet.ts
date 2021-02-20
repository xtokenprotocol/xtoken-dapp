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
    "WBASE": "0xF0Ab2d52283DAb94a1Db9Da99E528D686BC14dBd",
    "BUSD": "0xC8a19327f421FEe2bd991196A12c95DB7C3A7De9",
    "JFIN": "0xF8e0E07e21Cc6e5AAB3F09359cBBDE1132FF9b83",
    "GASH": "0x3778D12096117eEcdb18fCFd0E45F4EAbf4E0Af8",
    "mocOracleAddress": "0x884e737F3E155781Bcb7aa3b5d68F9c111c0E20D",
    "tfiOracleAddress": "0x60F1c8D5337a3290214293018E0a498bF6e7293B",
    "GoldOracleAddress": "0xCB93d6dA970485d551e89C4B7460372590506D87",
    "JFINOracleAddress": "0x6E6a75E8e8aA47466a997E53b885e2c6F81Be722",
    "thaifiProtocol": "0x279Eb1BDBb3fb52e0DfDc50e6962f3773eCd27d8",
    "PriceFeeds": "0xFB4b1028CFD531dC53fF03BFc418BB524c9A1f4C",
    "LoanTokenLogicStandard": "0x4f95b19a31599B1Cc5bb673bE39940A61aA9d60E",
    "iBUSD": "0x3861b023e7a199c73f803888896949Bbb9Ba0DbA",
    "iBUSD_PriceFeed": "0xDc5a315C84CF6062608b1266636B90c054b63993",
    "iJFIN": "0xF1572F7090e075336ac6caAd6B1D97e670807241",
    "iJFIN_PriceFeed": "0x6E6a75E8e8aA47466a997E53b885e2c6F81Be722",
    "iGASH": "0x60B7EE0eeC769c7E90285e5e42FB0B163E803D76",
    "iGASH_PriceFeed": "0xCB93d6dA970485d551e89C4B7460372590506D87"
}
*/
export const contracts = {
  xtokenProtocol: {
    address: '0x79886787512EEEA3c08A1c4841DFe436B36aBb47',
    abi: bzxAbi,
    blockNumber: 4613455,
  },
  priceFeed: {
    address: '0x41D4A43207F75C96fa65044230668642e4f630aB',
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
  BUSDJ_token: {
    address: '0x7749b99533F8255D3Ba173511cA3Aa74a1C8A07d',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSDJ_lending: {
    address: '0xBAEED624F64E528A557B9753d5e1dA01E965A27f',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },
  BUSD_token: {
    address: '0x7749b99533F8255D3Ba173511cA3Aa74a1C8A07d',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSD_lending: {
    address: '0x2aFa681B90d730185847ba2c246eDDEEd94503a9',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },

  JFIN_token: {
    address: '0xEdc7c51d3831b2fdD0cd8bAB5E36298037A5129e',
    abi: TestTokenABI,
    blockNumber: 4862414,
  },
  JFIN_lending: {
    address: '0xf83C3162A21CE95FD2cab50Ce90cC760Fd55607d',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  GASH_token: {
    address: '0xB724e979267a337b415F083a0C14f1Ef9D43ccF1',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  GASH_lending: {
    address: '0x7Cf3ff7f2329D16f46FE2C5256fAc81Fce77f465',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613566,
  },
  ETH_token: {
    address: '0xc35b23d78B5042f734e8DfBF1F94E29B8F3C4d59',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  ETH_lending: {
    address: '0x2517D6d7Ef47d975C5BD083B978808b37B56f90b',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  BAND_token: {
    address: '0x254b759AC5dc140d62e6bc42b7c7C7f9C82a20d2',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  BAND_lending: {
    address: '0x526aE42f26e65382F85D19b97FD82FCe33a61115',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  ALPHA_token: {
    address: '0xE7C75241Ec97a93b2E5f24845Bf3B9af196030e3',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  ALPHA_lending: {
    address: '0x3daCD1a25c1ee58821cc52250fFA2D323491FAe0',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  DOGE_token: {
    address: '0xd6308F601166573e1e15f0fe7667B589a3fA8361',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  DOGE_lending: {
    address: '0x1b2Eb82C21689bFB38813b5cD3eBa81256AD72BC',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  USDT_token: {
    address: '0x104F81de940F3a725c23cF615DBdCe3F37D80979',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  USDT_lending: {
    address: '0x14c2594E1Cd5Dde171aDfD2b948E67FF83495611',
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
