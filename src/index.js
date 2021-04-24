const metaData = require('./polkadot_utils/configs/metadata');
const { callViewFunction } = require('./polkadot_utils/interact');
const contract = require('./polkadot_utils/api').getContract();

module.exports = {
  abi: metaData,
  contract,
  callViewFunction,
};
