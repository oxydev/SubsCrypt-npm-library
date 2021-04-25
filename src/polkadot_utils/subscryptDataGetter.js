const { callViewFunction } = require('./interact');
// todo comments should get well-formatted

//  provider_address: AccountId,
//  plan_index: u128
module.exports.getPlanData = async (...args) => callViewFunction('getPlanData',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//  user: AccountId,
//  provider_address: AccountId,
//  plan_index: u128
module.exports.checkSubscription = async (...args) => callViewFunction('checkSubscription',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//            user: AccountId,
//             token: String,
//             phrase: String,
module.exports.retrieveWholeDataWithPassword = async (...args) => callViewFunction('retrieveWholeDataWithPassword',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//            user: AccountId,
//            provider: AccountId,
//             token: String,
//             phrase: String,
module.exports.retrieveDataWithPassword = async (...args) => callViewFunction('retrieveDataWithPassword',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);

//  user : sender
//            provider: AccountId,
module.exports.retrieveDataWithWallet = async (sender, ...args) => callViewFunction('retrieveDataWithWallet',
  sender, ...args);

//  user : sender
module.exports.retrieveWholeDataWithWallet = async (sender) => callViewFunction('retrieveWholeDataWithPassword',
  sender);

// user: AccountId,
//   provider: AccountId,
//   token: String,
//   pass_phrase: String,
module.exports.checkAuth = async (...args) => callViewFunction('checkAuth',
  '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', ...args);
