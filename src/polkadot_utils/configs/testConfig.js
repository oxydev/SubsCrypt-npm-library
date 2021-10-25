const REQUEST_TIMEOUT = 60000;
const FAILED_STATUS = 'Failed';
const
  SUCCESS_STATUS = 'Fetched';

const plansData = [{
  duration: '7776000000',
  price: '1000000000000',
  max_refund_permille_policy: '200',
  disabled: false,
}];
const plansCharacteristic = [['email']];

module.exports = {
  plansData,
  plansCharacteristic,
  FAILED_STATUS,
  SUCCESS_STATUS,
  REQUEST_TIMEOUT,
};
