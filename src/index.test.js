const chai = require('chai');
const metaData = require('./polkadot_utils/configs/metadata');
let assert = require('assert');
const {expect} = chai;

// This line of code is for the problem mentioned in Pull Request #4
// https://github.com/oxydev/SubsCrypt-npm-library/pull/4
window = global;

const server = require('./index.js');
const config = require('./polkadot_utils/configs/config');
const subscryptDataGetter = require('./polkadot_utils/subscryptDataGetter');
const {isConnected} = require("./index");
const {SUCCESS_STATUS, passWord, username, userAddress, contractAddress, REQUEST_TIMEOUT, FAILED_STATUS} = require("./polkadot_utils/configs/testConfig");

describe('Metadata Test', () => {
    it('Metadata Test', (done) => {
        expect(server.abi).to.equal(metaData);
        done();
    });
});

describe('CallView Funcs Test 1', () => {
    let userWholeData;

    before(function () {
        //todo
        // Init Timeout
        // Init Contract Address
        config.address = contractAddress;
    })

    // describe('Check UserName And UserAddress Validity', () => {
    //   it('should User Be Available', async function (done) {
    //     let result = await subscryptDataGetter.isUsernameAvailable(userName);
    //     console.log(result)
    //     assert.equal(result.status, SUCCESS_STATUS)
    //     done();
    //   });
    //
    //   it('should The Address Be For The User', function () {
    //     let result = subscryptDataGetter.getUsername(userAddress);
    //     assert.equal(result.status, SUCCESS_STATUS);
    //     assert.equal(result.result, userName);
    //   });
    // })

    describe('Check Server', () => {
        it('should be connected to server', async function () {
            let result = await isConnected();
            assert.equal(result, true);
        }).timeout(REQUEST_TIMEOUT);
    })

    describe('Check User Authentication', () => {
        it('should Authenticate User Address With Password', async function () {
            let result = await subscryptDataGetter.userCheckAuth(userAddress, passWord);
            assert.equal(result.status, SUCCESS_STATUS);
        }).timeout(REQUEST_TIMEOUT);

        it('should Authenticate Username With Password', async function () {
            let result = await subscryptDataGetter.userCheckAuthWithUsername(username, passWord);
            assert.equal(result.status, SUCCESS_STATUS);
        }).timeout(REQUEST_TIMEOUT);
    })

    describe('Check Getting The Data Of The User', () => {
        it('should Retrieve Whole Data', async function () {
            let result = await subscryptDataGetter.retrieveWholeDataWithUsername(username, passWord);
            assert.equal(result.status, SUCCESS_STATUS);
            // console.log(result.result)
            userWholeData = result.result;
        }).timeout(REQUEST_TIMEOUT);

        it('should Retrieve Data', async function () {
            let result = await subscryptDataGetter.retrieveDataWithUsername(username, userWholeData[0].provider, passWord);
            let expectedResult = userWholeData.filter(value => value.provider === userWholeData[0].provider)
            console.log(expectedResult);
            console.log('shapalaq')
            console.log(result.result);
            assert.equal(result.status, SUCCESS_STATUS)
            assert.deepEqual(expectedResult, result.result)
        }).timeout(REQUEST_TIMEOUT);
    })

    describe('Check Checking Auth Of User & Its Providers', () => {
        it('should CheckAuth Using User Address', async function () {
            for (let userWholeDatum of userWholeData) {
                let result = await subscryptDataGetter.checkAuth(userAddress, userWholeDatum.provider, passWord)
                assert.equal(result.status, SUCCESS_STATUS)
            }
        }).timeout(REQUEST_TIMEOUT)

        it('should CheckAuth Using User Name', async function () {
            for (let userWholeDatum of userWholeData) {
                let result = await subscryptDataGetter.checkAuthWithUsername(userName, userWholeDatum.provider, passWord)
                assert.equal(result.status, SUCCESS_STATUS)
            }
        }).timeout(REQUEST_TIMEOUT)
    })

    describe('Check Auth Of Provider', () => {
        it('should CheckAuth Using Provider Address', async function () {
            let result = await subscryptDataGetter.providerCheckAuth(userAddress, passWord);
            assert.equal(result.status, SUCCESS_STATUS)
        }).timeout(REQUEST_TIMEOUT);

        it('should CheckAuth Using Provider Username', async function () {
            let result = await subscryptDataGetter.providerCheckAuthWithUsername(userName, passWord);
            assert.equal(result.status, SUCCESS_STATUS)
        }).timeout(REQUEST_TIMEOUT);
    })

    describe('Check Subscription Functions', () => {
        it('should Check Subscriptions With User Address', async function () {
            for (let [index, userWholeDatum] of userWholeData.entries()) {
                let result = await subscryptDataGetter.checkSubscription(userAddress, userWholeDatum.provider, index)
                assert.equal(result.status, SUCCESS_STATUS)
            }
        }).timeout(REQUEST_TIMEOUT)

        it('should Check Subscriptions With User Name', async function () {
            for (let [index, userWholeDatum] of userWholeData.entries()) {
                let result = await subscryptDataGetter.checkSubscriptionWithUsername(username, userWholeDatum.provider, index)
                assert.equal(result.status, SUCCESS_STATUS)
            }
        }).timeout(REQUEST_TIMEOUT)
    })

    describe('Check Getting Plan Data Funcs', () => {
        let planDataWithIndex0 = {
            "duration": "20,000,000",
            "active_session_limit": "1",
            "price": "1,000",
            "max_refund_permille_policy": "100",
            "disabled": false
        }
        let planCharacteristicWithIndex0 = '';

        it('should Get Plan Data', async function () {
            let result = await subscryptDataGetter.getPlanData(userAddress, 0)
            assert.deepEqual(result.result, planDataWithIndex0)
        }).timeout(REQUEST_TIMEOUT);

        it('should Get Plan Characteristic', async function () {
            let result = await subscryptDataGetter.getPlanCharacteristics(userAddress, 0)
            assert.deepEqual(result.result, planCharacteristicWithIndex0)
        }).timeout(REQUEST_TIMEOUT);
    })

})
