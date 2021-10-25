const { getContract } = require('./api');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports.callViewFunction = async (func, address, ...args) => {
  let contract = await getContract();
  while (contract == null) {
    contract = await getContract();
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
