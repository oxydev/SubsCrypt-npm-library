const { getContract } = require('./api');

module.exports.callViewFunction = async (func, address, ...args) => {
  const contract = await getContract();
  const result = await contract.read(func, { value: 0, gasLimit: -1 }, ...args)
    .send(address);
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

module.exports.sendFunction = async (func, address, injector, value, ...args) => {
  const contract = await getContract();
  const result = await contract.exec(func,
    { value, gasLimit: -1 }, ...args).signAndSend(address, { signer: injector.signer });
  return result;
};
