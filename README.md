# jschain
a basic blockchain implementation in javascript/node

```
jschain $ npm install
jschain $ npm run jschaind 
```

The miner has been stopped at block #35 after mining empty blocks at fixed difficulty of 5.
All coinbases till block 35 has been burned, no address/output has been provided.
The idea is to expand the chain without breaking the original consensus.

```
genesis block: 0506b6221b77c3e40fd6498483c2060415161e6a3a4d00c8423ce3acd7f1e310

block 35: {"index":35,"difficulty":5,"timestamp":34,"previousHash":"00000375f2778de1b2227aaef24c618fabbc86e8500b847001299b60dbcc3ab4","hash":"000004b9b8365e018dcd05f622d502bef5f2182e5f8739fac253d16b851dab5e","nonce":741844,"reward":500}

```

### target to achieve without destroing consensus:

- difficulty adjustment based on average time (*)

- tor daemon/sync with other nodes trought the newtork

- wallet and transactions to be implemented

- nosql database (*)

- new pow alghritm (*)



( * ) to be discussed

- federated nuclear based mining ( ** )

( ** ) feature
