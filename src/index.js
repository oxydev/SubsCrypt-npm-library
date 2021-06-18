const metaData = require('./polkadot_utils/configs/metadata');
const { isConnected } = require('./polkadot_utils/interact');
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
  addCharacteristicForPlan,
} = require('./polkadot_utils/subscryptSetFunctions');
const {
  getAddressByUsername, getSha2, getPlanLength, retrieveWholeDataWithWallet, getUsername, providerCheckAuth,
  checkAuthWithUsername, providerCheckAuthWithUsername, isUsernameAvailable,
  checkAuth, getPlanData, userCheckAuthWithUsername, checkSubscriptionWithUsername,
  checkSubscription, retrieveWholeDataWithUsername, retrieveDataWithUsername,
  retrieveDataWithWallet, userCheckAuth, getPlanCharacteristics,
} = require('./polkadot_utils/subscryptDataGetter');
const contract = require('./polkadot_utils/api').getContract();
const testMetaData = require('./polkadot_utils/configs/testConfig');
const config = require('./polkadot_utils/configs/config');
const { getBalance, getEvents, abiInstance } = require('./polkadot_utils/api');

module.exports = {
  abi: metaData,
  contract,
  isConnected,
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
  getSha2,
  retrieveWholeDataWithWallet,
  testMetaData,
  config,
  getUsername,
  isUsernameAvailable,
  getPlanCharacteristics,
  getBalance,
  getEvents,
  abiInstance,
  addCharacteristicForPlan,
  getPlanLength,
  getAddressByUsername,
};
