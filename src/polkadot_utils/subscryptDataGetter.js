const { callViewFunction } = require('./interact');
/**
 * @typedef PlanConst
 * @property {number} duration
 * @property {number} price
 * @property {number} max_refund_permille
 * @property {bool} disabled
 */

/**
 * @typedef SubscriptionRecord
 * @property {string} provider
 * @property {PlanConst} plan
 * @property {number} plan_index
 * @property {number} subscription_time
 * @property {string[]} characteristics_values_encrypted
 * @property {bool} refunded
 */

/**
 * @typedef Failed
 * @property {string} status Status of request("Failed") in this case
 * @property {*} result Debug Data
 */

/**
 * @typedef PlanFetched
 * @property {string} status Status of request("Fetched") in this case
 * @property {PlanConst} result Plan Const data
 */

/**
 * @typedef CharacteristicsFetched
 * @property {string} status Status of request("Fetched") in this case
 * @property {string[]} characteristics keys of characteristics mapping of plan
 */

/**
 * @typedef HashResult
 * @property {string} status Status of request("Fetched") in this case
 * @property {string} result Hash of given string
 */

/**
 * @typedef BooleanResult
 * @property {string} status Status of request("Fetched") in this case
 * @property {bool} result
 */

/**
 * @typedef SubscriptionFetched
 * @property {string} status Status of request("Fetched") in this case
 * @property {SubscriptionRecord[]} result Array of SubscriptionRecords
 */

/**
 * Getting Plan Data of a provider
 * @param {string} providerAddress - Address of Provider
 * @param {number} planIndex - plan_index
 * @returns {Promise<PlanFetched|Failed>} - Return a plan data or error
 */
