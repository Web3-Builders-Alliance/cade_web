export type Prizemanager = {
  "version": "0.1.0",
  "name": "prizemanager",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "particularPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeAuth",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED: This is not dangerous. It's just used for signing."
          ]
        },
        {
          "name": "prizeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "seed",
          "type": "u64"
        },
        {
          "name": "authority",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    },
    {
      "name": "putPrizeOnVault",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "particularPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "adminPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeAuth",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED: This is not dangerous. It's just used for signing."
          ]
        },
        {
          "name": "prizeConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "givePrizeBackToVault",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "particularPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "adminPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeAuth",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED: This is not dangerous. It's just used for signing."
          ]
        },
        {
          "name": "prizeConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimPrize",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "particularPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeAuth",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED : This is not dangerous , It's just used for signing"
          ]
        },
        {
          "name": "prizeConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "prizeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "mintPrize",
            "type": "publicKey"
          },
          {
            "name": "prizeBump",
            "type": "u8"
          },
          {
            "name": "prizeConfigBump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};

export const IDL: Prizemanager = {
  "version": "0.1.0",
  "name": "prizemanager",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "particularPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeAuth",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED: This is not dangerous. It's just used for signing."
          ]
        },
        {
          "name": "prizeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "seed",
          "type": "u64"
        },
        {
          "name": "authority",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    },
    {
      "name": "putPrizeOnVault",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "particularPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "adminPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeAuth",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED: This is not dangerous. It's just used for signing."
          ]
        },
        {
          "name": "prizeConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "givePrizeBackToVault",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "particularPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "adminPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeAuth",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED: This is not dangerous. It's just used for signing."
          ]
        },
        {
          "name": "prizeConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimPrize",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "particularPrizeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeAuth",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED : This is not dangerous , It's just used for signing"
          ]
        },
        {
          "name": "prizeConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "prizeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "mintPrize",
            "type": "publicKey"
          },
          {
            "name": "prizeBump",
            "type": "u8"
          },
          {
            "name": "prizeConfigBump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
