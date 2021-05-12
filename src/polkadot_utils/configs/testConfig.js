const REQUEST_TIMEOUT = 10000;
const FAILED_STATUS = 'Failed'; const
  SUCCESS_STATUS = 'Fetched';
const contractAddr = '5GHPvbpy1GQZMqcAQUV22sW9G8sx1FNEvexd9M8kufXGJzZq';
const userName = 'user';
const providerName = 'provider';
const userAddress = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';
const providerAddress = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const passWord = 'password';
const planDataWithIndex0 = {
  duration: '1,000,000',
  price: '1,000',
  max_refund_permille_policy: '100',
  disabled: false,
};
const planCharacteristicWithIndex0 = ['key1plan0'];

let userWholeData;

module.exports = {
  contractAddress: contractAddr,
  username: userName,
  userAddress,
  passWord,
  userWholeData,
  providerName,
  providerAddress,
  planDataWithIndex0,
  planCharacteristicWithIndex0,
  FAILED_STATUS,
  SUCCESS_STATUS,
  REQUEST_TIMEOUT,
};
