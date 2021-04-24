const { getContract, getAccountFromWallet } = require('./api');

module.exports.callViewFunction = async (func, byWallet, index = 0, address = '') => {
  const contract = getContract();
  if (byWallet) {
    const account = await getAccountFromWallet()[index];
    const { result } = await contract.query[func](account.address, { value: 0, gasLimit: -1 });
    console.log(result.toHuman());
    console.log(result);
    console.log(result.toHuman().Ok.data);
  }
};
