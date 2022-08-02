# Aplicação simples para gerar uma MasterKey 

## Código que está sendo usado:

```javascript

const bip39 = require('bip39')
const bitcore = require('bitcore-lib')
const bitcoin = require('bitcoinjs-lib')
const bip32utils = require('bip32-utils')

let mnemonic = bip39.generateMnemonic()
let seed = bip39.mnemonicToSeedSync(mnemonic)

var xprv = bitcore.HDPrivateKey.fromSeed(seed);
console.log("Master Key: " + xprv.xprivkey)
