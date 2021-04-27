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
  setPassHashOfUserForEachProvider,
  renew,
} = require('./polkadot_utils/subscryptSetFunctions');
const {
  checkAuthWithUsername, providerCheckAuthWithUsername,
  providerCheckAuth,
  checkAuth, getPlanData, userCheckAuthWithUsername, checkSubscriptionWithUsername, checkSubscription, retrieveWholeDataWithUsername, retrieveDataWithUsername,
  retrieveDataWithWallet, userCheckAuth,
} = require('./polkadot_utils/subscryptDataGetter');
const contract = require('./polkadot_utils/api').getContract();

module.exports = {
  abi: metaData,
  contract,
  getPlanData,
  checkSubscription,
  checkSubscriptionWithUsername,
  retrieveWholeDataWithUsername,
  setSubscryptPass,
  retrieveDataWithUsername,
  retrieveDataWithWallet,
  userCheckAuth,
  checkAuthWithUsername,
  checkAuth,
  userCheckAuthWithUsername,
  providerCheckAuthWithUsername,
  providerCheckAuth,
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
  setPassHashOfUserForEachProvider,
  renew,
};
