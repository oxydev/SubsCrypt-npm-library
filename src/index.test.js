"use strict";
const metaData = require("./polkadot_utils/metadata/metadata")
const chai = require('chai');
const expect = chai.expect;
const server = require('./index.js');


describe('Metadata Test', () => {
    it('Metadata Test', (done) => {
        expect(server.abi).to.equal(metaData)
        done();
    });
});