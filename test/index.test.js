const chai = require('chai');
const assert = require('assert');
const { Keyring } = require('@polkadot/keyring');
const { mnemonicGenerate } = require('@polkadot/util-crypto');
const metaData = require('../src/polkadot_utils/configs/metadata');
const { getBalance, transferToken } = require('../src/polkadot_utils/api');
const { sleep, callback } = require('./utils');

const { expect } = chai;

// This line of code is for the problem mentioned in Pull Request #4
// https://github.com/oxydev/SubsCrypt-npm-library/pull/4
window = global;

const server = require('../src');
const subscryptDataGetter = require('../src/polkadot_utils/subscryptDataGetter');
const subscryptSetFunctions = require('../src/polkadot_utils/subscryptSetFunctions');
const { isConnected } = require('../src');
const {
  SUCCESS_STATUS, REQUEST_TIMEOUT, plansData, plansCharacteristic,
} = require('../src/polkadot_utils/configs/testConfig');

describe('SubsCrypt Tests', () => {
  describe('Metadata Test', () => {
    it('Metadata Test', (done) => {
      expect(server.abi).to.equal(metaData);
      done();
    });
  });
  const keyring = new Keyring();
  const mnemonic1 = mnemonicGenerate();
  const mnemonic2 = mnemonicGenerate();
  const keyringPairProvider = keyring.addFromUri(mnemonic1, { name: 'first pair' }, 'ed25519');
  const keyringPairUser = keyring.addFromUri(mnemonic2, { name: 'second pair' }, 'ed25519');
  const usernameProvider = (Math.random() + 1).toString(36).substring(7);
  const usernameUser = (Math.random() + 1).toString(36).substring(7);
  let pass = (Math.random() + 1).toString(36).substring(7);
  console.log(keyringPairProvider.address, keyringPairUser.address, usernameProvider, usernameUser, pass);
  describe('Setter functions test', () => {
    it('faucet Test provider', async () => {
      const beforeValueProvider = await getBalance(keyringPairProvider.address);
      console.log(await transferToken(keyringPairProvider.address));
      setTimeout(async () => {
        const afterValueProvider = await getBalance(keyringPairProvider.address);
        assert.equal(parseInt(afterValueProvider) - parseInt(beforeValueProvider), 10000000000000);
      }, 5000);
    }).timeout(REQUEST_TIMEOUT);
    it('faucet Test subscriber', async () => {
      const beforeValueUser = await getBalance(keyringPairUser.address);
      await transferToken(keyringPairUser.address);

      setTimeout(async () => {
        const afterValueUser = await getBalance(keyringPairUser.address);
        assert.equal(parseInt(afterValueUser) - parseInt(beforeValueUser), 10000000000000);
      }, 5000);
    }).timeout(REQUEST_TIMEOUT);

    it('provider register test', async () => {
      const hashedPass = await subscryptDataGetter.getSha2(pass);
      console.log(usernameProvider, hashedPass.result);
      await sleep(2000);
      console.log(await subscryptSetFunctions.providerRegister(keyringPairProvider, { signer: undefined }, callback,
        [60 * 60 * 24], [1e12], [100], keyringPairProvider.address,
        usernameProvider, hashedPass.result, [['plan0']]));
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);

    it('subscribe test', async () => {
      const hashedPass = await subscryptDataGetter.getSha2(pass);
      await sleep(2000);

      await subscryptSetFunctions.subscribe(keyringPairUser, { signer: undefined }, callback,
        keyringPairProvider.address, 0, hashedPass.result, usernameUser, ['value']);
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);

    it('subscribe wrong plan number test', async () => {
      const hashedPass = await subscryptDataGetter.getSha2(pass);
      await sleep(2000);

      assert.equal(await subscryptSetFunctions.subscribe(keyringPairUser, { signer: undefined }, callback,
        keyringPairProvider.address, 3, hashedPass.result, usernameUser, ['value']), false);
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);

    it('add plan test', async () => {
      await sleep(2000);

      await subscryptSetFunctions.addPlan(keyringPairProvider, { signer: undefined }, callback,
        [60 * 60 * 24 * 10], [1e12 * 9], [200], [['plan1']]);
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);

    it('edit plan test', async () => {
      await sleep(2000);

      await subscryptSetFunctions.editPlan(keyringPairProvider, { signer: undefined }, callback,
        1, 60 * 60 * 24 * 5, 1e13, 150, false);
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);

    it('add Characteristic For Plan test', async () => {
      await sleep(5000);

      await subscryptSetFunctions.addCharacteristicForPlan(keyringPairProvider, { signer: undefined }, callback,
        1, ['plan1_added']);
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);

    it('change password provider test', async () => {
      pass = (Math.random() + 1).toString(36).substring(7);
      const hashedNewPass = await subscryptDataGetter.getSha2(pass);
      await sleep(5000);

      await subscryptSetFunctions.setProviderSubscryptPass(keyringPairProvider, { signer: undefined }, callback,
        hashedNewPass.result);
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);
    it('change password user test', async () => {
      console.log(pass);
      const hashedNewPass = await subscryptDataGetter.getSha2(pass);
      await sleep(5000);

      await subscryptSetFunctions.setUserSubscryptPass(keyringPairUser, { signer: undefined }, callback,
        hashedNewPass.result);
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);

    it('change password user for a provider test', async () => {
      console.log(pass);
      const hashedNewPass = await subscryptDataGetter.getSha2(pass);
      await sleep(5000);

      await subscryptSetFunctions.subsCryptPassHashForEachProvider(keyringPairUser, { signer: undefined }, callback,
        keyringPairProvider.address, hashedNewPass.result);
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);

    it('renew plan test', async () => {
      await sleep(5000);
      await subscryptSetFunctions.renew(keyringPairUser, { signer: undefined }, callback,
        keyringPairProvider.address, 1, ['something', 'something']);
      await sleep(5000);
    }).timeout(REQUEST_TIMEOUT);
    it('renew wrong plan number test', async () => {
      await sleep(2000);

      assert.equal(await subscryptSetFunctions.renew(keyringPairUser, { signer: undefined }, callback,
        keyringPairProvider.address, 3, ['something', 'something']), false);
      await sleep(2000);
    }).timeout(REQUEST_TIMEOUT);
    it('refund plan test', async () => {
      await sleep(10000);
      await subscryptSetFunctions.refund(keyringPairUser, { signer: undefined }, callback,
        keyringPairProvider.address, 1);
      await sleep(10000);
    }).timeout(REQUEST_TIMEOUT);
    it('withdraw  test', async () => {
      await sleep(5000);
      await subscryptSetFunctions.withdraw(keyringPairProvider, { signer: undefined }, callback);
      await sleep(5000);
    }).timeout(REQUEST_TIMEOUT);

    it('disable plan test', async () => {
      await sleep(10000);

      await subscryptSetFunctions.changeDisable(keyringPairProvider, { signer: undefined }, callback,
        1);
      await sleep(10000);
    }).timeout(REQUEST_TIMEOUT);
  });

  describe('CallView functions Test', () => {
    let userWholeData;

    describe('Check Get Sha2', () => {
      it('should hash correct', async () => {
        const result = await subscryptDataGetter.getSha2('password');
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, '0xc73b7008f623d7ccf33cfbf4021f5d5c214b8cb76821048c1d79f0e4f53c281f');
      }).timeout(REQUEST_TIMEOUT);
    });
    describe('Check UserName And UserAddress Validity', () => {
      it('should User Be Available', async () => {
        const result = await subscryptDataGetter.isUsernameAvailable(usernameUser);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, false);
      }).timeout(REQUEST_TIMEOUT);

      it('should Username of provider Be Available', async () => {
        const result = await subscryptDataGetter.isUsernameAvailable(usernameProvider);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, false);
      }).timeout(REQUEST_TIMEOUT);

      // this issue could resolve these tests:
      // https://github.com/polkadot-js/api/issues/3515

      it('should The Address Be For The User', async () => {
        const result = await subscryptDataGetter.getUsername(keyringPairUser.address);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, usernameUser);
      }).timeout(REQUEST_TIMEOUT);
      it('should The Address Be For The provider', async () => {
        const result = await subscryptDataGetter.getUsername(keyringPairProvider.address);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, usernameProvider);
      }).timeout(REQUEST_TIMEOUT);
      it('should The Address Be For The username of User', async () => {
        const result = await subscryptDataGetter.getAddressByUsername(usernameUser);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, keyringPairUser.address);
      }).timeout(REQUEST_TIMEOUT);
      it('should The Address Be For The username of provider', async () => {
        const result = await subscryptDataGetter.getAddressByUsername(usernameProvider);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, keyringPairProvider.address);
      }).timeout(REQUEST_TIMEOUT);
      it('should The Money Address Be correct', async () => {
        const result = await subscryptDataGetter.getMoneyAddress(keyringPairProvider.address);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, keyringPairProvider.address);
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
        const result = await subscryptDataGetter.userCheckAuth(keyringPairUser.address, pass);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, true);
      }).timeout(REQUEST_TIMEOUT);

      it('should Authenticate Username With Password', async () => {
        const result = await subscryptDataGetter.userCheckAuthWithUsername(usernameUser, pass);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.equal(result.result, true);
      }).timeout(REQUEST_TIMEOUT);
    });

    describe('Check Getting The Data Of The User', () => {
      it('should Retrieve Whole Data', async () => {
        const result = await subscryptDataGetter.retrieveWholeDataWithUsername(usernameUser, pass);
        assert.equal(result.status, SUCCESS_STATUS);
        userWholeData = result.result;
      }).timeout(REQUEST_TIMEOUT);

      it('should Retrieve Whole Data', async () => {
        const result = await subscryptDataGetter.retrieveWholeDataWithWallet(keyringPairUser.address);
        assert.equal(result.status, SUCCESS_STATUS);
        userWholeData = result.result;
      }).timeout(REQUEST_TIMEOUT);

      it('should Retrieve Data', async () => {
        const result = await subscryptDataGetter.retrieveDataWithUsername(usernameUser, userWholeData[0].provider, pass);
        const expectedResult = userWholeData.filter((value) => value.provider === userWholeData[0].provider);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.deepEqual(expectedResult, result.result);
      }).timeout(REQUEST_TIMEOUT);
      it('should Retrieve Data with wallet', async () => {
        const result = await subscryptDataGetter.retrieveDataWithWallet(keyringPairUser.address, userWholeData[0].provider);
        const expectedResult = userWholeData.filter((value) => value.provider === userWholeData[0].provider);
        assert.equal(result.status, SUCCESS_STATUS);
        assert.deepEqual(expectedResult, result.result);
      }).timeout(REQUEST_TIMEOUT);
    });

    describe('Check Checking Auth Of User & Its Providers', () => {
      it('should CheckAuth Using User Address', async () => {
        for (const userWholeDatum of userWholeData) {
          const result = await subscryptDataGetter.checkAuth(keyringPairUser.address, userWholeDatum.provider, pass);
          assert.equal(result.status, SUCCESS_STATUS);
        }
      }).timeout(REQUEST_TIMEOUT);

      it('should CheckAuth Using User Name', async () => {
        for (const userWholeDatum of userWholeData) {
          const result = await subscryptDataGetter.checkAuthWithUsername(usernameUser, userWholeDatum.provider, pass);
          assert.equal(result.status, SUCCESS_STATUS);
        }
      }).timeout(REQUEST_TIMEOUT);
    });

    describe('Check Auth Of Provider', () => {
      it('should CheckAuth Using Provider Address', async () => {
        const result = await subscryptDataGetter.providerCheckAuth(keyringPairProvider.address, pass);
        assert.equal(result.status, SUCCESS_STATUS);
      }).timeout(REQUEST_TIMEOUT);

      it('should CheckAuth Using Provider Username', async () => {
        const result = await subscryptDataGetter.providerCheckAuthWithUsername(usernameUser, pass);
        assert.equal(result.status, SUCCESS_STATUS);
      }).timeout(REQUEST_TIMEOUT);
    });

    describe('Check Subscription Functions', () => {
      it('should Check Subscriptions With User Address', async () => {
        for (const [index, userWholeDatum] of userWholeData.entries()) {
          const result = await subscryptDataGetter.checkSubscription(keyringPairUser.address, userWholeDatum.provider, index);
          assert.equal(result.status, SUCCESS_STATUS);
        }
      }).timeout(REQUEST_TIMEOUT);

      it('should Check Subscriptions With User Name', async () => {
        for (const [index, userWholeDatum] of userWholeData.entries()) {
          const result = await subscryptDataGetter.checkSubscriptionWithUsername(usernameUser, userWholeDatum.provider, index);
          assert.equal(result.status, SUCCESS_STATUS);
        }
      }).timeout(REQUEST_TIMEOUT);
    });

    describe('Getting Plan Data Count', () => {
      it('should Get Plan Data Length', async () => {
        const result = await subscryptDataGetter.getPlanLength(keyringPairProvider.address);
        assert.equal(result.result, 2);
      }).timeout(REQUEST_TIMEOUT);
    });
    describe('Check Getting Plan Data Funcs', () => {
      it('should Get Plan Data', async () => {
        plansData.forEach(async (plan, index) => {
          const result = await subscryptDataGetter.getPlanData(keyringPairProvider, index);
          assert.deepEqual(result.result, plan);
        });
      }).timeout(REQUEST_TIMEOUT);

      it('should Get Plan Characteristic', async () => {
        plansCharacteristic.forEach(async (planChar, index) => {
          const result = await subscryptDataGetter.getPlanCharacteristics(keyringPairProvider, index);
          assert.deepEqual(result.result, planChar);
        });
      }).timeout(REQUEST_TIMEOUT);

      it('should Get User Plan Characteristic', async () => {
        plansCharacteristic.forEach(async (planChar, index) => {
          const result = await subscryptDataGetter.getUserPlanCharacteristics(usernameUser, keyringPairProvider, index);
          assert.deepEqual(result.result, 'value');
        });
      }).timeout(REQUEST_TIMEOUT);
    });
  });
});
