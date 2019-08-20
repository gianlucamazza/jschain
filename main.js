const Block = require("./block");
const Blockchain = require("./blockchain");
const Miner = require("./miner");

// debug variable flag
const debug = true;

// create directory if necessary
var fs = require('fs');
var dir = 'jschain';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    fs.mkdirSync(dir + "/chain");
    fs.mkdirSync(dir + "/wallet");
    fs.mkdirSync(dir + "/logs");
}

let jsChain = new Blockchain();

for(let i = 0; i >= 0; i++){
    let block = new Block(i, Date.now());
    Miner.prepareBlock(jsChain, block);
    Miner.submitBlock(jsChain.chain, block);
    if(!jsChain.checkValid()){
        console.log('error chain not valid');
    }
    console.log('latest height: ' + jsChain.latestBlock().index);
    console.log('latest hash: ' + jsChain.latestBlock().hash);
    console.log('previous hash: ' + jsChain.latestBlock().previousHash);
    console.log('difficulty: ' + jsChain.latestBlock().difficulty)
}
