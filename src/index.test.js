const chai = require('chai');
const metaData = require('./polkadot_utils/configs/metadata');

const { expect } = chai;

// This line of code is for the problem mentioned in Pull Request #4
// https://github.com/oxydev/SubsCrypt-npm-library/pull/4
window = global;

const server = require('./index.js');

describe('Metadata Test', () => {
  it('Metadata Test', (done) => {
    expect(server.abi).to.equal(metaData);
    done();
  });
});
