const chalk = require('chalk');

const { isConnected } = require('./polkadot_utils/interact');
const getterFunctions = require('./polkadot_utils/subscryptDataGetter');

const usage = chalk.hex('83aaff')('\nUsage: subscrypt <function> arg1 arg2 ...');

function showHelp() {
  console.log(usage);
  console.log('\nOptions:\r');
  console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r');
  console.log('    -f, --functions\t' + '      ' + 'List all functions.' + '\t\t' + '[boolean]\r');
  console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n');
}

function commandHandler(args) {
  getterFunctions.isConnected = isConnected;
  try {
    getterFunctions[args[2]](...args.slice(3, args.length)).then((res) => {
      if (res.result !== undefined && res.status === 'Fetched') {
        if (res.result !== undefined) console.log(res.result);
        else console.log(res.result);
        process.exit(1);
      } else if (res.result === undefined) {
        console.log(res);
        process.exit(1);
      } else {
        console.log(chalk.hex('c80f0f')('Some Error happened, Please check the arguments'));
        process.exit(1);
      }
    }).catch((err) => {
      console.log(err);
    });
  } catch (e) {
    console.log('Please use --help arg to see the possible options');
    process.exit(1);
  }
}

function showAllFunctions() {
  console.log(chalk.hex('2EB723')('Functions: List of functions and their args in order'));
  const ListOfFunctions = [
    'getPlanData',
    'checkSubscription',
    'checkSubscriptionWithUsername',
    'retrieveWholeDataWithUsername',
    'retrieveDataWithUsername',
    'retrieveDataWithWallet',
    'retrieveWholeDataWithWallet',
    'userCheckAuth',
    'providerCheckAuth',
    'providerCheckAuthWithUsername',
    'userCheckAuthWithUsername',
    'checkAuth',
    'checkAuthWithUsername',
    'getSha2',
    'getPlanCharacteristics',
    'isUsernameAvailable',
    'getUsername',
    'getPlanLength',
    'getAddressByUsername',
    'getUserPlanCharacteristics',
    'isConnected',
  ];
  const listOfDocs = [
    'Getting Plan Data of a provider',
    'Check if the given user has a valid active subscription in the given plan index',
    'Check if the given user has a valid active subscription in the given plan index',
    'Retrieving Whole Subscription Data With Password of SubsCrypt dashboard',
    'Retrieving Subscription Data to given provider With Password',
    'Retrieving Subscription Data to given provider With wallet',
    'Retrieving whole Subscription Data With wallet',
    'Check password of user for SubsCrypt Dashboard',
    'Check password of provider for SubsCrypt Dashboard',
    'Check password of provider for SubsCrypt Dashboard with username',
    'Check password of user for SubsCrypt Dashboard with username',
    'Check password of user for given provider with wallet',
    'Check password of user for given provider with username',
    'Getting sha2 of string',
    'Getting plan Characteristics of given plan',
    'Getting plan Characteristics of given plan for given user',
    'if username is available or not',
    'returns username of given address',
    'returns address of given username',
    'returns that how many plans a provider has',
    'check if you are connected to the smart contract',
  ];
  const listOfArgs = [
    '* @param {string} providerAddress - Address of Provider\n\t\t\t'
    + '* @param {number} planIndex - plan_index',
    '* @param {string} userAddress - Address Of User\n\t\t\t'
    + '* @param {string} providerAddress - Address of Provider\n\t\t\t'
    + '* @param {number} planIndex - plan_index',
    '* @param {string} username- Username\n\t\t\t'
    + '* @param {string} providerAddress - Address of Provider\n\t\t\t'
    + '* @param {number} planIndex - plan_index',
    '* @param {string} username - Username\n\t\t\t'
    + '* @param {string} password - password',
    'param {string} username - Username\n\t\t\t'
    + '* @param {string} providerAddress - Address of Provider\n\t\t\t'
    + '* @param {string} password - password',
    '* @param {string} sender - Address of wallet\n\t\t\t'
    + '* @param {string} providerAddress - Address of Provider',
    '* @param {string} sender - Address of wallet',
    '* @param {string} userAddress - Address Of User\n\t\t\t'
    + '* @param {string} password - password',
    '* @param {string} providerAddress - Address Of Provider\n\t\t\t'
    + '* @param {string} password - password',
    '* @param {string} providerUsername - Username of provider\n\t\t\t'
    + '* @param {string} password - password',
    '* @param {string} username - Username\n\t\t\t'
    + '* @param {string} password - password',
    '* @param {string} userAddress - Address of User\n\t\t\t'
    + '* @param {string} providerAddress - Address of provider\n\t\t\t'
    + '* @param {string} password - password',
    '* @param {string} username - Username\n\t\t\t'
    + '* @param {string} providerAddress - Address of provider\n\t\t\t'
    + '* @param {string} password - password',
    '* @param {string} anyString - Any String to be hashed',
    '* @param {string} providerAddress - Address of Provider\n\t\t\t'
    + '* @param {number} planIndex - plan_index',
    '* @param {string} userAddress - Address of User\n\t\t\t'
    + '* @param {string} providerAddress - Address of Provider\n\t\t\t'
    + '* @param {number} planIndex - plan_index',
    '* @param {string} username - username',
    '* @param {string} sender - Address of user',
    '* @param {string} username - Username',
    '* @param {string} providerAddress - Address of Provider',
    'None',
  ];
  let r = 165;
  let b = 183;
  for (let i = 0; i < ListOfFunctions.length; i++) {
    console.log(`\t${chalk.rgb(r, 32, b)(ListOfFunctions[i])}:`);
    console.log(`\t\t Function Description: ${chalk.rgb(r, 32, b)(listOfDocs[i])}`);
    console.log(`\t\t Function Args(in order):\n \t\t\t${chalk.rgb(r, 32, b)(listOfArgs[i])}`);
    console.log('\n');
    r -= 3;
    b -= 3;
  }

  // chalk.rgb('#741781');
  // console.log();
}

module.exports = {
  commandHandler, showHelp, showAllFunctions,
};
