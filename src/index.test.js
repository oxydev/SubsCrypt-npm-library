const chai = require('chai');
const metaData = require('./polkadot_utils/configs/metadata');
let assert = require('assert');
const { expect } = chai;

// This line of code is for the problem mentioned in Pull Request #4
// https://github.com/oxydev/SubsCrypt-npm-library/pull/4
window = global;

const server = require('./index.js');
const config = require('./polkadot_utils/configs/config');
const subscryptDataGetter = require('./polkadot_utils/subscryptDataGetter');

describe('Metadata Test', () => {
  it('Metadata Test', (done) => {
    expect(server.abi).to.equal(metaData);
    done();
  });
});

const REQUEST_TIMEOUT = 10000;
describe('CallView Funcs Test 1', () => {
  const failedStatus = 'Failed', successStatus = 'Fetched'
  let contractAddr = '5CcGoKyVcQmB7iCGdihKG4671iwhZAtReUN8JccAvBQMo2hM';
  let userName = 'saber2';
  let userAddress = '5Dyu5YxLufavjPg8vP31BhKs5xz8ncdkQcNdGwf5XtW4C9Ym';
  let passWord = 'password';
  let userWholeData;

  before(function () {
    //todo
    // Init Timeout
    // Init Contract Address
    config.address = contractAddr;
  })

  // describe('Check UserName And UserAddress Validity', () => {
  //   it('should User Be Available', async function (done) {
  //     let result = await subscryptDataGetter.isUsernameAvailable(userName);
  //     console.log(result)
  //     assert.equal(result.status, successStatus)
  //     done();
  //   });
  //
  //   it('should The Address Be For The User', function () {
  //     let result = subscryptDataGetter.getUsername(userAddress);
  //     assert.equal(result.status, successStatus);
  //     assert.equal(result.result, userName);
  //   });
  // })

  describe('Check Getting The Data Of The User', () => {
    it('should Retrieve Whole Data', async function () {
      let result = await subscryptDataGetter.retrieveWholeDataWithUsername(userName, passWord);
      assert.equal(result.status, successStatus);
      // console.log(result.result)
      userWholeData = result.result;
    }).timeout(REQUEST_TIMEOUT);

    it('should Retrieve Data', async function () {
      let result = await subscryptDataGetter.retrieveDataWithUsername(userName, userWholeData[0].provider, passWord);
      assert.equal(result.status, successStatus)
    }).timeout(REQUEST_TIMEOUT);
  })

})
