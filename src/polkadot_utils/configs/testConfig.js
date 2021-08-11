const REQUEST_TIMEOUT = 40000;
const FAILED_STATUS = 'Failed';
const
  SUCCESS_STATUS = 'Fetched';
const contractAddr = '5CLff1WP6hnswYqSFZCSgEK1Xmef8UBunHxCzgnQVFXELHj1';
const userName = 'user';
const providerName = 'oxydev';
const userAddress = '5GpAVjP8rH5mNeUrd98YgP9AU3bAMMV5RPWzqwrwDh9qEHKy';
const providerAddress = '5Dyu5YxLufavjPg8vP31BhKs5xz8ncdkQcNdGwf5XtW4C9Ym';
const passWord = 'password';

const plansData = [{
  duration: '7776000000',
  price: '1000000000000',
  max_refund_permille_policy: '200',
  disabled: false,
}];
const plansCharacteristic = [['email']];

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
