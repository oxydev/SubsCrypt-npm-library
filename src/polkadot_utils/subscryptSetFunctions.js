const { sendFunction } = require('./interact');

// sth in this format => '0x1cc7f105fdcf2a8067d1bb6e2dcb045c22d84a04733e2b11d90e26230854fd42'
/**
 * @function - A Send function, And It Sets The Subscrypt auth token hash
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param args - Arguments Of The Function
 * @param {string} args[0] - new auth token hash
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.setSubscryptPass = async (address, injector, ...args) => sendFunction('setSubscryptPass', address, injector, 0, ...args);

// provider_address: AccountId, plan_index: u128
/**
 * @function - A Send function, And It's For Refunding
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param args - Arguments Of The Function
 * @param {string} args[0] - Address of Provider
 * @param {number} args[1] - plan_index
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.refund = async (address, injector, ...args) => sendFunction('refund', address, injector, 0, ...args);

// no args
/**
 * @function - A Send function, And It's For Withdrawal
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.withdraw = async (address, injector) => sendFunction('withdraw', address, injector, 0);

//  provider_address: AccountId,
//             plan_index: u128,
//             pass: '0x1cc7f105fdcf2a8067d1bb6e2dcb045c22d84a04733e2b11d90e26230854fd42'
//             metadata: String,
/**
 * @function - A Send function, And It's For Subscription
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param {number} value - //todo this can be deleted and the info can be gotten from plan index
 * @param args - Arguments Of The Function
 * @param {string} args[0] - AccountId
 * @param {number} args[1] - plan_index
 * @param {string} args[2] - password
 * @param {string} args[3] - metadata
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.subscribe = async (address, injector, value, ...args) => sendFunction('subscribe', address, injector, value, ...args);

// plan_index: u128
/**
 * @function - A Send function, And It's For Changing Disability Of The Selected Plan
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param args - Arguments Of Refund Function
 * @param {number} args[0] - planIndex
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.changeDisable = async (address, injector, ...args) => sendFunction('changeDisable', address, injector, 0, ...args);

// plan_index: u128,
//   duration: u64,
//   active_session_limit: u128,
//   price: u128,
//   max_refund_permille_policies: u128,
//   disabled: bool,
/**
 * @function - A Send function, And It's For Editing Plan
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param args - Arguments Of Refund Function
 * @param {number} args[0] - plan_index
 * @param {number} args[1] - duration
 * @param {number} args[2] - active_session_limit
 * @param {number} args[3] - price
 * @param {number} args[4] - max_refund_permille_policy
 * @param {boolean} args[5] - disabled
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.editPlan = async (address, injector, ...args) => sendFunction('editPlan', address, injector, 0, ...args);

// durations: Vec<u64>,
//   active_session_limits: Vec<u128>,
//   prices: Vec<u128>,
//   max_refund_permille_policies: Vec<u128>,
/**
 * @function - A Send function, And It's For Adding A Plan
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param args - Arguments Of Refund Function
 * @param {number[]} args[0] - durations
 * @param {number[]} args[1] - active_sesion_limits
 * @param {number[]} args[2] - prices
 * @param {number[]} args[3] - max_refund_permille_policies
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.addPlan = async (address, injector, ...args) => sendFunction('addPlan', address, injector, 0, ...args);

// durations: Vec<u64>,
//   active_session_limits: Vec<u128>,
//   prices: Vec<u128>,
//   max_refund_permille_policies: Vec<u128>,
//   address: AccountId,
/**
 * @function - A Send function, And It's For Providing Register
 * @param {string} address - Address Of Sender
 * @param {string} injector - Object That Signs Tx
 * @param args - Arguments Of Refund Function
 * @param {number[]} args[0] - durations
 * @param {number[]} args[1] - active_sesion_limits
 * @param {number[]} args[2] - prices
 * @param {number[]} args[3] - max_refund_permille_policies
 * @param {string} args[4] - Address of money wallet of Provider
 * @returns {Promise<*>} - It's An async Function, And It Waits There To Return The Result Of The Transaction
 */
module.exports.providerRegister = async (address, injector, ...args) => sendFunction('providerRegister', address, injector, 100, ...args);
