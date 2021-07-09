const metaData = {
  metadataVersion: '0.1.0',
  source: {
    hash: '0xb2b4a4896113c92e535e4e60d08b00149038f763330c1ff7f41d0d33c3858a1a',
    language: 'ink! 3.0.0-rc3',
    compiler: 'rustc 1.55.0-nightly',
  },
  contract: {
    name: 'subscrypt',
    version: '3.0.0-rc3',
    authors: [
      'Saber Zafarpoor <szafarpoor@ce.sharif.edu>',
      'Hadi Esna <esnaa@ce.sharif.edu>',
    ],
  },
  spec: {
    constructors: [
      {
        args: [],
        docs: [],
        name: [
          'new',
        ],
        selector: '0x9bae9d5e',
      },
      {
        args: [],
        docs: [],
        name: [
          'default',
        ],
        selector: '0xed4b9d1b',
      },
    ],
    docs: [],
    events: [
      {
        args: [
          {
            docs: [],
            indexed: true,
            name: 'address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
        ],
        docs: [],
        name: 'ProviderRegisterEvent',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            name: 'provider',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            docs: [],
            indexed: false,
            name: 'duration',
            type: {
              displayName: [
                'u64',
              ],
              type: 1,
            },
          },
          {
            docs: [],
            indexed: false,
            name: 'price',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
          {
            docs: [],
            indexed: false,
            name: 'index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
        ],
        docs: [],
        name: 'AddPlanEvent',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            name: 'provider',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            docs: [],
            indexed: true,
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
          {
            docs: [],
            indexed: false,
            name: 'user_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            docs: [],
            indexed: false,
            name: 'subscription_time',
            type: {
              displayName: [
                'u64',
              ],
              type: 1,
            },
          },
          {
            docs: [],
            indexed: false,
            name: 'duration',
            type: {
              displayName: [
                'u64',
              ],
              type: 1,
            },
          },
          {
            docs: [],
            indexed: false,
            name: 'price',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
          {
            docs: [],
            indexed: false,
            name: 'characteristics',
            type: {
              displayName: [
                'Vec',
              ],
              type: 16,
            },
          },
        ],
        docs: [],
        name: 'SubscribeEvent',
      },
    ],
    messages: [
      {
        args: [
          {
            name: 'durations',
            type: {
              displayName: [
                'Vec',
              ],
              type: 38,
            },
          },
          {
            name: 'prices',
            type: {
              displayName: [
                'Vec',
              ],
              type: 39,
            },
          },
          {
            name: 'max_refund_permille_policies',
            type: {
              displayName: [
                'Vec',
              ],
              type: 39,
            },
          },
          {
            name: 'address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
          {
            name: 'subscrypt_pass_hash',
            type: {
              displayName: [],
              type: 7,
            },
          },
          {
            name: 'plans_characteristics',
            type: {
              displayName: [
                'Vec',
              ],
              type: 15,
            },
          },
        ],
        docs: [
          ' Registering a new `Provider` by paying the required fee amount (`provider_register_fee`)',
          '',
          ' # Panics',
          ' if length of plan inputs are not the same',
          ' If paid amount is less than `provider_register_fee`',
          ' if same `AccountId` registered as provider previously.',
          ' if username is already been taken by someone else',
          '',
          ' # Emits',
          ' ProviderRegisterEvent',
          ' AddPlanEvent',
          '',
          ' # Examples',
          ' Examples of different situations in `tests/test.rs`',
        ],
        mutates: true,
        name: [
          'provider_register',
        ],
        payable: true,
        returnType: null,
        selector: '0xc66f9a2a',
      },
      {
        args: [
          {
            name: 'durations',
            type: {
              displayName: [
                'Vec',
              ],
              type: 38,
            },
          },
          {
            name: 'prices',
            type: {
              displayName: [
                'Vec',
              ],
              type: 39,
            },
          },
          {
            name: 'max_refund_permille_policies',
            type: {
              displayName: [
                'Vec',
              ],
              type: 39,
            },
          },
          {
            name: 'plan_characteristics',
            type: {
              displayName: [
                'Vec',
              ],
              type: 15,
            },
          },
        ],
        docs: [
          ' Add plans to `provider` storage',
          '',
          ' # Panics',
          '',
          ' If the size of vectors passed to the method are different',
          ' If the caller is not a valid provider.',
          '',
          ' # Emits',
          '  AddPlanEvent',
          '',
          ' # Examples',
          ' Examples in `add_plan_works` , `add_plan_fails_wrong_arguments`',
        ],
        mutates: true,
        name: [
          'add_plan',
        ],
        payable: false,
        returnType: null,
        selector: '0x66940ccc',
      },
      {
        args: [
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
          {
            name: 'duration',
            type: {
              displayName: [
                'u64',
              ],
              type: 1,
            },
          },
          {
            name: 'price',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
          {
            name: 'max_refund_permille_policies',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
          {
            name: 'disabled',
            type: {
              displayName: [
                'bool',
              ],
              type: 14,
            },
          },
        ],
        docs: [
          ' Editing previously created plans of the `caller`',
          '',
          ' # Note',
          '',
          ' This will not effect the users that subscribed prior to the edition of plan',
          '',
          ' # Panics',
          '',
          ' If `plan_index` is bigger than the length of `plans` of `provider`',
          '',
          ' # Examples',
          ' Examples of different situations in `edit_plan_works` and `edit_plan_works2` in `tests/test.rs`',
        ],
        mutates: true,
        name: [
          'edit_plan',
        ],
        payable: false,
        returnType: null,
        selector: '0x7f8d60e0',
      },
      {
        args: [
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
          {
            name: 'characteristics',
            type: {
              displayName: [
                'Vec',
              ],
              type: 16,
            },
          },
        ],
        docs: [
          ' Adding new characteristics to existing plans',
          '',
          ' # Note',
          '',
          ' This will not effect the users that subscribed prior to the edition of plan',
          '',
          ' # Panics',
          ' If caller is not `provider`',
          ' If `plan_index` is bigger than the length of `plans` of `provider`',
          '',
          ' # Examples',
          ' Examples of different situations in `add_characteristic_for_plan_works`',
        ],
        mutates: true,
        name: [
          'add_characteristic_for_plan',
        ],
        payable: false,
        returnType: null,
        selector: '0xf77ce64a',
      },
      {
        args: [
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
        ],
        docs: [
          ' Disabling previously created plans of the `caller`',
          '',
          ' # Note',
          '',
          ' This will not effect the users that subscribed prior to the edition of plan',
          '',
          ' # Panics',
          '',
          ' If `plan_index` is bigger than the length of `plans` of `provider`',
          '',
          ' # Examples',
          ' Examples in `change_disable_works` in `tests/test.rs`',
        ],
        mutates: true,
        name: [
          'change_disable',
        ],
        payable: false,
        returnType: null,
        selector: '0x3f10e0b1',
      },
      {
        args: [
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
          {
            name: 'pass',
            type: {
              displayName: [],
              type: 7,
            },
          },
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
          {
            name: 'characteristics_values_encrypted',
            type: {
              displayName: [
                'Vec',
              ],
              type: 16,
            },
          },
        ],
        docs: [
          ' Subscribing to `plan_index` of the `provider_address` with `Sha2x256` hashed `pass` and array of characteristics_values_encrypted',
          '',
          ' In this function, we will lock (`plan.max_refund_permille_policy` * `transferred_balance`) / 1000',
          ' in the `Linked List` of the contract and will transfer the rest of paid money directly to provider',
          '',
          ' # Note',
          '',
          " The `subscrypt_pass_hash` will only be set if it's the first subscription of the `caller` to the `SubsCrypt` platform",
          ' `caller` can not subscribe to same `plan_index` of the same `provider_address` but',
          ' it can subscribe to different `plan_index` of same `provider_address` .',
          " This line of code checks that if you previously subscribed to `provider_address` and if it's the first time",
          ' then `list_of_providers` will be updated.',
          '  `if !self.records.contains_key(&(caller, provider_address)) `',
          '',
          '',
          ' # Panics',
          ' If paid amount is not equal to `price` of the plan',
          ' If plan is `disabled`',
          ' If `caller` is already subscribed to plan',
          ' If `provider` does not exist',
          ' If `plan_index` is bigger than the length of `plans` of `provider_address`',
          " If 'username' has already been taken",
          '',
          ' # Emits',
          ' SubscribeEvent',
          '',
          ' # Examples',
          ' Examples in `subscribe_works` and `subscribe_fails_insufficient_paying` in `tests/test.rs`',
        ],
        mutates: true,
        name: [
          'subscribe',
        ],
        payable: true,
        returnType: null,
        selector: '0xfb968a8f',
      },
      {
        args: [
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
          {
            name: 'new_characteristics_values',
            type: {
              displayName: [
                'Vec',
              ],
              type: 16,
            },
          },
        ],
        docs: [
          ' Renewing subscription of `plan_index` of the `provider_address` array of characteristics_values_encrypted',
          '',
          ' In this function, we will first unlock (`plan.max_refund_permille_policy` * `transferred_balance`) / 1000',
          ' in the `Linked List` of the contract and will also send that alongside the ((1000 - `plan.max_refund_permille_policy`) * `transferred_balance`) / 1000',
          ' of new recieved money and send that to provider. And (`plan.max_refund_permille_policy` * `transferred_balance`) / 1000 will be locked in the `Linked List`',
          '',
          ' # Note',
          '',
          ' The start of that renewed subscription will be at the end of current subscription.',
          ' The current subscription can not be refunded.',
          '',
          '',
          ' # Panics',
          ' If paid amount is not equal to `price` of the plan',
          ' If plan is `disabled`',
          ' If `caller` is not already subscribed to plan',
          ' If `provider` does not exist',
          ' If `plan_index` is bigger than the length of `plans` of `provider_address`',
          '',
          ' # Emits',
          ' SubscribeEvent',
          '',
          ' # Examples',
          ' Examples in `renew_works` in `tests/test.rs`',
        ],
        mutates: true,
        name: [
          'renew',
        ],
        payable: true,
        returnType: null,
        selector: '0xb5604092',
      },
      {
        args: [
          {
            name: 'pass',
            type: {
              displayName: [],
              type: 7,
            },
          },
        ],
        docs: [
          ' Setting the `subscrypt_pass_hash` of caller to `pass`',
          '',
          ' # Note',
          '',
          ' The `subscrypt_pass_hash` will also be set in `subscribe` function in first subscription',
          '',
          '',
          ' # Panics',
          ' If `caller` does not exist in `users`',
        ],
        mutates: true,
        name: [
          'set_user_subscrypt_pass',
        ],
        payable: false,
        returnType: null,
        selector: '0x0476456d',
      },
      {
        args: [
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'pass',
            type: {
              displayName: [],
              type: 7,
            },
          },
        ],
        docs: [
          ' Setting the `pass_hash` of caller in specific provider to `pass`',
          '',
          ' # Panics',
          ' If `caller` does not exist in `users`',
        ],
        mutates: true,
        name: [
          'subs_crypt_pass_hash_for_each_provider',
        ],
        payable: false,
        returnType: null,
        selector: '0xfb983fe3',
      },
      {
        args: [
          {
            name: 'pass',
            type: {
              displayName: [],
              type: 7,
            },
          },
        ],
        docs: [
          ' Setting the `subscrypt_pass_hash` of caller to `pass`',
          '',
          ' # Note',
          '',
          ' The `subscrypt_pass_hash` will also be set in `provider_register` function in first subscription',
          '',
          '',
          ' # Panics',
          ' If `caller` does not exist in `providers`',
        ],
        mutates: true,
        name: [
          'set_provider_subscrypt_pass',
        ],
        payable: false,
        returnType: null,
        selector: '0xf35af9ff',
      },
      {
        args: [],
        docs: [
          ' This function is used when providers want to collect the locked money for refund policy',
          '',
          ' In this function, we will unlock that money which was locked in `subscribe` function via the',
          ' LinkedList mechanism, so providers can `withdraw` them when the due date passed.',
          '',
          ' # Returns',
          ' `paid` amount is returned',
          '',
          ' # Panics',
          ' If `provider` does not exist',
          '',
          ' # Examples',
          ' Examples in `withdraw_works` and `withdraw_works2` in `tests/test.rs`',
        ],
        mutates: true,
        name: [
          'withdraw',
        ],
        payable: false,
        returnType: {
          displayName: [
            'u128',
          ],
          type: 2,
        },
        selector: '0x410fcc9d',
      },
      {
        args: [
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
        ],
        docs: [
          ' `users` can use this function to easily refund their subscription as the policy of that',
          ' specific plan was set. The `users` will be paid back at most',
          ' (`plan.max_refund_permille_policy` * `transferred_balance`) / 1000 and it will be linearly',
          ' decreased as time passed and will get to 0. The `provider` will get 0 at least and will linearly',
          ' get more if `user` refund later.',
          '',
          ' # Returns',
          ' `paid` amount is returned',
          '',
          ' # Panics',
          ' If `provider` does not exist',
          '',
          ' # Examples',
          ' Assume that `plan.max_refund_permille_policy` = 500 and `plan.price` = 100 the duration',
          ' of the plan is a month(30 days month). if `user` refund in first half of the month, then the user will',
          ' be paid 50. if `user` refund in day 20th of month then `user` will be paid 33.33 and `provider`',
          ' will be paid 16.66.',
          ' Other Examples in `refund_works` and `refund_works2` in `tests/test.rs`',
        ],
        mutates: true,
        name: [
          'refund',
        ],
        payable: false,
        returnType: {
          displayName: [
            'u128',
          ],
          type: 2,
        },
        selector: '0xa5a47441',
      },
      {
        args: [
          {
            name: 'user',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'provider',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'pass_phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' This function indicate if `user` can authenticate with given `pass_phrase`',
          ' # Note',
          ' `user` are encouraged to have different `pass_phrase` for each provider',
          '',
          ' # Returns',
          ' `bool` is returned which shows the correctness of auth',
          '',
          ' # Example',
          ' Examples in `check_auth_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'check_auth',
        ],
        payable: false,
        returnType: {
          displayName: [
            'bool',
          ],
          type: 14,
        },
        selector: '0x8a32c4fd',
      },
      {
        args: [
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
          {
            name: 'provider',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'pass_phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' This function indicate if `username` can authenticate with given `pass_phrase`',
          ' # Note',
          ' `user` are encouraged to have different `pass_phrase` for each provider',
          '',
          ' # Returns',
          ' `bool` is returned which shows the correctness of auth',
          '',
          ' # Example',
          ' Examples in `check_auth_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'check_auth_with_username',
        ],
        payable: false,
        returnType: {
          displayName: [
            'bool',
          ],
          type: 14,
        },
        selector: '0x7724e310',
      },
      {
        args: [
          {
            name: 'provider',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'pass_phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' This function indicate if `provider` can authenticate with given `pass_phrase`',
          '',
          ' # Returns',
          ' `bool` is returned which shows the correctness of auth',
          '',
          ' # Example',
          ' Examples in `check_auth_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'provider_check_auth',
        ],
        payable: false,
        returnType: {
          displayName: [
            'bool',
          ],
          type: 14,
        },
        selector: '0xaad0d59f',
      },
      {
        args: [
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
          {
            name: 'pass_phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' This function indicate if `provider` can authenticate with given `pass_phrase` and `username`',
          '',
          ' # Returns',
          ' `bool` is returned which shows the correctness of auth',
          '',
          ' # Example',
          ' Examples in `check_auth_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'provider_check_auth_with_username',
        ],
        payable: false,
        returnType: {
          displayName: [
            'bool',
          ],
          type: 14,
        },
        selector: '0x7a8cb4c4',
      },
      {
        args: [
          {
            name: 'user',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'pass_phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' This function indicate if `user` can authenticate with given `pass_phrase`',
          '',
          ' # Returns',
          ' `bool` is returned which shows the correctness of auth',
          '',
          ' # Example',
          ' Examples in `check_auth_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'user_check_auth',
        ],
        payable: false,
        returnType: {
          displayName: [
            'bool',
          ],
          type: 14,
        },
        selector: '0x15a558e5',
      },
      {
        args: [
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
          {
            name: 'pass_phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' This function indicate if `user` can authenticate with given `pass_phrase` and `username`',
          '',
          ' # Returns',
          ' `bool` is returned which shows the correctness of auth',
          '',
          ' # Example',
          ' Examples in `check_auth_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'user_check_auth_with_username',
        ],
        payable: false,
        returnType: {
          displayName: [
            'bool',
          ],
          type: 14,
        },
        selector: '0x68f97e10',
      },
      {
        args: [
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' This function indicate if `username` is available',
          '',
          ' # Returns',
          ' `bool` is returned which shows the correctness of auth',
          '',
          ' # Example',
          ' Examples in `check_auth_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'is_username_available',
        ],
        payable: false,
        returnType: {
          displayName: [
            'bool',
          ],
          type: 14,
        },
        selector: '0xc5ad0bbe',
      },
      {
        args: [],
        docs: [
          ' This function indicate `username` of `caller`',
          '',
          ' # Returns',
          ' `bool` is returned which shows the correctness of auth',
          '',
          ' # Example',
          ' Examples in `check_auth_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'get_username',
        ],
        payable: false,
        returnType: {
          displayName: [
            'String',
          ],
          type: 17,
        },
        selector: '0xd7fcf006',
      },
      {
        args: [
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [],
        mutates: false,
        name: [
          'get_address_by_username',
        ],
        payable: false,
        returnType: {
          displayName: [
            'AccountId',
          ],
          type: 6,
        },
        selector: '0x9162c3a5',
      },
      {
        args: [
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
          {
            name: 'pass_phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' `user` can use this function to retrieve her whole subscription history to',
          ' different providers.',
          ' # Note',
          ' `user` has to provide their `pass_phrase` which will be used in SubsCrypt dashboard',
          '',
          ' # Returns',
          ' `Vec<SubscriptionRecord>` is returned which is a vector of `SubscriptionRecord` struct',
          '',
          ' # Example',
          ' Examples in `retrieve_whole_data_with_password_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'retrieve_whole_data_with_username',
        ],
        payable: false,
        returnType: {
          displayName: [
            'Vec',
          ],
          type: 30,
        },
        selector: '0x870b7596',
      },
      {
        args: [],
        docs: [
          ' `user` can use this function to retrieve her whole subscription history to',
          ' different providers with their wallet.',
          '',
          ' # Returns',
          ' `Vec<SubscriptionRecord>` is returned which is a vector of `SubscriptionRecord` struct',
          '',
          ' # Example',
          ' Examples in `retrieve_whole_data_with_wallet_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'retrieve_whole_data_with_wallet',
        ],
        payable: false,
        returnType: {
          displayName: [
            'Vec',
          ],
          type: 30,
        },
        selector: '0x89df2063',
      },
      {
        args: [
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'pass_phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' `user` can use this function to retrieve her subscriptions history for a specific',
          ' provider.',
          '',
          ' # Note',
          ' `user` has to provide their `pass_phrase` for that provider.',
          '',
          ' # Returns',
          ' `Vec<SubscriptionRecord>` is returned which is a vector of `SubscriptionRecord` struct',
          '',
          ' # Example',
          ' Examples in `retrieve_data_with_password_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'retrieve_data_with_username',
        ],
        payable: false,
        returnType: {
          displayName: [
            'Vec',
          ],
          type: 30,
        },
        selector: '0x82afbba9',
      },
      {
        args: [
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
        ],
        docs: [
          ' `user` can use this function to retrieve her subscriptions history for a specific',
          ' provider with her wallet.',
          '',
          ' # Returns',
          ' `Vec<SubscriptionRecord>` is returned which is a vector of `SubscriptionRecord` struct',
          '',
          ' # Example',
          ' Examples in `retrieve_data_with_password_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'retrieve_data_with_wallet',
        ],
        payable: false,
        returnType: {
          displayName: [
            'Vec',
          ],
          type: 30,
        },
        selector: '0x08072fa8',
      },
      {
        args: [
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
        ],
        docs: [
          ' We can get plan data in this function',
          '',
          ' # Returns',
          ' `PlanConsts` is returned',
          '',
          ' # Example',
          ' Examples in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'get_plan_data',
        ],
        payable: false,
        returnType: {
          displayName: [
            'PlanConsts',
          ],
          type: 13,
        },
        selector: '0x1191b42c',
      },
      {
        args: [
          {
            name: 'user',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
        ],
        docs: [
          " get user's plan characteristics in this function",
          '',
          ' # Returns',
          " `user's plan characteristics` is returned",
          '',
          ' # Example',
          ' Examples in `tests/test.rs` in get_user_plan_characteristics_works test',
        ],
        mutates: false,
        name: [
          'get_user_plan_characteristics',
        ],
        payable: false,
        returnType: {
          displayName: [
            'Vec',
          ],
          type: 16,
        },
        selector: '0xff8f9637',
      },
      {
        args: [
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
        ],
        docs: [
          ' We can get plan count in this function',
          '',
          ' # Returns',
          ' a number is returned',
          '',
          ' # Example',
          ' Examples in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'get_plan_length',
        ],
        payable: false,
        returnType: {
          displayName: [
            'u128',
          ],
          type: 2,
        },
        selector: '0x529755eb',
      },
      {
        args: [
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
        ],
        docs: [
          ' We can get plan characteristic keys in this function',
          '',
          ' # Returns',
          ' `Vec<String>` is returned',
          '',
          ' # Example',
          ' Examples in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'get_plan_characteristics',
        ],
        payable: false,
        returnType: {
          displayName: [
            'Vec',
          ],
          type: 16,
        },
        selector: '0x45f44239',
      },
      {
        args: [
          {
            name: 'string',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
        ],
        docs: [
          ' Get hash of String',
          '',
          ' # Returns',
          ' `String` is returned',
          '    ',
        ],
        mutates: false,
        name: [
          'get_sha2',
        ],
        payable: false,
        returnType: {
          displayName: [],
          type: 7,
        },
        selector: '0x30be6595',
      },
      {
        args: [
          {
            name: 'user',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
        ],
        docs: [
          ' This function can be called to check if `user` has a valid subscription to the',
          ' specific `plan_index` of `provider`.',
          '',
          ' # Note',
          ' if `user` refunded or her subscription is expired then this function will return false',
          '',
          ' # Returns',
          ' `bool` which means if `user` is subscribed or not',
          '',
          ' # Example',
          ' Examples in `check_subscription_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'check_subscription',
        ],
        payable: false,
        returnType: {
          displayName: [
            'bool',
          ],
          type: 14,
        },
        selector: '0x080e491f',
      },
      {
        args: [
          {
            name: 'username',
            type: {
              displayName: [
                'String',
              ],
              type: 17,
            },
          },
          {
            name: 'provider_address',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'plan_index',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
            },
          },
        ],
        docs: [
          ' This function can be called to check if `user` has a valid subscription to the',
          ' specific `plan_index` of `provider`.',
          '',
          ' # Note',
          ' if `user` refunded or her subscription is expired then this function will return false',
          '',
          ' # Returns',
          ' `bool` which means if `user` is subscribed or not',
          '',
          ' # Example',
          ' Examples in `check_subscription_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'check_subscription_with_username',
        ],
        payable: false,
        returnType: {
          displayName: [
            'bool',
          ],
          type: 14,
        },
        selector: '0xa872aeb9',
      },
    ],
  },
  storage: {
    struct: {
      fields: [
        {
          layout: {
            cell: {
              key: '0x0000000000000000000000000000000000000000000000000000000000000000',
              ty: 1,
            },
          },
          name: 'start_time',
        },
        {
          layout: {
            cell: {
              key: '0x0100000000000000000000000000000000000000000000000000000000000000',
              ty: 2,
            },
          },
          name: 'provider_register_fee',
        },
        {
          layout: {
            struct: {
              fields: [
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            cell: {
                              key: '0x0200000000000000000000000000000000000000000000000000000000000000',
                              ty: 3,
                            },
                          },
                          name: 'header',
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    cell: {
                                      key: '0x0300000000000000000000000000000000000000000000000000000000000000',
                                      ty: 4,
                                    },
                                  },
                                  name: 'len',
                                },
                                {
                                  layout: {
                                    array: {
                                      cellsPerElem: 1,
                                      layout: {
                                        cell: {
                                          key: '0x0300000001000000000000000000000000000000000000000000000000000000',
                                          ty: 5,
                                        },
                                      },
                                      len: 4294967295,
                                      offset: '0x0400000000000000000000000000000000000000000000000000000000000000',
                                    },
                                  },
                                  name: 'elems',
                                },
                              ],
                            },
                          },
                          name: 'entries',
                        },
                      ],
                    },
                  },
                  name: 'keys',
                },
                {
                  layout: {
                    hash: {
                      layout: {
                        cell: {
                          key: '0x0400000001000000000000000000000000000000000000000000000000000000',
                          ty: 10,
                        },
                      },
                      offset: '0x0300000001000000000000000000000000000000000000000000000000000000',
                      strategy: {
                        hasher: 'Blake2x256',
                        postfix: '',
                        prefix: '0x696e6b20686173686d6170',
                      },
                    },
                  },
                  name: 'values',
                },
              ],
            },
          },
          name: 'providers',
        },
        {
          layout: {
            struct: {
              fields: [
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            cell: {
                              key: '0x0400000001000000000000000000000000000000000000000000000000000000',
                              ty: 3,
                            },
                          },
                          name: 'header',
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    cell: {
                                      key: '0x0500000001000000000000000000000000000000000000000000000000000000',
                                      ty: 4,
                                    },
                                  },
                                  name: 'len',
                                },
                                {
                                  layout: {
                                    array: {
                                      cellsPerElem: 1,
                                      layout: {
                                        cell: {
                                          key: '0x0500000002000000000000000000000000000000000000000000000000000000',
                                          ty: 5,
                                        },
                                      },
                                      len: 4294967295,
                                      offset: '0x0600000001000000000000000000000000000000000000000000000000000000',
                                    },
                                  },
                                  name: 'elems',
                                },
                              ],
                            },
                          },
                          name: 'entries',
                        },
                      ],
                    },
                  },
                  name: 'keys',
                },
                {
                  layout: {
                    hash: {
                      layout: {
                        cell: {
                          key: '0x0600000002000000000000000000000000000000000000000000000000000000',
                          ty: 19,
                        },
                      },
                      offset: '0x0500000002000000000000000000000000000000000000000000000000000000',
                      strategy: {
                        hasher: 'Blake2x256',
                        postfix: '',
                        prefix: '0x696e6b20686173686d6170',
                      },
                    },
                  },
                  name: 'values',
                },
              ],
            },
          },
          name: 'users',
        },
        {
          layout: {
            struct: {
              fields: [
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            cell: {
                              key: '0x0600000002000000000000000000000000000000000000000000000000000000',
                              ty: 3,
                            },
                          },
                          name: 'header',
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    cell: {
                                      key: '0x0700000002000000000000000000000000000000000000000000000000000000',
                                      ty: 4,
                                    },
                                  },
                                  name: 'len',
                                },
                                {
                                  layout: {
                                    array: {
                                      cellsPerElem: 1,
                                      layout: {
                                        cell: {
                                          key: '0x0700000003000000000000000000000000000000000000000000000000000000',
                                          ty: 22,
                                        },
                                      },
                                      len: 4294967295,
                                      offset: '0x0800000002000000000000000000000000000000000000000000000000000000',
                                    },
                                  },
                                  name: 'elems',
                                },
                              ],
                            },
                          },
                          name: 'entries',
                        },
                      ],
                    },
                  },
                  name: 'keys',
                },
                {
                  layout: {
                    hash: {
                      layout: {
                        cell: {
                          key: '0x0800000003000000000000000000000000000000000000000000000000000000',
                          ty: 24,
                        },
                      },
                      offset: '0x0700000003000000000000000000000000000000000000000000000000000000',
                      strategy: {
                        hasher: 'Blake2x256',
                        postfix: '',
                        prefix: '0x696e6b20686173686d6170',
                      },
                    },
                  },
                  name: 'values',
                },
              ],
            },
          },
          name: 'daily_locked_amounts',
        },
        {
          layout: {
            struct: {
              fields: [
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            cell: {
                              key: '0x0800000003000000000000000000000000000000000000000000000000000000',
                              ty: 3,
                            },
                          },
                          name: 'header',
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    cell: {
                                      key: '0x0900000003000000000000000000000000000000000000000000000000000000',
                                      ty: 4,
                                    },
                                  },
                                  name: 'len',
                                },
                                {
                                  layout: {
                                    array: {
                                      cellsPerElem: 1,
                                      layout: {
                                        cell: {
                                          key: '0x0900000004000000000000000000000000000000000000000000000000000000',
                                          ty: 26,
                                        },
                                      },
                                      len: 4294967295,
                                      offset: '0x0a00000003000000000000000000000000000000000000000000000000000000',
                                    },
                                  },
                                  name: 'elems',
                                },
                              ],
                            },
                          },
                          name: 'entries',
                        },
                      ],
                    },
                  },
                  name: 'keys',
                },
                {
                  layout: {
                    hash: {
                      layout: {
                        cell: {
                          key: '0x0a00000004000000000000000000000000000000000000000000000000000000',
                          ty: 28,
                        },
                      },
                      offset: '0x0900000004000000000000000000000000000000000000000000000000000000',
                      strategy: {
                        hasher: 'Blake2x256',
                        postfix: '',
                        prefix: '0x696e6b20686173686d6170',
                      },
                    },
                  },
                  name: 'values',
                },
              ],
            },
          },
          name: 'records',
        },
        {
          layout: {
            struct: {
              fields: [
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            cell: {
                              key: '0x0a00000004000000000000000000000000000000000000000000000000000000',
                              ty: 3,
                            },
                          },
                          name: 'header',
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    cell: {
                                      key: '0x0b00000004000000000000000000000000000000000000000000000000000000',
                                      ty: 4,
                                    },
                                  },
                                  name: 'len',
                                },
                                {
                                  layout: {
                                    array: {
                                      cellsPerElem: 1,
                                      layout: {
                                        cell: {
                                          key: '0x0b00000005000000000000000000000000000000000000000000000000000000',
                                          ty: 32,
                                        },
                                      },
                                      len: 4294967295,
                                      offset: '0x0c00000004000000000000000000000000000000000000000000000000000000',
                                    },
                                  },
                                  name: 'elems',
                                },
                              ],
                            },
                          },
                          name: 'entries',
                        },
                      ],
                    },
                  },
                  name: 'keys',
                },
                {
                  layout: {
                    hash: {
                      layout: {
                        cell: {
                          key: '0x0c00000005000000000000000000000000000000000000000000000000000000',
                          ty: 34,
                        },
                      },
                      offset: '0x0b00000005000000000000000000000000000000000000000000000000000000',
                      strategy: {
                        hasher: 'Blake2x256',
                        postfix: '',
                        prefix: '0x696e6b20686173686d6170',
                      },
                    },
                  },
                  name: 'values',
                },
              ],
            },
          },
          name: 'plan_index_to_record_index',
        },
        {
          layout: {
            struct: {
              fields: [
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            cell: {
                              key: '0x0c00000005000000000000000000000000000000000000000000000000000000',
                              ty: 3,
                            },
                          },
                          name: 'header',
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    cell: {
                                      key: '0x0d00000005000000000000000000000000000000000000000000000000000000',
                                      ty: 4,
                                    },
                                  },
                                  name: 'len',
                                },
                                {
                                  layout: {
                                    array: {
                                      cellsPerElem: 1,
                                      layout: {
                                        cell: {
                                          key: '0x0d00000006000000000000000000000000000000000000000000000000000000',
                                          ty: 35,
                                        },
                                      },
                                      len: 4294967295,
                                      offset: '0x0e00000005000000000000000000000000000000000000000000000000000000',
                                    },
                                  },
                                  name: 'elems',
                                },
                              ],
                            },
                          },
                          name: 'entries',
                        },
                      ],
                    },
                  },
                  name: 'keys',
                },
                {
                  layout: {
                    hash: {
                      layout: {
                        cell: {
                          key: '0x0e00000006000000000000000000000000000000000000000000000000000000',
                          ty: 36,
                        },
                      },
                      offset: '0x0d00000006000000000000000000000000000000000000000000000000000000',
                      strategy: {
                        hasher: 'Blake2x256',
                        postfix: '',
                        prefix: '0x696e6b20686173686d6170',
                      },
                    },
                  },
                  name: 'values',
                },
              ],
            },
          },
          name: 'username_to_address',
        },
        {
          layout: {
            struct: {
              fields: [
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            cell: {
                              key: '0x0e00000006000000000000000000000000000000000000000000000000000000',
                              ty: 3,
                            },
                          },
                          name: 'header',
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    cell: {
                                      key: '0x0f00000006000000000000000000000000000000000000000000000000000000',
                                      ty: 4,
                                    },
                                  },
                                  name: 'len',
                                },
                                {
                                  layout: {
                                    array: {
                                      cellsPerElem: 1,
                                      layout: {
                                        cell: {
                                          key: '0x0f00000007000000000000000000000000000000000000000000000000000000',
                                          ty: 5,
                                        },
                                      },
                                      len: 4294967295,
                                      offset: '0x1000000006000000000000000000000000000000000000000000000000000000',
                                    },
                                  },
                                  name: 'elems',
                                },
                              ],
                            },
                          },
                          name: 'entries',
                        },
                      ],
                    },
                  },
                  name: 'keys',
                },
                {
                  layout: {
                    hash: {
                      layout: {
                        cell: {
                          key: '0x1000000007000000000000000000000000000000000000000000000000000000',
                          ty: 37,
                        },
                      },
                      offset: '0x0f00000007000000000000000000000000000000000000000000000000000000',
                      strategy: {
                        hasher: 'Blake2x256',
                        postfix: '',
                        prefix: '0x696e6b20686173686d6170',
                      },
                    },
                  },
                  name: 'values',
                },
              ],
            },
          },
          name: 'address_to_username',
        },
      ],
    },
  },
  types: [
    {
      def: {
        primitive: 'u64',
      },
    },
    {
      def: {
        primitive: 'u128',
      },
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'last_vacant',
              type: 4,
              typeName: 'Index',
            },
            {
              name: 'len',
              type: 4,
              typeName: 'u32',
            },
            {
              name: 'len_entries',
              type: 4,
              typeName: 'u32',
            },
          ],
        },
      },
      path: [
        'ink_storage',
        'collections',
        'stash',
        'Header',
      ],
    },
    {
      def: {
        primitive: 'u32',
      },
    },
    {
      def: {
        variant: {
          variants: [
            {
              fields: [
                {
                  type: 9,
                  typeName: 'VacantEntry',
                },
              ],
              name: 'Vacant',
            },
            {
              fields: [
                {
                  type: 6,
                  typeName: 'T',
                },
              ],
              name: 'Occupied',
            },
          ],
        },
      },
      params: [
        6,
      ],
      path: [
        'ink_storage',
        'collections',
        'stash',
        'Entry',
      ],
    },
    {
      def: {
        composite: {
          fields: [
            {
              type: 7,
              typeName: '[u8; 32]',
            },
          ],
        },
      },
      path: [
        'ink_env',
        'types',
        'AccountId',
      ],
    },
    {
      def: {
        array: {
          len: 32,
          type: 8,
        },
      },
    },
    {
      def: {
        primitive: 'u8',
      },
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'next',
              type: 4,
              typeName: 'Index',
            },
            {
              name: 'prev',
              type: 4,
              typeName: 'Index',
            },
          ],
        },
      },
      path: [
        'ink_storage',
        'collections',
        'stash',
        'VacantEntry',
      ],
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'value',
              type: 11,
              typeName: 'V',
            },
            {
              name: 'key_index',
              type: 4,
              typeName: 'KeyIndex',
            },
          ],
        },
      },
      params: [
        11,
      ],
      path: [
        'ink_storage',
        'collections',
        'hashmap',
        'ValueEntry',
      ],
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'plans',
              type: 12,
              typeName: 'Vec<PlanConsts>',
            },
            {
              name: 'plans_characteristics',
              type: 15,
              typeName: 'Vec<Vec<String>>',
            },
            {
              name: 'money_address',
              type: 6,
              typeName: 'AccountId',
            },
            {
              name: 'payment_manager',
              type: 18,
              typeName: 'LinkedList',
            },
            {
              name: 'subscrypt_pass_hash',
              type: 7,
              typeName: '[u8; 32]',
            },
          ],
        },
      },
      path: [
        'subscrypt',
        'subscrypt',
        'Provider',
      ],
    },
    {
      def: {
        sequence: {
          type: 13,
        },
      },
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'duration',
              type: 1,
              typeName: 'u64',
            },
            {
              name: 'price',
              type: 2,
              typeName: 'u128',
            },
            {
              name: 'max_refund_permille_policy',
              type: 2,
              typeName: 'u128',
            },
            {
              name: 'disabled',
              type: 14,
              typeName: 'bool',
            },
          ],
        },
      },
      path: [
        'subscrypt',
        'subscrypt',
        'PlanConsts',
      ],
    },
    {
      def: {
        primitive: 'bool',
      },
    },
    {
      def: {
        sequence: {
          type: 16,
        },
      },
    },
    {
      def: {
        sequence: {
          type: 17,
        },
      },
    },
    {
      def: {
        primitive: 'str',
      },
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'head',
              type: 1,
              typeName: 'u64',
            },
            {
              name: 'back',
              type: 1,
              typeName: 'u64',
            },
            {
              name: 'length',
              type: 2,
              typeName: 'u128',
            },
          ],
        },
      },
      path: [
        'subscrypt',
        'subscrypt',
        'LinkedList',
      ],
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'value',
              type: 20,
              typeName: 'V',
            },
            {
              name: 'key_index',
              type: 4,
              typeName: 'KeyIndex',
            },
          ],
        },
      },
      params: [
        20,
      ],
      path: [
        'ink_storage',
        'collections',
        'hashmap',
        'ValueEntry',
      ],
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'list_of_providers',
              type: 21,
              typeName: 'Vec<AccountId>',
            },
            {
              name: 'subscrypt_pass_hash',
              type: 7,
              typeName: '[u8; 32]',
            },
          ],
        },
      },
      path: [
        'subscrypt',
        'subscrypt',
        'User',
      ],
    },
    {
      def: {
        sequence: {
          type: 6,
        },
      },
    },
    {
      def: {
        variant: {
          variants: [
            {
              fields: [
                {
                  type: 9,
                  typeName: 'VacantEntry',
                },
              ],
              name: 'Vacant',
            },
            {
              fields: [
                {
                  type: 23,
                  typeName: 'T',
                },
              ],
              name: 'Occupied',
            },
          ],
        },
      },
      params: [
        23,
      ],
      path: [
        'ink_storage',
        'collections',
        'stash',
        'Entry',
      ],
    },
    {
      def: {
        tuple: [
          6,
          1,
        ],
      },
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'value',
              type: 25,
              typeName: 'V',
            },
            {
              name: 'key_index',
              type: 4,
              typeName: 'KeyIndex',
            },
          ],
        },
      },
      params: [
        25,
      ],
      path: [
        'ink_storage',
        'collections',
        'hashmap',
        'ValueEntry',
      ],
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'amount',
              type: 2,
              typeName: 'u128',
            },
            {
              name: 'next_day',
              type: 1,
              typeName: 'u64',
            },
          ],
        },
      },
      path: [
        'subscrypt',
        'subscrypt',
        'DailyLockedAmount',
      ],
    },
    {
      def: {
        variant: {
          variants: [
            {
              fields: [
                {
                  type: 9,
                  typeName: 'VacantEntry',
                },
              ],
              name: 'Vacant',
            },
            {
              fields: [
                {
                  type: 27,
                  typeName: 'T',
                },
              ],
              name: 'Occupied',
            },
          ],
        },
      },
      params: [
        27,
      ],
      path: [
        'ink_storage',
        'collections',
        'stash',
        'Entry',
      ],
    },
    {
      def: {
        tuple: [
          6,
          6,
        ],
      },
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'value',
              type: 29,
              typeName: 'V',
            },
            {
              name: 'key_index',
              type: 4,
              typeName: 'KeyIndex',
            },
          ],
        },
      },
      params: [
        29,
      ],
      path: [
        'ink_storage',
        'collections',
        'hashmap',
        'ValueEntry',
      ],
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'subscription_records',
              type: 30,
              typeName: 'Vec<SubscriptionRecord>',
            },
            {
              name: 'pass_hash',
              type: 7,
              typeName: '[u8; 32]',
            },
          ],
        },
      },
      path: [
        'subscrypt',
        'subscrypt',
        'PlanRecord',
      ],
    },
    {
      def: {
        sequence: {
          type: 31,
        },
      },
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'provider',
              type: 6,
              typeName: 'AccountId',
            },
            {
              name: 'plan',
              type: 13,
              typeName: 'PlanConsts',
            },
            {
              name: 'plan_index',
              type: 2,
              typeName: 'u128',
            },
            {
              name: 'subscription_time',
              type: 1,
              typeName: 'u64',
            },
            {
              name: 'characteristics_values_encrypted',
              type: 16,
              typeName: 'Vec<String>',
            },
            {
              name: 'refunded',
              type: 14,
              typeName: 'bool',
            },
          ],
        },
      },
      path: [
        'subscrypt',
        'subscrypt',
        'SubscriptionRecord',
      ],
    },
    {
      def: {
        variant: {
          variants: [
            {
              fields: [
                {
                  type: 9,
                  typeName: 'VacantEntry',
                },
              ],
              name: 'Vacant',
            },
            {
              fields: [
                {
                  type: 33,
                  typeName: 'T',
                },
              ],
              name: 'Occupied',
            },
          ],
        },
      },
      params: [
        33,
      ],
      path: [
        'ink_storage',
        'collections',
        'stash',
        'Entry',
      ],
    },
    {
      def: {
        tuple: [
          6,
          6,
          2,
        ],
      },
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'value',
              type: 2,
              typeName: 'V',
            },
            {
              name: 'key_index',
              type: 4,
              typeName: 'KeyIndex',
            },
          ],
        },
      },
      params: [
        2,
      ],
      path: [
        'ink_storage',
        'collections',
        'hashmap',
        'ValueEntry',
      ],
    },
    {
      def: {
        variant: {
          variants: [
            {
              fields: [
                {
                  type: 9,
                  typeName: 'VacantEntry',
                },
              ],
              name: 'Vacant',
            },
            {
              fields: [
                {
                  type: 17,
                  typeName: 'T',
                },
              ],
              name: 'Occupied',
            },
          ],
        },
      },
      params: [
        17,
      ],
      path: [
        'ink_storage',
        'collections',
        'stash',
        'Entry',
      ],
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'value',
              type: 6,
              typeName: 'V',
            },
            {
              name: 'key_index',
              type: 4,
              typeName: 'KeyIndex',
            },
          ],
        },
      },
      params: [
        6,
      ],
      path: [
        'ink_storage',
        'collections',
        'hashmap',
        'ValueEntry',
      ],
    },
    {
      def: {
        composite: {
          fields: [
            {
              name: 'value',
              type: 17,
              typeName: 'V',
            },
            {
              name: 'key_index',
              type: 4,
              typeName: 'KeyIndex',
            },
          ],
        },
      },
      params: [
        17,
      ],
      path: [
        'ink_storage',
        'collections',
        'hashmap',
        'ValueEntry',
      ],
    },
    {
      def: {
        sequence: {
          type: 1,
        },
      },
    },
    {
      def: {
        sequence: {
          type: 2,
        },
      },
    },
  ],
};

module.exports = metaData;
