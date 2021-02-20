import { RevertInstructionError } from 'web3-core-helpers';
import { xTokenNetwork } from './xtoken-network';
import { xToken } from './index';
import { ContractName } from '../types/contracts';

class ContractReader {
  private xtoken: xTokenNetwork;

  constructor() {
    this.xtoken = xToken;
  }

  /**
   * Call contract and return response string or revert error
   * @param contractName
   * @param methodName
   * @param args
   */
  public async call<T = string | RevertInstructionError>(
    contractName: ContractName,
    methodName: string,
    args: Array<any>,
  ): Promise<T> {
    return this.xtoken.contracts[contractName].methods[methodName](
      ...args,
    ).call();
  }
}

export const contractReader = new ContractReader();
