const chai = require('chai');
const metaData = require('./polkadot_utils/configs/metadata');

const { expect } = chai;
const server = require('./index.js');

describe('Metadata Test', () => {
  it('Metadata Test', (done) => {
    expect(server.abi).to.equal(metaData);
    done();
  });
});
