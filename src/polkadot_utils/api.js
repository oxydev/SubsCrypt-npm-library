const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Abi, ContractPromise } = require('@polkadot/api-contract');

const metaData = require('./configs/metadata');
const config = require('./configs/config');

module.exports.getContract = async () => {
  const abi = new Abi(metaData);
  const wsProvider = new WsProvider(config.node);
  const api = await ApiPromise.create({ provider: wsProvider });
  if (!wsProvider.isConnected) {
    return undefined;
  }
  const { address } = config;
  return new ContractPromise(api, abi, address);
};
