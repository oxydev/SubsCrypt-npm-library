const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Abi, ContractPromise } = require('@polkadot/api-contract');

const metaData = require('./configs/metadata');
const config = require('./configs/config');
const { contract } = require('../index');

module.exports.getContract = async () => {
  const abi = new Abi(metaData);
  const wsProvider = new WsProvider(config.node);
  if (!wsProvider.isConnected) { return undefined; }
  const api = await ApiPromise.create({ provider: wsProvider });
  const { address } = config;
  return new ContractPromise(api, abi, address);
};

module.exports.isConnected = async () => contract != null;
