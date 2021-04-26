const {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} = require('@polkadot/extension-dapp');

module.exports.getWalletAccess = async () => {
  const extensions = await web3Enable('SubsCrypt');
  if (extensions.length === 0) {
    // no extension installed, or the user did not accept the authorization
    // in this case we should inform the use and give a link to the extension
    return { isOK: false };
  }
  return { isOK: true };
};

module.exports.getWalletAccounts = async () => web3Accounts();

module.exports.getInjector = async (account) => web3FromAddress(account.address);
