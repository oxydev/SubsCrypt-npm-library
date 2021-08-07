const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
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

module.exports.getBalance = async (sender) => {
  const wsProvider = new WsProvider(config.node);
  const api = await ApiPromise.create({ provider: wsProvider });
  const data = await api.query.system.account(sender);
  return data.data.free;
};

module.exports.transferToken = async (receiver) => {
  const wsProvider = new WsProvider(config.node);
  const api = await ApiPromise.create({ provider: wsProvider });
  const keyring = new Keyring({ type: 'sr25519' });
  const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });
  return api.tx.balances
    .transfer(receiver, 10000000000000)
    .signAndSend(alice);
};
module.exports.getEvents = async (fallBackFunc) => {
  const wsProvider = new WsProvider(config.node);
  const api = await ApiPromise.create({ provider: wsProvider });
  api.query.system.events(fallBackFunc);
};

module.exports.abiInstance = async () => new Abi(metaData);
