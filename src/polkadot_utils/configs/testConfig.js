const REQUEST_TIMEOUT = 40000;
const FAILED_STATUS = 'Failed';
const
  SUCCESS_STATUS = 'Fetched';
const contractAddr = '5H8tasjayGStiZ8uWZk8juzushY63gFiSRTz15gfYZVdDS5y';
const userName = 'user';
const providerName = 'provider';
const userAddress = '5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc';
const providerAddress = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';
const passWord = 'password';

const plansData = [{
  duration: '86,400,000',
  price: '1,000,000',
  max_refund_permille_policy: '100',
  disabled: false,
}, {
  duration: '864,000,000',
  price: '9,000,000',
  max_refund_permille_policy: '150',
  disabled: false,
}, {
  duration: '1,728,000,000',
  price: '16,000,000',
  max_refund_permille_policy: '200',
  disabled: false,
}];
const plansCharacteristic = [['plan0'], ['plan1_0', 'plan1_1'], ['plan2_0', 'plan2_1', 'plan2_2']];

let userWholeData;

module.exports = {
  contractAddress: contractAddr,
  username: userName,
  userAddress,
  passWord,
  userWholeData,
  providerName,
  providerAddress,
  plansData,
  plansCharacteristic,
  FAILED_STATUS,
  SUCCESS_STATUS,
  REQUEST_TIMEOUT,
};
