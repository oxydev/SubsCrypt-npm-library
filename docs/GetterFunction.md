## Functions

<dl>
<dt><a href="#getPlanData">getPlanData(providerAddress, planIndex)</a> ⇒ <code>Promise.&lt;(PlanFetched|Failed)&gt;</code></dt>
<dd><p>Getting Plan Data of a provider</p>
</dd>
<dt><a href="#checkSubscription">checkSubscription(userAddress, providerAddress, planIndex)</a> ⇒ <code>Promise.&lt;(BooleanResult|Failed)&gt;</code></dt>
<dd><p>Check if the given user has a valid active subscription in the given plan index.</p>
</dd>
<dt><a href="#checkSubscriptionWithUsername">checkSubscriptionWithUsername(username-, providerAddress, planIndex)</a> ⇒ <code>Promise.&lt;(BooleanResult|Failed)&gt;</code></dt>
<dd><p>Check if the given user has a valid active subscription in the given plan index.</p>
</dd>
<dt><a href="#retrieveWholeDataWithUsername">retrieveWholeDataWithUsername(username, password)</a> ⇒ <code>Promise.&lt;(SubscriptionFetched|Failed)&gt;</code></dt>
<dd><p>Retrieving Whole Subscription Data With Password of SubsCrypt dashboard</p>
</dd>
<dt><a href="#retrieveDataWithUsername">retrieveDataWithUsername(username, providerAddress, password)</a> ⇒ <code>Promise.&lt;(SubscriptionFetched|Failed)&gt;</code></dt>
<dd><p>Retrieving Subscription Data to given provider With Password</p>
</dd>
<dt><a href="#retrieveDataWithWallet">retrieveDataWithWallet(sender, providerAddress)</a> ⇒ <code>Promise.&lt;(SubscriptionFetched|Failed)&gt;</code></dt>
<dd><p>Retrieving Subscription Data to given provider With wallet</p>
</dd>
<dt><a href="#retrieveWholeDataWithWallet">retrieveWholeDataWithWallet(sender)</a> ⇒ <code>Promise.&lt;(SubscriptionFetched|Failed)&gt;</code></dt>
<dd><p>Retrieving whole Subscription Data With wallet</p>
</dd>
<dt><a href="#userCheckAuth">userCheckAuth(userAddress, password)</a> ⇒ <code>Promise.&lt;(BooleanResult|Failed)&gt;</code></dt>
<dd><p>Check password of user for SubsCrypt Dashboard</p>
</dd>
<dt><a href="#providerCheckAuth">providerCheckAuth(providerAddress, password)</a> ⇒ <code>Promise.&lt;(BooleanResult|Failed)&gt;</code></dt>
<dd><p>Check password of provider for SubsCrypt Dashboard</p>
</dd>
<dt><a href="#providerCheckAuthWithUsername">providerCheckAuthWithUsername(providerUsername, password)</a> ⇒ <code>Promise.&lt;(BooleanResult|Failed)&gt;</code></dt>
<dd><p>Check password of provider for SubsCrypt Dashboard with username</p>
</dd>
<dt><a href="#userCheckAuthWithUsername">userCheckAuthWithUsername(username, password)</a> ⇒ <code>Promise.&lt;(BooleanResult|Failed)&gt;</code></dt>
<dd><p>Check password of user for SubsCrypt Dashboard with username</p>
</dd>
<dt><a href="#checkAuth">checkAuth(userAddress, providerAddress, password)</a> ⇒ <code>Promise.&lt;(BooleanResult|Failed)&gt;</code></dt>
<dd><p>Check password of user for given provider with wallet</p>
</dd>
<dt><a href="#checkAuthWithUsername">checkAuthWithUsername(username, providerAddress, password)</a> ⇒ <code>Promise.&lt;(BooleanResult|Failed)&gt;</code></dt>
<dd><p>Check password of user for given provider with username</p>
</dd>
<dt><a href="#getSha2">getSha2(anyString)</a> ⇒ <code>Promise.&lt;(HashResult|Failed)&gt;</code></dt>
<dd><p>Getting sha2 of string</p>
</dd>
<dt><a href="#getPlanCharacteristics">getPlanCharacteristics(providerAddress, planIndex)</a> ⇒ <code>Promise.&lt;(CharacteristicsFetched|Failed)&gt;</code></dt>
<dd><p>Getting plan Characteristics of given plan</p>
</dd>
<dt><a href="#isUsernameAvailable">isUsernameAvailable(username)</a> ⇒ <code>Promise.&lt;(boolean|Failed)&gt;</code></dt>
<dd><p>if username is available or not</p>
</dd>
<dt><a href="#getUsername">getUsername(sender)</a> ⇒ <code>Promise.&lt;(string|Failed)&gt;</code></dt>
<dd><p>returns username of given address</p>
</dd>
<dt><a href="#getPlanLength">getPlanLength(providerAddress)</a> ⇒ <code>Promise.&lt;(number|Failed)&gt;</code></dt>
<dd><p>returns that how many plans a provider has</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PlanConst">PlanConst</a></dt>
<dd></dd>
<dt><a href="#SubscriptionRecord">SubscriptionRecord</a></dt>
<dd></dd>
<dt><a href="#Failed">Failed</a></dt>
<dd></dd>
<dt><a href="#PlanFetched">PlanFetched</a></dt>
<dd></dd>
<dt><a href="#CharacteristicsFetched">CharacteristicsFetched</a></dt>
<dd></dd>
<dt><a href="#HashResult">HashResult</a></dt>
<dd></dd>
<dt><a href="#BooleanResult">BooleanResult</a></dt>
<dd></dd>
<dt><a href="#SubscriptionFetched">SubscriptionFetched</a></dt>
<dd></dd>
</dl>

