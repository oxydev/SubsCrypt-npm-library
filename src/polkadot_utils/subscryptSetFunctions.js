const { getPlanData } = require('./subscryptDataGetter');
const { sendFunction } = require('./interact');

// sth in this format => '0x1cc7f105fdcf2a8067d1bb6e2dcb045c22d84a04733e2b11d90e26230854fd42'
/**
 * It sets The SubsCrypt dashboard pass hash
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {string} passHash - new auth token hash
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function setSubscryptPass(address, injector, fallback, passHash) {
  return sendFunction('setSubscryptPass', address, injector, 0, fallback, passHash);
}

// provider_address: AccountId
// and sth in this format => '0x1cc7f105fdcf2a8067d1bb6e2dcb045c22d84a04733e2b11d90e26230854fd42'

/**
 * It sets The password hash of user for a specific provider
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {string} providerAddress - Address of Provider
 * @param {string} passHash - new pass hash
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function setPassHashOfUserForEachProvider(address, injector, fallback, providerAddress, passHash) {
  return sendFunction('setPassHashOfUserForEachProvider', address, injector, 0, fallback, providerAddress, passHash);
}

/**
 * refund subscription function
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {string} providerAddress - Address of Provider
 * @param {number} planIndex - plan_index
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function refund(address, injector, fallback, providerAddress, planIndex) {
  return sendFunction('refund', address, injector, 0, fallback, providerAddress, planIndex);
}

/**
 * It's For renewing subscription
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {string} providerAddress - Address of Provider
 * @param {number} planIndex - plan_index
 * @param {string[]} newCharacteristicsValues - newCharacteristicsValues
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function renew(address, injector, fallback, providerAddress, planIndex, newCharacteristicsValues) {
  const plan = await getPlanData(providerAddress, planIndex);
  let value = 0;
  if (plan.status === 'Fetched') value = plan.result.price;
  else return false;
  return sendFunction('renew', address, injector, value, fallback,  providerAddress, planIndex, newCharacteristicsValues);
}

/**
 * Claiming profit money of providers
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function withdraw(address, injector, fallback) {
  sendFunction('withdraw', address, injector, 0, fallback);
}
//             provider_address: AccountId,
//             plan_index: u128,
//             pass hash: '0x1cc7f105fdcf2a8067d1bb6e2dcb045c22d84a04733e2b11d90e26230854fd42'
//             username: String,
//             metadata: String,
/**
 * It's For Subscription
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {string} providerAddress - Address of provider
 * @param {number} planIndex - plan_index
 * @param {string} passHash - password hash
 * @param {string} username - username
 * @param {string[]} newCharacteristicsValues - newCharacteristicsValues
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function subscribe(address, injector, fallback, providerAddress,
  planIndex, passHash, username, newCharacteristicsValues) {
  const plan = await getPlanData(providerAddress, planIndex);
  let value = 0;
  if (plan.status === 'Fetched') value = plan.result.price;
  else return;
  return sendFunction('subscribe', address, injector,value, fallback, providerAddress, planIndex, passHash, username, newCharacteristicsValues);
}

/**
 * It's For Changing Disability Of The Selected Plan
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {number} planIndex - planIndex
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function changeDisable(address, injector, fallback, planIndex) {
  return sendFunction('changeDisable', address, injector, 0, fallback, planIndex);
}

/**
 * It's For Editing Plan
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {number} planIndex- plan_index
 * @param {number} duration - duration
 * @param {number} price - price
 * @param {number} maxRefundPermillePolicy - max_refund_permille_policy
 * @param {boolean} disabled - disabled
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function editPlan(address, injector, fallback, planIndex,
  duration, price, maxRefundPermillePolicy, disabled) {
  return sendFunction('editPlan', address, injector, 0, fallback, planIndex, duration, price, maxRefundPermillePolicy, disabled);
}

/**
 * It's For Adding A Plan
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {number[]} durations - durations
 * @param {number[]} prices - prices
 * @param {number[]} maxRefundPermillePolicies - max_refund_permille_policies
 * @param {string[][]} planCharacteristics - plan_characteristics
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function addPlan(address, injector, fallback, durations, prices, maxRefundPermillePolicies, planCharacteristics) {
  sendFunction('addPlan', address, injector, 0, fallback, durations, prices, maxRefundPermillePolicies, planCharacteristics);
}

/**
 * It's For Provider Register
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {number[]} durations - durations
 * @param {number[]} prices - prices
 * @param {number[]} maxRefundPermillePolicies - max_refund_permille_policies
 * @param {string} moneyAddress - Address of money wallet of Provider
 * @param {String} username - username
 * @param {string} passHash - subscrypt_pass_hash
 * @param {string[][]} planCharacteristics - plan_characteristics
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function providerRegister(address, injector, fallback, durations, prices, maxRefundPermillePolicies,
  moneyAddress, username, passHash, planCharacteristics) {
  sendFunction('providerRegister', address, injector, 100, fallback, durations, prices, maxRefundPermillePolicies,
    moneyAddress, username, passHash, planCharacteristics);
}
/**
 * It's For Provider to add more features to their plans
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {function} fallback - Function for handling returned result
 * @param {number} planIndex - plan_index
 * @param {string[]} planCharacteristics - plan_characteristics
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
async function addCharacteristicForPlan(address, injector, fallback, planIndex, planCharacteristics) {
  sendFunction('addCharacteristicForPlan', address, injector,0, fallback, planIndex, planCharacteristics);
}

module.exports = {
  setSubscryptPass,
  setPassHashOfUserForEachProvider,
  refund,
  renew,
  withdraw,
  subscribe,
  changeDisable,
  editPlan,
  addPlan,
  providerRegister,
  addCharacteristicForPlan,
};
