export type ProgramSource = {
  "version": "0.1.0",
  "name": "cade_avatar_program",
  "constants": [
      {
          "name": "USER_TAG",
          "type": "bytes",
          "value": "[85, 83, 69, 82, 95, 83, 84, 65, 84, 69]"
      }
  ],
  "instructions": [
      {
          "name": "initializeUser",
          "accounts": [
              {
                  "name": "userProfile",
                  "isMut": true,
                  "isSigner": false
              },
              {
                  "name": "authority",
                  "isMut": true,
                  "isSigner": true
              },
              {
                  "name": "systemProgram",
                  "isMut": false,
                  "isSigner": false
              },
              {
                  "name": "clock",
                  "isMut": false,
                  "isSigner": false
              }
          ],
          "args": [
              {
                  "name": "name",
                  "type": "string"
              },
              {
                  "name": "pfpUrl",
                  "type": "string"
              }
          ]
      }
  ],
  "accounts": [
      {
          "name": "userProfile",
          "type": {
              "kind": "struct",
              "fields": [
                  {
                      "name": "authority",
                      "type": "publicKey"
                  },
                  {
                      "name": "walletAddress",
                      "type": "publicKey"
                  },
                  {
                      "name": "name",
                      "type": "string"
                  },
                  {
                      "name": "pfpUrl",
                      "type": "string"
                  }
              ]
          }
      }
  ]
}

export const IDL: ProgramSource = {
  "version": "0.1.0",
  "name": "cade_avatar_program",
  "constants": [
      {
          "name": "USER_TAG",
          "type": "bytes",
          "value": "[85, 83, 69, 82, 95, 83, 84, 65, 84, 69]"
      }
  ],
  "instructions": [
      {
          "name": "initializeUser",
          "accounts": [
              {
                  "name": "userProfile",
                  "isMut": true,
                  "isSigner": false
              },
              {
                  "name": "authority",
                  "isMut": true,
                  "isSigner": true
              },
              {
                  "name": "systemProgram",
                  "isMut": false,
                  "isSigner": false
              },
              {
                  "name": "clock",
                  "isMut": false,
                  "isSigner": false
              }
          ],
          "args": [
              {
                  "name": "name",
                  "type": "string"
              },
              {
                  "name": "pfpUrl",
                  "type": "string"
              }
          ]
      }
  ],
  "accounts": [
      {
          "name": "userProfile",
          "type": {
              "kind": "struct",
              "fields": [
                  {
                      "name": "authority",
                      "type": "publicKey"
                  },
                  {
                      "name": "walletAddress",
                      "type": "publicKey"
                  },
                  {
                      "name": "name",
                      "type": "string"
                  },
                  {
                      "name": "pfpUrl",
                      "type": "string"
                  }
              ]
          }
      }
  ]
}
