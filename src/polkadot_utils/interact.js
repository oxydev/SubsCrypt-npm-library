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