<a name="getPlanData"></a>

## getPlanData(providerAddress, planIndex) ⇒ <code>Promise.&lt;(PlanFetched\|Failed)&gt;</code>
Getting Plan Data of a provider

**Kind**: global function  
**Returns**: <code>Promise.&lt;(PlanFetched\|Failed)&gt;</code> - - Return a plan data or error  

| Param | Type | Description |
| --- | --- | --- |
| providerAddress | <code>string</code> | Address of Provider |
| planIndex | <code>number</code> | plan_index |

<a name="checkSubscription"></a>

## checkSubscription(userAddress, providerAddress, planIndex) ⇒ <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code>
Check if the given user has a valid active subscription in the given plan index.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| userAddress | <code>string</code> | Address Of User |
| providerAddress | <code>string</code> | Address of Provider |
| planIndex | <code>number</code> | plan_index |

<a name="checkSubscriptionWithUsername"></a>

## checkSubscriptionWithUsername(username-, providerAddress, planIndex) ⇒ <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code>
Check if the given user has a valid active subscription in the given plan index.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| username- | <code>string</code> | Username |
| providerAddress | <code>string</code> | Address of Provider |
| planIndex | <code>number</code> | plan_index |

<a name="retrieveWholeDataWithUsername"></a>

## retrieveWholeDataWithUsername(username, password) ⇒ <code>Promise.&lt;(SubscriptionFetched\|Failed)&gt;</code>
Retrieving Whole Subscription Data With Password of SubsCrypt dashboard

