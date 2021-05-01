## Functions

<dl>
<dt><a href="#setSubscryptPass">setSubscryptPass(address, injector, passHash)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>It sets The SubsCrypt dashboard pass hash</p>
</dd>
<dt><a href="#setPassHashOfUserForEachProvider">setPassHashOfUserForEachProvider(address, injector, providerAddress, passHash)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>It sets The password hash of user for a specific provider</p>
</dd>
<dt><a href="#refund">refund(address, injector, providerAddress, planIndex)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>refund subscription function</p>
</dd>
<dt><a href="#renew">renew(address, injector, providerAddress, planIndex, newCharacteristicsValues)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>It&#39;s For renewing subscription</p>
</dd>
<dt><a href="#withdraw">withdraw(address, injector)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>Claiming profit money of providers</p>
</dd>
<dt><a href="#subscribe">subscribe(address, injector, providerAddress, planIndex, passHash, username, newCharacteristicsValues)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>It&#39;s For Subscription</p>
</dd>
<dt><a href="#changeDisable">changeDisable(address, injector, planIndex)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>It&#39;s For Changing Disability Of The Selected Plan</p>
</dd>
<dt><a href="#editPlan">editPlan(address, injector, planIndex-, duration, price, maxRefundPermillePolicy, disabled)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>It&#39;s For Editing Plan</p>
</dd>
<dt><a href="#addPlan">addPlan(address, injector, durations, prices, maxRefundPermillePolicies, planCharacteristics)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>It&#39;s For Adding A Plan</p>
</dd>
<dt><a href="#providerRegister">providerRegister(address, injector, durations, prices, maxRefundPermillePolicies, moneyAddress, username, passHash, planCharacteristics)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>It&#39;s For Provider Register</p>
</dd>
</dl>

<a name="setSubscryptPass"></a>

## setSubscryptPass(address, injector, passHash) ⇒ <code>Promise.&lt;\*&gt;</code>
It sets The SubsCrypt dashboard pass hash

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |
| passHash | <code>string</code> | new auth token hash |

<a name="setPassHashOfUserForEachProvider"></a>

## setPassHashOfUserForEachProvider(address, injector, providerAddress, passHash) ⇒ <code>Promise.&lt;\*&gt;</code>
It sets The password hash of user for a specific provider

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |
| providerAddress | <code>string</code> | Address of Provider |
| passHash | <code>string</code> | new pass hash |

<a name="refund"></a>

## refund(address, injector, providerAddress, planIndex) ⇒ <code>Promise.&lt;\*&gt;</code>
refund subscription function

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |
| providerAddress | <code>string</code> | Address of Provider |
| planIndex | <code>number</code> | plan_index |

<a name="renew"></a>

## renew(address, injector, providerAddress, planIndex, newCharacteristicsValues) ⇒ <code>Promise.&lt;\*&gt;</code>
It's For renewing subscription

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |
| providerAddress | <code>string</code> | Address of Provider |
| planIndex | <code>number</code> | plan_index |
| newCharacteristicsValues | <code>Array.&lt;string&gt;</code> | newCharacteristicsValues |

<a name="withdraw"></a>

## withdraw(address, injector) ⇒ <code>Promise.&lt;\*&gt;</code>
Claiming profit money of providers

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |

<a name="subscribe"></a>

## subscribe(address, injector, providerAddress, planIndex, passHash, username, newCharacteristicsValues) ⇒ <code>Promise.&lt;\*&gt;</code>
It's For Subscription

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |
| providerAddress | <code>string</code> | Address of provider |
| planIndex | <code>number</code> | plan_index |
| passHash | <code>string</code> | password hash |
| username | <code>string</code> | username |
| newCharacteristicsValues | <code>Array.&lt;string&gt;</code> | newCharacteristicsValues |

<a name="changeDisable"></a>

## changeDisable(address, injector, planIndex) ⇒ <code>Promise.&lt;\*&gt;</code>
It's For Changing Disability Of The Selected Plan

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |
| planIndex | <code>number</code> | planIndex |

<a name="editPlan"></a>

## editPlan(address, injector, planIndex-, duration, price, maxRefundPermillePolicy, disabled) ⇒ <code>Promise.&lt;\*&gt;</code>
It's For Editing Plan

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |
| planIndex- | <code>number</code> | plan_index |
| duration | <code>number</code> | duration |
| price | <code>number</code> | price |
| maxRefundPermillePolicy | <code>number</code> | max_refund_permille_policy |
| disabled | <code>boolean</code> | disabled |

<a name="addPlan"></a>

## addPlan(address, injector, durations, prices, maxRefundPermillePolicies, planCharacteristics) ⇒ <code>Promise.&lt;\*&gt;</code>
It's For Adding A Plan

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |
| durations | <code>Array.&lt;number&gt;</code> | durations |
| prices | <code>Array.&lt;number&gt;</code> | prices |
| maxRefundPermillePolicies | <code>Array.&lt;number&gt;</code> | max_refund_permille_policies |
| planCharacteristics | <code>Array.&lt;Array.&lt;string&gt;&gt;</code> | plan_characteristics |

<a name="providerRegister"></a>

## providerRegister(address, injector, durations, prices, maxRefundPermillePolicies, moneyAddress, username, passHash, planCharacteristics) ⇒ <code>Promise.&lt;\*&gt;</code>
It's For Provider Register

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - It's An async Function, And It Waits There To Return The Result Of The Transaction  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address Of Sender |
| injector | <code>string</code> | Object That Signs Tx |
| durations | <code>Array.&lt;number&gt;</code> | durations |
| prices | <code>Array.&lt;number&gt;</code> | prices |
| maxRefundPermillePolicies | <code>Array.&lt;number&gt;</code> | max_refund_permille_policies |
| moneyAddress | <code>string</code> | Address of money wallet of Provider |
| username | <code>String</code> | username |
| passHash | <code>string</code> | subscrypt_pass_hash |
| planCharacteristics | <code>Array.&lt;Array.&lt;string&gt;&gt;</code> | plan_characteristics |

