const metaData = require('./polkadot_utils/configs/metadata');
const { isConnected } = require('./polkadot_utils/interact');
const getWalletAccess = require('./polkadot_utils/getWalletAccess');
const subscryptSetFunctions = require('./polkadot_utils/subscryptSetFunctions');
const subscryptDataGetter = require('./polkadot_utils/subscryptDataGetter');
const contract = require('./polkadot_utils/api').getContract;
const testMetaData = require('./polkadot_utils/configs/testConfig');
const config = require('./polkadot_utils/configs/config');
const api = require('./polkadot_utils/api');

module.exports = {
  abi: metaData,
  contract,
  isConnected,
  getPlanData: subscryptDataGetter.getPlanData,
  checkSubscription: subscryptDataGetter.checkSubscription,
  checkSubscriptionWithUsername: subscryptDataGetter.checkSubscriptionWithUsername,
  retrieveWholeDataWithUsername: subscryptDataGetter.retrieveWholeDataWithUsername,
  setUserSubscryptPass: subscryptSetFunctions.setUserSubscryptPass,
  setProviderSubscryptPass: subscryptSetFunctions.setProviderSubscryptPass,
  retrieveDataWithUsername: subscryptDataGetter.retrieveDataWithUsername,
  retrieveDataWithWallet: subscryptDataGetter.retrieveDataWithWallet,
  userCheckAuth: subscryptDataGetter.userCheckAuth,
  checkAuthWithUsername: subscryptDataGetter.checkAuthWithUsername,
  checkAuth: subscryptDataGetter.checkAuth,
  userCheckAuthWithUsername: subscryptDataGetter.userCheckAuthWithUsername,
  providerCheckAuthWithUsername: subscryptDataGetter.providerCheckAuthWithUsername,
  providerCheckAuth: subscryptDataGetter.providerCheckAuth,
  refund: subscryptSetFunctions.refund,
  withdraw: subscryptSetFunctions.withdraw,
  subscribe: subscryptSetFunctions.subscribe,
  changeDisable: subscryptSetFunctions.changeDisable,
  editPlan: subscryptSetFunctions.editPlan,
  addPlan: subscryptSetFunctions.addPlan,
  providerRegister: subscryptSetFunctions.providerRegister,
  getWalletAccounts: getWalletAccess.getWalletAccounts,
  getWalletAccess: getWalletAccess.getWalletAccess,
  getInjector: getWalletAccess.getInjector,
  subsCryptPassHashForEachProvider: subscryptSetFunctions.subsCryptPassHashForEachProvider,
  renew: subscryptSetFunctions.renew,
  getSha2: subscryptDataGetter.getSha2,
  retrieveWholeDataWithWallet: subscryptDataGetter.retrieveWholeDataWithWallet,
  testMetaData,
  config,
  getUsername: subscryptDataGetter.getUsername,
  isUsernameAvailable: subscryptDataGetter.isUsernameAvailable,
  getPlanCharacteristics: subscryptDataGetter.getPlanCharacteristics,
  getBalance: api.getBalance,
  getEvents: api.getEvents,
  abiInstance: api.abiInstance,
  addCharacteristicForPlan: subscryptSetFunctions.addCharacteristicForPlan,
  getPlanLength: subscryptDataGetter.getPlanLength,
  getAddressByUsername: subscryptDataGetter.getAddressByUsername,
  getUserPlanCharacteristics: subscryptDataGetter.getUserPlanCharacteristics,
  transferToken: api.transferToken,
  getWithdrawableAmount: subscryptDataGetter.getWithdrawableAmount,
  getMoneyAddress: subscryptDataGetter.getMoneyAddress,
};
