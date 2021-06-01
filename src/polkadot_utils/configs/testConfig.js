const REQUEST_TIMEOUT = 40000;
const FAILED_STATUS = 'Failed'; const
  SUCCESS_STATUS = 'Fetched';
const contractAddr = '5D2hNXjKDUZ9Ujk6edtHncH6k5fbRXsU7jL65BJa5Ritq3Wr';
const userName = 'user';
const providerName = 'provider';
const userAddress = '5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc';
const providerAddress = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';
const passWord = 'password';
const planDataWithIndex0 = {
  duration: '86,400,000',
  price: '1,000,000',
  max_refund_permille_policy: '100',
  disabled: false,
};
const planCharacteristicWithIndex0 = ['plan0'];

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
