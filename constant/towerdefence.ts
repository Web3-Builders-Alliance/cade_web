export type ProgramSource = {
  version: "0.1.0",
  name: "dtt",
  instructions: [
    {
      name: "createMap",
      accounts: [
        {
          name: "map",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        }
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "board",
          type: {
            vec: {
              defined: "Element",
            },
          },
        },
        {
          name: "budget",
          type: "u64",
        }
      ],
    },
    {
      name: "createGame",
      accounts: [
        {
          name: "map",
          isMut: false,
          isSigner: false,
        },
        {
          name: "game",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        }
      ],
      args: [],
    },
    {
      name: "deployUnits",
      accounts: [
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "map",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        }
      ],
      args: [
        {
          name: "deploys",
          type: {
            array: [
              {
                vec: "string",
              },
              6
            ],
          },
        }
      ],
    },
    {
      name: "resolveGame",
      accounts: [
        {
          name: "map",
          isMut: false,
          isSigner: false,
        },
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        }
      ],
      args: [],
    }
  ],
  accounts: [
    {
      name: "Game",
      type: {
        kind: "struct",
        fields: [
          {
            name: "player",
            type: "publicKey",
          },
          {
            name: "map",
            type: "publicKey",
          },
          {
            name: "deploys",
            type: {
              array: [
                {
                  vec: "string",
                },
                6
              ],
            },
          },
          {
            name: "points",
            type: "u64",
          },
          {
            name: "status",
            type: "string",
          }
        ],
      },
    },
    {
      name: "Map",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "board",
            type: {
              vec: {
                defined: "Element",
              },
            },
          },
          {
            name: "budget",
            type: "u64",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          }
        ],
      },
    },
    {
      name: "Unit",
      type: {
        kind: "struct",
        fields: [
          {
            name: "kind",
            type: "string",
          },
          {
            name: "health",
            type: "u8",
          },
          {
            name: "dps",
            type: "u8",
          },
          {
            name: "cost",
            type: "u8",
          }
        ],
      },
    }
  ],
  types: [
    {
      name: "Element",
      type: {
        kind: "struct",
        fields: [
          {
            name: "kind",
            type: "string",
          },
          {
            name: "health",
            type: "u8",
          },
          {
            name: "dps",
            type: "u8",
          },
          {
            name: "position",
            type: "u8",
          }
        ],
      },
    }
  ],
  errors: [
    {
      code: 6000,
      name: "CostExceedsBudget",
      msg: "Cost exceeds budget",
    },
    {
      code: 6001,
      name: "InvalidUnit",
      msg: "Tryied to Deploy an invalid Unit",
    }
  ],
  metadata: {
    address: "F18piyUM9ccShzRZMG8y6TmQT8YttYB5mPW6WY2LyMkH",
  },
}


export const IDL : ProgramSource = 
  {
    version: "0.1.0",
    name: "dtt",
    instructions: [
      {
        name: "createMap",
        accounts: [
          {
            name: "map",
            isMut: true,
            isSigner: false,
          },
          {
            name: "user",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          }
        ],
        args: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "board",
            type: {
              vec: {
                defined: "Element",
              },
            },
          },
          {
            name: "budget",
            type: "u64",
          }
        ],
      },
      {
        name: "createGame",
        accounts: [
          {
            name: "map",
            isMut: false,
            isSigner: false,
          },
          {
            name: "game",
            isMut: true,
            isSigner: true,
          },
          {
            name: "user",
            isMut: true,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          }
        ],
        args: [],
      },
      {
        name: "deployUnits",
        accounts: [
          {
            name: "game",
            isMut: true,
            isSigner: false,
          },
          {
            name: "user",
            isMut: true,
            isSigner: true,
          },
          {
            name: "map",
            isMut: false,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          }
        ],
        args: [
          {
            name: "deploys",
            type: {
              array: [
                {
                  vec: "string",
                },
                6
              ],
            },
          }
        ],
      },
      {
        name: "resolveGame",
        accounts: [
          {
            name: "map",
            isMut: false,
            isSigner: false,
          },
          {
            name: "game",
            isMut: true,
            isSigner: false,
          },
          {
            name: "user",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          }
        ],
        args: [],
      }
    ],
    accounts: [
      {
        name: "Game",
        type: {
          kind: "struct",
          fields: [
            {
              name: "player",
              type: "publicKey",
            },
            {
              name: "map",
              type: "publicKey",
            },
            {
              name: "deploys",
              type: {
                array: [
                  {
                    vec: "string",
                  },
                  6
                ],
              },
            },
            {
              name: "points",
              type: "u64",
            },
            {
              name: "status",
              type: "string",
            }
          ],
        },
      },
      {
        name: "Map",
        type: {
          kind: "struct",
          fields: [
            {
              name: "name",
              type: "string",
            },
            {
              name: "board",
              type: {
                vec: {
                  defined: "Element",
                },
              },
            },
            {
              name: "budget",
              type: "u64",
            },
            {
              name: "authority",
              type: "publicKey",
            },
            {
              name: "bump",
              type: "u8",
            }
          ],
        },
      },
      {
        name: "Unit",
        type: {
          kind: "struct",
          fields: [
            {
              name: "kind",
              type: "string",
            },
            {
              name: "health",
              type: "u8",
            },
            {
              name: "dps",
              type: "u8",
            },
            {
              name: "cost",
              type: "u8",
            }
          ],
        },
      }
    ],
    types: [
      {
        name: "Element",
        type: {
          kind: "struct",
          fields: [
            {
              name: "kind",
              type: "string",
            },
            {
              name: "health",
              type: "u8",
            },
            {
              name: "dps",
              type: "u8",
            },
            {
              name: "position",
              type: "u8",
            }
          ],
        },
      }
    ],
    errors: [
      {
        code: 6000,
        name: "CostExceedsBudget",
        msg: "Cost exceeds budget",
      },
      {
        code: 6001,
        name: "InvalidUnit",
        msg: "Tryied to Deploy an invalid Unit",
      }
    ],
    metadata: {
      address: "F18piyUM9ccShzRZMG8y6TmQT8YttYB5mPW6WY2LyMkH",
    },
  }
