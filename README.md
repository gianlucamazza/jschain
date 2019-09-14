# POC: A javascript customizable sidechain for bitcoin

create and deploy custom sidechains anchored to the Bitcoin main chain.

``` 
# initialize wallet and create genesis block
jschain $ npm install
jschain $ npm run jschaind 
```

``` 
# start the node and the miner
jschain $ npm run jschaind 
```

example, a self generated GENESIS BLOCK:
```
{
    "anchor": "000000000000000000136f6922e4bc531772663d72b2f238f8a5ade76a1c0344",
    "index": 0,
    "difficulty": 0,
    "timestamp": 1568475695273,
    "previousHash": 0,
    "nonce": 0,
    "reward": "500",
    "owner": "xpub661MyMwAqRbcGux3NR7BwnrgM7DmPr5EAAN14hNmXYowPHy5Z8NaVJc1ureu2Y73c8BmHEX7NWyZnK68Tv9x7pxuLpz9PiwQMch2uaBFU16",
    "hash": "168e94440a58ffc107da388a245204afc6e3dc31765ae4c8d7624249312e3eb0"
}
```