async function getPlanData(providerAddress, planIndex) {
  callViewFunction('getPlanData',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', providerAddress, planIndex);
}

/**
 * Check if the given user has a valid active subscription in the given plan index.
 * @param {string} userAddress - Address Of User
 * @param {string} providerAddress - Address of Provider
 * @param {number} planIndex - plan_index
 * @returns {Promise<BooleanResult|Failed>} - Result of request
 */
async function checkSubscription(userAddress, providerAddress, planIndex) {
  callViewFunction('checkSubscription',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', userAddress, providerAddress, planIndex);
}

/**
 * Check if the given user has a valid active subscription in the given plan index.
 * @param {string} username- Username
 * @param {string} providerAddress - Address of Provider
 * @param {number} planIndex - plan_index
 * @returns {Promise<BooleanResult|Failed>} - Result of request
 */
async function checkSubscriptionWithUsername(username, providerAddress, planIndex) {
  callViewFunction('checkSubscriptionWithUsername',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', userAddress, providerAddress, planIndex);
}

/**
 * Retrieving Whole Subscription Data With Password of SubsCrypt dashboard
 * @param {string} username - Username
 * @param {string} password - password
 * @returns {Promise<SubscriptionFetched|Failed>} - Result of request
 */
async function retrieveWholeDataWithUsername(username, password) {
  callViewFunction('retrieveWholeDataWithUsername',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', username, password);
}

/**
 * Retrieving Subscription Data to given provider With Password
 * @param {string} username - Username
 * @param {string} providerAddress - Address of Provider
 * @param {string} password - password
 * @returns {Promise<SubscriptionFetched|Failed>} - Result of request
 */
async function retrieveDataWithUsername(username, providerAddress, password) {
  callViewFunction('retrieveDataWithUsername',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', username, providerAddress, password);
}

/**
 * Retrieving Subscription Data to given provider With wallet
 * @param {string} sender - Address of wallet
 * @param {string} providerAddress - Address of Provider
 * @returns {Promise<SubscriptionFetched|Failed>} - Result of request
 */
async function retrieveDataWithWallet(sender, providerAddress) {
  callViewFunction('retrieveDataWithWallet',
    sender, providerAddress);
}

/**
 * Retrieving whole Subscription Data With wallet
 * @param {string} sender - Address of wallet
 * @returns {Promise<SubscriptionFetched|Failed>} - Result of request
 */
async function retrieveWholeDataWithWallet(sender) {
  callViewFunction('retrieveWholeDataWithWallet',
    sender);
}

/**
 * Check password of user for SubsCrypt Dashboard
 * @param {string} userAddress - Address Of User
 * @param {string} password - password
 * @returns {Promise<BooleanResult|Failed>} - Result of request
 */
async function userCheckAuth(userAddress, password) {
  callViewFunction('userCheckAuth',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', userAddress, password);
}

/**
 * Check password of provider for SubsCrypt Dashboard
 * @param {string} providerAddress - Address Of Provider
 * @param {string} password - password
 * @returns {Promise<BooleanResult|Failed>} - Result of request
 */
async function providerCheckAuth(providerAddress, password) {
  callViewFunction('providerCheckAuth',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', providerAddress, password);
}
/**
 * Check password of provider for SubsCrypt Dashboard with username
 * @param {string} providerUsername - Username of provider
 * @param {string} password - password
 * @returns {Promise<BooleanResult|Failed>} - Result of request
 */
async function providerCheckAuthWithUsername(providerUsername, password) {
  callViewFunction('providerCheckAuthWithUsername',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', providerUsername, password);
}

/**
 * Check password of user for SubsCrypt Dashboard with username
 * @param {string} username - Username
 * @param {string} password - password
 * @returns {Promise<BooleanResult|Failed>} - Result of request
 */
async function userCheckAuthWithUsername(username, password) {
  callViewFunction('userCheckAuthWithUsername',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', username, password);
}

/**
 * Check password of user for given provider with wallet
 * @param {string} userAddress - Address of User
 * @param {string} providerAddress - Address of provider
 * @param {string} password - password
 * @returns {Promise<BooleanResult|Failed>} - Result of request
 */
async function checkAuth(userAddress, providerAddress, password) {
  callViewFunction('checkAuth',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', userAddress, providerAddress, password);
}

/**
 * Check password of user for given provider with username
 * @param {string} username - Username
 * @param {string} providerAddress - Address of provider
 * @param {string} password - password
 * @returns {Promise<BooleanResult|Failed>} - Result of request
 */
async function checkAuthWithUsername(username, providerAddress, password) {
  callViewFunction('checkAuthWithUsername',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', username, providerAddress, password);
}

/**
 * Getting sha2 of string
 * @param {string} anyString - Any String to be hashed
 * @returns {Promise<HashResult|Failed>} - Result of request
 */
async function getSha2(anyString) {
  callViewFunction('getSha2',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', anyString);
}

/**
 * Getting plan Characteristics of given plan
 * @param {string} providerAddress - Address of Provider
 * @param {number} planIndex - plan_index
 * @returns {Promise<CharacteristicsFetched|Failed>} - Result of request
 */
async function getPlanCharacteristics(providerAddress, planIndex) {
  callViewFunction('getPlanCharacteristics',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', providerAddress, planIndex);
}

/**
 * if username is available or not
 * @param {string} username - username
 * @returns {Promise<CharacteristicsFetched|Failed>} - Result of request
 */
async function isUsernameAvailable(username) {
  callViewFunction('isUsernameAvailable',
    '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', username);
}

/**
 * returns username of given address
 * @param {string} sender - Address of user
 * @returns {Promise<CharacteristicsFetched|Failed>} - Result of request
 */
async function getUsername(sender) {
  callViewFunction('getUsername', sender);
}

module.exports = {
  getPlanData,
  checkSubscription,
  checkSubscriptionWithUsername,
  retrieveWholeDataWithUsername,
  retrieveDataWithUsername,
  retrieveDataWithWallet,
  retrieveWholeDataWithWallet,
  userCheckAuth,
  providerCheckAuth,
  providerCheckAuthWithUsername,
  userCheckAuthWithUsername,
  checkAuth,
  checkAuthWithUsername,
  getSha2,
  getPlanCharacteristics,
  isUsernameAvailable,
  getUsername,
};
