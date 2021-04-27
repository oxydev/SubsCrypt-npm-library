const { callViewFunction } = require('./interact');

//  provider_address: AccountId,
//  plan_index: u128
/**
 * @function - A CallView function, And It's For Getting Plan Data
 * @param args - Arguments Of getPlanData Function
 * @param {string} args[0] - Address of Provider
 * @param {number} args[1] - plan_index
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.getPlanData = async (...args) => callViewFunction('getPlanData',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//  user: AccountId,
//  provider_address: AccountId,
//  plan_index: u128
/**
 * @function - A CallView function, And It's For Checking Subscription
 * @param args - Arguments Of checkSubscription Function
 * @param {string} args[0] - Address Of User
 * @param {string} args[1] - Address of Provider
 * @param {number} args[2] - plan_index
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.checkSubscription = async (...args) => callViewFunction('checkSubscription',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//  username: String,
//  provider_address: AccountId,
//  plan_index: u128
/**
 * @function - A CallView function, And It's For Checking Subscription
 * @param args - Arguments Of checkSubscriptionWithUsername Function
 * @param {string} args[0] - Username
 * @param {string} args[1] - Address of Provider
 * @param {number} args[2] - plan_index
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.checkSubscriptionWithUsername = async (...args) => callViewFunction('checkSubscriptionWithUsername',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

// username: String,
//             password: String,
/**
 * @function - A CallView function, And It's For Retrieving Whole Data With Password
 * @param args - Arguments Of retrieveWholeDataWithUsername Function
 * @param {string} args[0] - Username
 * @param {string} args[1] - password
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.retrieveWholeDataWithUsername = async (...args) => callViewFunction('retrieveWholeDataWithUsername',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

// username: String,
//   provider_address: AccountId,
//   phrase: String,
/**
 * @function - A CallView function, And It's For Retrieving Data With Password
 * @param args - Arguments Of retrieveDataWithUsername Function
 * @param {string} args[0] - Username
 * @param {string} args[1] - Address of Provider
 * @param {string} args[2] - password
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.retrieveDataWithUsername = async (...args) => callViewFunction('retrieveDataWithUsername',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//  user : sender
//            provider: AccountId,
/**
 * @function - A CallView function, And It's For Retrieving Data With Wallet
 * @param {string} sender - Address Of User
 * @param args - Arguments Of retrieveDataWithWallet Function
 * @param {string} args[0] - Address of Provider
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.retrieveDataWithWallet = async (sender, ...args) => callViewFunction('retrieveDataWithWallet',
  sender, ...args);

//  user : sender
/**
 * @function - A CallView function, And It's For Retrieving Whole Data With Wallet
 * @param {string} sender - Address Of User
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.retrieveWholeDataWithWallet = async (sender) => callViewFunction('retrieveWholeDataWithPassword',
  sender);

//   user: AccountId,
//   pass_phrase: String,
/**
 * @function - A CallView function, And It's For Checking Auth in SubsCrypt Dashboard
 * @param args - Arguments Of userCheckAuth Function
 * @param {string} args[0] - Address Of User
 * @param {string} args[1] - pass_phrase
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.userCheckAuth = async (...args) => callViewFunction('userCheckAuth',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//   provider: AccountId,
//   pass_phrase: String,
/**
 * @function - A CallView function, And It's For Checking Auth in SubsCrypt Dashboard
 * @param args - Arguments Of providerCheckAuth Function
 * @param {string} args[0] - Address Of Provider
 * @param {string} args[1] - pass_phrase
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.providerCheckAuth = async (...args) => callViewFunction('providerCheckAuth',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//   username: String,
//   pass_phrase: String,
/**
 * @function - A CallView function, And It's For Checking Auth in SubsCrypt Dashboard
 * @param args - Arguments Of providerCheckAuthWithUsername Function
 * @param {string} args[0] - Username of provider
 * @param {string} args[1] - pass_phrase
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.providerCheckAuthWithUsername = async (...args) => callViewFunction('providerCheckAuthWithUsername',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

// username: String,
//   pass_phrase: String,
/**
 * @function - A CallView function, And It's For Checking Auth in SubsCrypt Dashboard
 * @param args - Arguments Of userCheckAuthWithUsername Function
 * @param {string} args[0] - Username
 * @param {string} args[1] - pass_phrase
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.userCheckAuthWithUsername = async (...args) => callViewFunction('userCheckAuthWithUsername',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

// user: AccountId,
//   provider: AccountId,
//   pass_phrase: String,
/**
 * @function - A CallView function, And It's For Checking Auth of users in different providers using wallet
 * @param args - Arguments Of checkAuth Function
 * @param {string} args[0] - Address Of User
 * @param {string} args[1] - Address of Provider
 * @param {string} args[2] - pass_phrase
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.checkAuth = async (...args) => callViewFunction('checkAuth',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

// username: String,
//   provider: AccountId,
//   pass_phrase: String,
/**
 * @function - A CallView function, And It's For Checking Auth of users in different providers using user and pass
 * @param args - Arguments Of checkAuthWithUsername Function
 * @param {string} args[0] - Address Of User
 * @param {string} args[1] - Address of Provider
 * @param {string} args[2] - pass_phrase
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.checkAuthWithUsername = async (...args) => callViewFunction('checkAuthWithUsername',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);
