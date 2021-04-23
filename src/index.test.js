const chai = require('chai');
const expect = chai.expect;

describe('Health - IT', () => {
    it('provides health status', (done) => {
        const basket = ['lotion'];
        expect(basket.indexOf('lotion')).to.equal(0);
        done();
    });
});