const { contract } = require('./api').getContract();

module.exports.callViewFunction = async (func, address, ...args) => {
  if (contract == null) {
    return Promise.resolve({
      status: 'NotConnected',
    });
  }

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
  if (contract == null) {
    return Promise.resolve({
      status: 'NotConnected',
    });
  }

  return contract.exec(func,
    { value, gasLimit: -1 }, ...args).signAndSend(address, { signer: injector.signer },
    ({ events = [], status }) => {
      console.log('Transaction status:', status.type);

      if (status.isInBlock) {
        console.log('Included at block hash', status.asInBlock.toHex());
        console.log('Events:');
        console.log(events);
        events.forEach(({ event: { data, method, section }, phase }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });
      } else if (status.isFinalized) {
        console.log('Finalized block hash', status.asFinalized.toHex());
      }
    });
};

module.exports.isConnected = async () => await contract != null;
