const assert = require('assert');

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
function callback({ events = [], status }) {
  if (status.isInBlock) {
    setTimeout(() => {
      assert.ok(true);
    }, 5000);
  }
}

module.exports = {
  sleep, callback,
};
