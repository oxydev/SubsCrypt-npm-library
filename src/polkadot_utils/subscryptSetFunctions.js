const { sendFunction } = require('./interact');

// sth in this format => '0x1cc7f105fdcf2a8067d1bb6e2dcb045c22d84a04733e2b11d90e26230854fd42'
module.exports.setSubscryptPass = async (address, injector, ...args) => sendFunction('setSubscryptPass', address, injector, 0, ...args);

// provider_address: AccountId, plan_index: u128
module.exports.refund = async (address, injector, ...args) => sendFunction('refund', address, injector, 0, ...args);

// no args
module.exports.withdraw = async (address, injector) => sendFunction('withdraw', address, injector, 0);

//  provider_address: AccountId,
//             plan_index: u128,
//             pass: '0x1cc7f105fdcf2a8067d1bb6e2dcb045c22d84a04733e2b11d90e26230854fd42'
//             metadata: String,
module.exports.subscribe = async (address, injector, value, ...args) => sendFunction('subscribe', address, injector, value, ...args);

// plan_index: u128
module.exports.changeDisable = async (address, injector, ...args) => sendFunction('changeDisable', address, injector, 0, ...args);

// plan_index: u128,
//   duration: u64,
//   active_session_limit: u128,
//   price: u128,
//   max_refund_permille_policies: u128,
//   disabled: bool,
module.exports.editPlan = async (address, injector, ...args) => sendFunction('editPlan', address, injector, 0, ...args);

// durations: Vec<u64>,
//   active_session_limits: Vec<u128>,
//   prices: Vec<u128>,
//   max_refund_permille_policies: Vec<u128>,
module.exports.addPlan = async (address, injector, ...args) => sendFunction('addPlan', address, injector, 0, ...args);

// durations: Vec<u64>,
//   active_session_limits: Vec<u128>,
//   prices: Vec<u128>,
//   max_refund_permille_policies: Vec<u128>,
//   address: AccountId,
module.exports.providerRegister = async (address, injector, ...args) => sendFunction('providerRegister', address, injector, 100, ...args);
