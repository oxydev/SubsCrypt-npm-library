const metaData = require('./polkadot_utils/configs/metadata');
const {
  getWalletAccounts,
  getWalletAccess,
  getInjector,
} = require('./polkadot_utils/getWalletAccess');
const {
  setSubscryptPass, refund,
  withdraw,
  subscribe,
  changeDisable,
  editPlan,
  addPlan,
  providerRegister,
} = require('./polkadot_utils/subscryptSetFunctions');
const {
  getPlanData, checkSubscription, retrieveWholeDataWithPassword, retrieveDataWithPassword,
  retrieveDataWithWallet, checkAuth,
} = require('./polkadot_utils/subscryptDataGetter');
const contract = require('./polkadot_utils/api').getContract();

module.exports = {
  abi: metaData,
  contract,
  getPlanData,
  checkSubscription,
  retrieveWholeDataWithPassword,
  setSubscryptPass,
  retrieveDataWithPassword,
  retrieveDataWithWallet,
  checkAuth,
  refund,
  withdraw,
  subscribe,
  changeDisable,
  editPlan,
  addPlan,
  providerRegister,
  getWalletAccounts,
  getWalletAccess,
  getInjector,
};
