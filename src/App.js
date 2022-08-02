import logo from './logo.svg';
import './App.css';

import  ReactDOM, {useState} from 'react'
const bip39 = require('bip39')
const bitcore = require('bitcore-lib')
const bitcoin = require('bitcoinjs-lib')
const bip32utils = require('bip32-utils')

function App() {
  const [dados, setDados] = useState('Clique acima para gerar')
  const GerarMasterKey = () => {

    let mnemonic = bip39.generateMnemonic()
    let seed = bip39.mnemonicToSeedSync(mnemonic)
    var xprv = bitcore.HDPrivateKey.fromSeed(seed);
    console.log("Master Key: " + xprv.xprivkey)
    setDados(xprv.xprivkey)

}
  return (
    <div className="App">
      <h1>GERAR MASTER KEY</h1>
      <button onClick={GerarMasterKey}>Clique aqui para gerar</button>
      <br /><br />
      <div>MasterKey: {dados}</div>
    </div>
  );
}

export default App;
