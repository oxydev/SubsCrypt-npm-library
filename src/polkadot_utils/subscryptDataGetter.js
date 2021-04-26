const { callViewFunction } = require('./interact');
// todo comments should get well-formatted

//  provider_address: AccountId,
//  plan_index: u128
/**
 * @function - A CallView function, And It's For Getting Plan Data
 * @param args - Arguments Of Refund Function
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
 * @param args - Arguments Of Refund Function
 * @param {string} args[0] - Address Of User
 * @param {string} args[1] - Address of Provider
 * @param {number} args[2] - plan_index
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.checkSubscription = async (...args) => callViewFunction('checkSubscription',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//            user: AccountId,
//             token: String,
//             phrase: String,
/**
 * @function - A CallView function, And It's For Retrieving Whole Data With Password
 * @param args - Arguments Of Refund Function
 * @param {string} args[0] - Address Of User
 * @param {string} args[1] - token
 * @param {string} args[2] - phrase
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.retrieveWholeDataWithPassword = async (...args) => callViewFunction('retrieveWholeDataWithPassword',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//            user: AccountId,
//            provider: AccountId,
//             token: String,
//             phrase: String,
/**
 * @function - A CallView function, And It's For Retrieving Data With Password
 * @param args - Arguments Of Refund Function
 * @param {string} args[0] - Address Of User
 * @param {string} args[1] - Address of Provider
 * @param {string} args[2] - token
 * @param {string} args[3] - phrase
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.retrieveDataWithPassword = async (...args) => callViewFunction('retrieveDataWithPassword',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//  user : sender
//            provider: AccountId,
/**
 * @function - A CallView function, And It's For Retrieving Data With Wallet
 * @param args - Arguments Of Refund Function
 * @param {string} args[0] - Address Of User
 * @param {string} args[1] - Address of Provider
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.retrieveDataWithWallet = async (sender, ...args) => callViewFunction('retrieveDataWithWallet',
  sender, ...args);

//  user : sender
/**
 * @function - A CallView function, And It's For Retrieving Whole Data With Wallet
 * @param args - Arguments Of Refund Function
 * @param {string} args[0] - Address Of User
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.retrieveWholeDataWithWallet = async (sender) => callViewFunction('retrieveWholeDataWithPassword',
  sender);

// user: AccountId,
//   provider: AccountId,
//   token: String,
//   pass_phrase: String,
/**
 * @function - A CallView function, And It's For Checking Auth
 * @param args - Arguments Of Refund Function
 * @param {string} args[0] - Address Of User
 * @param {string} args[1] - Address of Provider
 * @param {string} args[2] - token
 * @param {string} args[3] - pass_phrase
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.checkAuth = async (...args) => callViewFunction('checkAuth',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);
