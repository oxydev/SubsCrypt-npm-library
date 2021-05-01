const {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} = require('@polkadot/extension-dapp');
const { contract } = require('../index');

/**
 * Getting Access to PolkaDot.js wallet
 * @returns {Promise<boolean>} - status of request
 */
async function getWalletAccess() {
  if (contract == null) {
    return {
      status: 'NotConnected',
    };
  }
  const extensions = await web3Enable('SubsCrypt');
  return extensions.length !== 0;
}

/**
 * Getting Account of PolkaDot.js wallet
 * @returns {Promise<*[]>} - returns array of address pairs
 */
async function getWalletAccounts() {
  if (contract == null) {
    return {
      status: 'NotConnected',
    };
  }
  return web3Accounts();
}

/**
 * Getting Injector to sign a tx using wallet
 * @returns {Promise<*>} - returns injector object
 */
async function getInjector(account) {
  if (contract == null) {
    return {
      status: 'NotConnected',
    };
  }
  return web3FromAddress(account.address);
}

module.exports = {
  getWalletAccounts,
  getInjector,
  getWalletAccess,
};