**Kind**: global function  
**Returns**: <code>Promise.&lt;(SubscriptionFetched\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Username |
| password | <code>string</code> | password |

<a name="retrieveDataWithUsername"></a>

## retrieveDataWithUsername(username, providerAddress, password) ⇒ <code>Promise.&lt;(SubscriptionFetched\|Failed)&gt;</code>
Retrieving Subscription Data to given provider With Password

**Kind**: global function  
**Returns**: <code>Promise.&lt;(SubscriptionFetched\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Username |
| providerAddress | <code>string</code> | Address of Provider |
| password | <code>string</code> | password |

<a name="retrieveDataWithWallet"></a>

## retrieveDataWithWallet(sender, providerAddress) ⇒ <code>Promise.&lt;(SubscriptionFetched\|Failed)&gt;</code>
Retrieving Subscription Data to given provider With wallet

**Kind**: global function  
**Returns**: <code>Promise.&lt;(SubscriptionFetched\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| sender | <code>string</code> | Address of wallet |
| providerAddress | <code>string</code> | Address of Provider |

<a name="retrieveWholeDataWithWallet"></a>

## retrieveWholeDataWithWallet(sender) ⇒ <code>Promise.&lt;(SubscriptionFetched\|Failed)&gt;</code>
Retrieving whole Subscription Data With wallet

**Kind**: global function  
**Returns**: <code>Promise.&lt;(SubscriptionFetched\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| sender | <code>string</code> | Address of wallet |

<a name="userCheckAuth"></a>

## userCheckAuth(userAddress, password) ⇒ <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code>
Check password of user for SubsCrypt Dashboard

**Kind**: global function  
**Returns**: <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| userAddress | <code>string</code> | Address Of User |
| password | <code>string</code> | password |

<a name="providerCheckAuth"></a>

## providerCheckAuth(providerAddress, password) ⇒ <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code>
Check password of provider for SubsCrypt Dashboard

**Kind**: global function  
**Returns**: <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| providerAddress | <code>string</code> | Address Of Provider |
| password | <code>string</code> | password |

<a name="providerCheckAuthWithUsername"></a>

## providerCheckAuthWithUsername(providerUsername, password) ⇒ <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code>
Check password of provider for SubsCrypt Dashboard with username

**Kind**: global function  
**Returns**: <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| providerUsername | <code>string</code> | Username of provider |
| password | <code>string</code> | password |

<a name="userCheckAuthWithUsername"></a>

## userCheckAuthWithUsername(username, password) ⇒ <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code>
Check password of user for SubsCrypt Dashboard with username

**Kind**: global function  
**Returns**: <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Username |
| password | <code>string</code> | password |

<a name="checkAuth"></a>

## checkAuth(userAddress, providerAddress, password) ⇒ <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code>
Check password of user for given provider with wallet

**Kind**: global function  
**Returns**: <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| userAddress | <code>string</code> | Address of User |
| providerAddress | <code>string</code> | Address of provider |
| password | <code>string</code> | password |

<a name="checkAuthWithUsername"></a>

## checkAuthWithUsername(username, providerAddress, password) ⇒ <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code>
Check password of user for given provider with username

**Kind**: global function  
**Returns**: <code>Promise.&lt;(BooleanResult\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Username |
| providerAddress | <code>string</code> | Address of provider |
| password | <code>string</code> | password |

<a name="getSha2"></a>

## getSha2(anyString) ⇒ <code>Promise.&lt;(HashResult\|Failed)&gt;</code>
Getting sha2 of string

**Kind**: global function  
**Returns**: <code>Promise.&lt;(HashResult\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| anyString | <code>string</code> | Any String to be hashed |

<a name="getPlanCharacteristics"></a>

## getPlanCharacteristics(providerAddress, planIndex) ⇒ <code>Promise.&lt;(CharacteristicsFetched\|Failed)&gt;</code>
Getting plan Characteristics of given plan

**Kind**: global function  
**Returns**: <code>Promise.&lt;(CharacteristicsFetched\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| providerAddress | <code>string</code> | Address of Provider |
| planIndex | <code>number</code> | plan_index |

<a name="isUsernameAvailable"></a>

## isUsernameAvailable(username) ⇒ <code>Promise.&lt;(boolean\|Failed)&gt;</code>
if username is available or not

**Kind**: global function  
**Returns**: <code>Promise.&lt;(boolean\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | username |

<a name="getUsername"></a>

## getUsername(sender) ⇒ <code>Promise.&lt;(string\|Failed)&gt;</code>
returns username of given address

**Kind**: global function  
**Returns**: <code>Promise.&lt;(string\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| sender | <code>string</code> | Address of user |

<a name="getPlanLength"></a>

## getPlanLength(providerAddress) ⇒ <code>Promise.&lt;(number\|Failed)&gt;</code>
returns that how many plans a provider has

**Kind**: global function  
**Returns**: <code>Promise.&lt;(number\|Failed)&gt;</code> - - Result of request  

| Param | Type | Description |
| --- | --- | --- |
| providerAddress | <code>string</code> | Address of Provider |

<a name="PlanConst"></a>

## PlanConst
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| duration | <code>number</code> | 
| price | <code>number</code> | 
| max_refund_permille | <code>number</code> | 
| disabled | <code>bool</code> | 

<a name="SubscriptionRecord"></a>

## SubscriptionRecord
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| provider | <code>string</code> | 
| plan | [<code>PlanConst</code>](#PlanConst) | 
| plan_index | <code>number</code> | 
| subscription_time | <code>number</code> | 
| characteristics_values_encrypted | <code>Array.&lt;string&gt;</code> | 
| refunded | <code>bool</code> | 

<a name="Failed"></a>

## Failed
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | Status of request("Failed") in this case |
| result | <code>\*</code> | Debug Data |

<a name="PlanFetched"></a>

## PlanFetched
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | Status of request("Fetched") in this case |
| result | [<code>PlanConst</code>](#PlanConst) | Plan Const data |

<a name="CharacteristicsFetched"></a>

## CharacteristicsFetched
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | Status of request("Fetched") in this case |
| characteristics | <code>Array.&lt;string&gt;</code> | keys of characteristics mapping of plan |

<a name="HashResult"></a>

## HashResult
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | Status of request("Fetched") in this case |
| result | <code>string</code> | Hash of given string |

<a name="BooleanResult"></a>

## BooleanResult
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | Status of request("Fetched") in this case |
| result | <code>bool</code> |  |

<a name="SubscriptionFetched"></a>

## SubscriptionFetched
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | Status of request("Fetched") in this case |
| result | [<code>Array.&lt;SubscriptionRecord&gt;</code>](#SubscriptionRecord) | Array of SubscriptionRecords |

