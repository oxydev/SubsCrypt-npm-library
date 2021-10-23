const { getContract } = require('./api');

module.exports.callViewFunction = async (func, address, ...args) => {
  const contract = await getContract();
  while (contract == null) {
    await sleep(300);
  }
  if (contract == null) {
    return Promise.resolve({
      status: 'NotConnected',
    });
  }
  const result = await contract.query[func](address, { value: 0, gasLimit: -1 }, ...args);
  if (result.result.isOk) {
    return {
      status: 'Fetched',
      result: result.output.toHuman(),
    };
  }

  return {
    status: 'Failed',
    result,
  };
};

module.exports.sendFunction = async function (func, address, injector, value, fallback, ...args) {
  const contract = await getContract();

  if (contract == null) {
    return Promise.resolve({
      status: 'NotConnected',
    });
  }

  return contract.tx[func]({ value, gasLimit: -1 }, ...args)
    .signAndSend(address, { signer: injector.signer }, fallback);
};

module.exports.isConnected = async () => {
  const contract = await getContract();
  return contract != null;
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
