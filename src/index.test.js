const chai = require('chai');
const assert = require('assert');
const metaData = require('./polkadot_utils/configs/metadata');

const { expect } = chai;

// This line of code is for the problem mentioned in Pull Request #4
// https://github.com/oxydev/SubsCrypt-npm-library/pull/4
window = global;

const server = require('./index');
const config = require('./polkadot_utils/configs/config');
const subscryptDataGetter = require('./polkadot_utils/subscryptDataGetter');
const { isConnected } = require('./index');
const {
  SUCCESS_STATUS, passWord, username, userAddress, contractAddress, providerName,
  providerAddress, REQUEST_TIMEOUT, FAILED_STATUS, plansData, plansCharacteristic,
} = require('./polkadot_utils/configs/testConfig');

describe('Metadata Test', () => {
  it('Metadata Test', (done) => {
    expect(server.abi).to.equal(metaData);
    done();
  });
});

describe('CallView Funcs Test 1', () => {
  let userWholeData;

  before(() => {
    // todo
    // Init Timeout
    // Init Contract Address
    config.address = contractAddress;
  });

  describe('Check UserName And UserAddress Validity', () => {
    it('should User Be Available', async () => {
      const result = await subscryptDataGetter.isUsernameAvailable(username);
      assert.equal(result.status, SUCCESS_STATUS);
      assert.equal(result.result, false);
    }).timeout(REQUEST_TIMEOUT);

    it('should Username of provider Be Available', async () => {
      const result = await subscryptDataGetter.isUsernameAvailable(providerName);
      assert.equal(result.status, SUCCESS_STATUS);
      assert.equal(result.result, false);
    }).timeout(REQUEST_TIMEOUT);

    // this issue could resolve these tests:
    // https://github.com/polkadot-js/api/issues/3515

    it('should The Address Be For The User', async () => {
      const result = await subscryptDataGetter.getUsername(userAddress);
      assert.equal(result.status, SUCCESS_STATUS);
      assert.equal(result.result, username);
    }).timeout(REQUEST_TIMEOUT);
    it('should The Address Be For The provider', async () => {
      const result = await subscryptDataGetter.getUsername(providerAddress);
      assert.equal(result.status, SUCCESS_STATUS);
      assert.equal(result.result, providerName);
    }).timeout(REQUEST_TIMEOUT);
    it('should The Address Be For The username of User', async () => {
      console.log(username);
      const result = await subscryptDataGetter.getAddressByUsername(username);
      assert.equal(result.status, SUCCESS_STATUS);
      assert.equal(result.result, userAddress);
    }).timeout(REQUEST_TIMEOUT);
    it('should The Address Be For The username of provider', async () => {
      const result = await subscryptDataGetter.getAddressByUsername(providerName);
      console.log(result);
      assert.equal(result.status, SUCCESS_STATUS);
      assert.equal(result.result, providerAddress);
    }).timeout(REQUEST_TIMEOUT);
  });

  describe('Check Server', () => {
    it('should be connected to server', async () => {
      const result = await isConnected();
      assert.equal(result, true);
    }).timeout(REQUEST_TIMEOUT);
  });

  describe('Check User Authentication', () => {
    it('should Authenticate User Address With Password', async () => {
      const result = await subscryptDataGetter.userCheckAuth(userAddress, passWord);
      assert.equal(result.status, SUCCESS_STATUS);
      assert.equal(result.result, true);
    }).timeout(REQUEST_TIMEOUT);

    it('should Authenticate Username With Password', async () => {
      const result = await subscryptDataGetter.userCheckAuthWithUsername(username, passWord);
      assert.equal(result.status, SUCCESS_STATUS);
      assert.equal(result.result, true);
    }).timeout(REQUEST_TIMEOUT);
  });

  describe('Check Getting The Data Of The User', () => {
    it('should Retrieve Whole Data', async () => {
      const result = await subscryptDataGetter.retrieveWholeDataWithUsername(username, passWord);
      assert.equal(result.status, SUCCESS_STATUS);
      userWholeData = result.result;
    }).timeout(REQUEST_TIMEOUT);

    it('should Retrieve Data', async () => {
      const result = await subscryptDataGetter.retrieveDataWithUsername(username, userWholeData[0].provider, passWord);
      const expectedResult = userWholeData.filter((value) => value.provider === userWholeData[0].provider);
      assert.equal(result.status, SUCCESS_STATUS);
      assert.deepEqual(expectedResult, result.result);
    }).timeout(REQUEST_TIMEOUT);
  });

  describe('Check Checking Auth Of User & Its Providers', () => {
    it('should CheckAuth Using User Address', async () => {
      for (const userWholeDatum of userWholeData) {
        const result = await subscryptDataGetter.checkAuth(userAddress, userWholeDatum.provider, passWord);
        assert.equal(result.status, SUCCESS_STATUS);
      }
    }).timeout(REQUEST_TIMEOUT);

    it('should CheckAuth Using User Name', async () => {
      for (const userWholeDatum of userWholeData) {
        const result = await subscryptDataGetter.checkAuthWithUsername(username, userWholeDatum.provider, passWord);
        assert.equal(result.status, SUCCESS_STATUS);
      }
    }).timeout(REQUEST_TIMEOUT);
  });

  describe('Check Auth Of Provider', () => {
    it('should CheckAuth Using Provider Address', async () => {
      const result = await subscryptDataGetter.providerCheckAuth(userAddress, passWord);
      assert.equal(result.status, SUCCESS_STATUS);
    }).timeout(REQUEST_TIMEOUT);

    it('should CheckAuth Using Provider Username', async () => {
      const result = await subscryptDataGetter.providerCheckAuthWithUsername(username, passWord);
      assert.equal(result.status, SUCCESS_STATUS);
    }).timeout(REQUEST_TIMEOUT);
  });

  describe('Check Subscription Functions', () => {
    it('should Check Subscriptions With User Address', async () => {
      for (const [index, userWholeDatum] of userWholeData.entries()) {
        const result = await subscryptDataGetter.checkSubscription(userAddress, userWholeDatum.provider, index);
        assert.equal(result.status, SUCCESS_STATUS);
      }
    }).timeout(REQUEST_TIMEOUT);

    it('should Check Subscriptions With User Name', async () => {
      for (const [index, userWholeDatum] of userWholeData.entries()) {
        const result = await subscryptDataGetter.checkSubscriptionWithUsername(username, userWholeDatum.provider, index);
        assert.equal(result.status, SUCCESS_STATUS);
      }
    }).timeout(REQUEST_TIMEOUT);
  });

  describe('Getting Plan Data Count', () => {
    it('should Get Plan Data Length', async () => {
      const result = await subscryptDataGetter.getPlanLength(providerAddress);
      assert.equal(result.result, plansData.length);
    }).timeout(REQUEST_TIMEOUT);
  });
  describe('Check Getting Plan Data Funcs', () => {
    it('should Get Plan Data', async () => {
      plansData.forEach(async (plan, index) => {
        const result = await subscryptDataGetter.getPlanData(providerAddress, index);
        assert.deepEqual(result.result, plan);
      });
    }).timeout(REQUEST_TIMEOUT);

    it('should Get Plan Characteristic', async () => {
      plansCharacteristic.forEach(async (planChar, index) => {
        const result = await subscryptDataGetter.getPlanCharacteristics(providerAddress, index);
        assert.deepEqual(result.result, planChar);
      });
    }).timeout(REQUEST_TIMEOUT);
  });
});
