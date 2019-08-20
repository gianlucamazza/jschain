# jschain
a basic blockchain implementation in javascript/node

```
jschain $ npm install
jschain $ npm run jschaind 
```

The miner has been stopped at block #35 after mining empty blocks at fixed difficulty of 5.
All coinbases till block 35 has been burned, no address/output has been provided.
The idea is to expand the chain without breaking the original consensus.

### target to achieve without destroing consensus:

- difficulty adjustment based on average time (*)

- tor daemon/sync with other nodes trought the newtork

- wallet and transactions to be implemented

- nosql database (*)

- new pow alghritm (*)



( * ) to be discussed

- federated nuclear based mining ( ** )

( ** ) feature
