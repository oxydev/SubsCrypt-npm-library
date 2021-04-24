const metaData = {
  metadataVersion: '0.1.0',
  source: {
    hash: '0xc5257cf5e50b632c283fa96a237ac51dd791968394988761affb021da6ee8941',
    language: 'ink! 3.0.0-rc3',
    compiler: 'rustc 1.53.0-nightly',
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
    events: [],
    messages: [
      {
        args: [
          {
            name: 'durations',
            type: {
              displayName: [
                'Vec',
              ],
              type: 33,
            },
          },
          {
            name: 'active_session_limits',
            type: {
              displayName: [
                'Vec',
              ],
              type: 34,
            },
          },
          {
            name: 'prices',
            type: {
              displayName: [
                'Vec',
              ],
              type: 34,
            },
          },
          {
            name: 'max_refund_permille_policies',
            type: {
              displayName: [
                'Vec',
              ],
              type: 34,
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
        ],
        docs: [
          ' Registering a new `Provider` by paying the required fee amount (`provider_register_fee`)',
          '',
          ' # Panics',
          '',
          ' If paid amount is less than `provider_register_fee`',
          ' if same `AccountId` registered as provider previously.',
          '',
          ' # Examples',
          ' Examples of different situations in `provider_register_works` , `provider_register_works2` and',
          ' `provider_register_works3` in `tests/test.rs`',
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
              type: 33,
            },
          },
          {
            name: 'active_session_limits',
            type: {
              displayName: [
                'Vec',
              ],
              type: 34,
            },
          },
          {
            name: 'prices',
            type: {
              displayName: [
                'Vec',
              ],
              type: 34,
            },
          },
          {
            name: 'max_refund_permille_policies',
            type: {
              displayName: [
                'Vec',
              ],
              type: 34,
            },
          },
        ],
        docs: [
          ' Add plans to `provider` storage',
          '',
          ' # Panics',
          '',
          ' If the size of vectors passed to the methods are different',
          ' If the caller is not a valid provider.',
          '',
          ' # Examples',
          ' Examples in `add_plan_works` , `add_plan_works2`',
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
            name: 'active_session_limit',
            type: {
              displayName: [
                'u128',
              ],
              type: 2,
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
            name: 'metadata',
            type: {
              displayName: [
                'String',
              ],
              type: 29,
            },
          },
        ],
        docs: [
          ' Subscribing to `plan_index` of the `provider_address` with `Sha2x256` hashed `pass` and `configs`',
          '',
          ' In this function, we will lock (`plan.max_refund_permille_policy` * `transferred_balance`) / 1000',
          ' in the `Linked List` of the contract and will transfer the rest of paid money directly to provider',
          '',
          ' # Note',
          '',
          " The `subs_crypt_pass_hash` will only be set if it's the first subscription of the `caller` to the `SubsCrypt` platform",
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
          '',
          ' # Examples',
          ' Examples in `subscribe_works` and `subscribe_works2` in `tests/test.rs`',
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
            name: 'pass',
            type: {
              displayName: [],
              type: 7,
            },
          },
        ],
        docs: [
          ' Setting the `subs_crypt_pass_hash` of caller to `pass`',
          '',
          ' # Note',
          '',
          ' The `subs_crypt_pass_hash` will also be set in `subscribe` function in first subscription',
          '',
          '',
          ' # Panics',
          ' If `caller` does not exist in `users`',
        ],
        mutates: true,
        name: [
          'set_subscrypt_pass',
        ],
        payable: false,
        returnType: null,
        selector: '0x75d99b9e',
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
            name: 'token',
            type: {
              displayName: [
                'String',
              ],
              type: 29,
            },
          },
          {
            name: 'pass_phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 29,
            },
          },
        ],
        docs: [
          ' This function indicate if `user` can authenticate with given `token` and `pass_phrase`',
          ' # Note',
          ' `user` are encouraged to have different `token` and `pass_phrase` for each provider',
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
            name: 'user',
            type: {
              displayName: [
                'AccountId',
              ],
              type: 6,
            },
          },
          {
            name: 'token',
            type: {
              displayName: [
                'String',
              ],
              type: 29,
            },
          },
          {
            name: 'phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 29,
            },
          },
        ],
        docs: [
          ' `user` can use this function to retrieve her whole subscription history to',
          ' different providers.',
          ' # Note',
          ' `user` has to provide their main `token` and `phrase` which will be used in',
          ' SubsCrypt dashboard',
          '',
          ' # Returns',
          ' `Vec<SubscriptionRecord>` is returned which is a vector of `SubscriptionRecord` struct',
          '',
          ' # Example',
          ' Examples in `retrieve_whole_data_with_password_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'retrieve_whole_data_with_password',
        ],
        payable: false,
        returnType: {
          displayName: [
            'Vec',
          ],
          type: 27,
        },
        selector: '0xcf9b0705',
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
          type: 27,
        },
        selector: '0x89df2063',
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
            name: 'token',
            type: {
              displayName: [
                'String',
              ],
              type: 29,
            },
          },
          {
            name: 'phrase',
            type: {
              displayName: [
                'String',
              ],
              type: 29,
            },
          },
        ],
        docs: [
          ' `user` can use this function to retrieve her subscriptions history for a specific',
          ' provider.',
          '',
          ' # Note',
          ' `user` has to provide their `token` and `phrase` for that provider.',
          '',
          ' # Returns',
          ' `Vec<SubscriptionRecord>` is returned which is a vector of `SubscriptionRecord` struct',
          '',
          ' # Example',
          ' Examples in `retrieve_data_with_password_works` in `tests/test.rs`',
        ],
        mutates: false,
        name: [
          'retrieve_data_with_password',
        ],
        payable: false,
        returnType: {
          displayName: [
            'Vec',
          ],
          type: 27,
        },
        selector: '0xd17f8423',
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
          type: 27,
        },
        selector: '0x08072fa8',
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
          ' `bool` which means if `user` is subsribed or not',
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
                          ty: 16,
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
                                          ty: 19,
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
                          ty: 21,
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
                                          ty: 23,
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
                          ty: 25,
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
                                          ty: 30,
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
                          ty: 32,
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
              name: 'money_address',
              type: 6,
              typeName: 'AccountId',
            },
            {
              name: 'payment_manager',
              type: 15,
              typeName: 'LinkedList',
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
              name: 'active_session_limit',
              type: 2,
              typeName: 'u128',
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
        composite: {
          fields: [
            {
              name: 'list_of_providers',
              type: 18,
              typeName: 'Vec<AccountId>',
            },
            {
              name: 'subs_crypt_pass_hash',
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
                  type: 20,
                  typeName: 'T',
                },
              ],
              name: 'Occupied',
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
              type: 22,
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
        22,
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
                  type: 24,
                  typeName: 'T',
                },
              ],
              name: 'Occupied',
            },
          ],
        },
      },
      params: [
        24,
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
              type: 26,
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
        26,
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
              type: 27,
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
          type: 28,
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
              name: 'meta_data_encrypted',
              type: 29,
              typeName: 'String',
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
        primitive: 'str',
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
                  type: 31,
                  typeName: 'T',
                },
              ],
              name: 'Occupied',
            },
          ],
        },
      },
      params: [
        31,
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
