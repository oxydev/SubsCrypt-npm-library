const {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} = require('@polkadot/extension-dapp');

/**
 * Getting Access to PolkaDot.js wallet
 * @returns {Promise<boolean>} - status of request
 */
async function getWalletAccess() {
  const extensions = await web3Enable('SubsCrypt');
  return extensions.length !== 0;
}

/**
 * Getting Account of PolkaDot.js wallet
 * @returns {Promise<*[]>} - returns array of address pairs
 */
async function getWalletAccounts() {
  return web3Accounts();
}

/**
 * Getting Injector to sign a tx using wallet
 * @returns {Promise<*>} - returns injector object
 */
async function getInjector(account) {
  return web3FromAddress(account.address);
}

module.exports = {
  getWalletAccounts,
  getInjector,
  getWalletAccess,
};
