const Block = require('./block');
const Blockchain = require('./blockchain');
const Miner = require('./miner');
const Wallet = require('./wallet');
const difficulty = require('./difficulty');

// create base directory
let fs = require('fs');
let dir = 'jschain';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    fs.mkdirSync(dir + '/chain');
    fs.mkdirSync(dir + '/wallet');
    fs.mkdirSync(dir + '/logs');
}

function startMiner(index, jsChain) {
    let block = new Block(index, Date.now(), wallet.xpub);

    block.difficulty = difficulty.adjustDifficulty(jsChain);
    Miner.prepareBlock(jsChain, block);
    Miner.submitBlock(jsChain.chain, block);
    if(!jsChain.checkValid()){
        console.log('error chain not valid');
    }
}

let jsChain = new Blockchain();
let wallet = new Wallet();

console.log('jschain daemon started...');
while(true) {
    startMiner(jsChain.lastBlock().index + 1, jsChain);
    console.log('height: ' + jsChain.lastBlock().index)
    console.log('difficulty: ' + jsChain.lastBlock().difficulty)
    console.log('reward: ' + jsChain.lastBlock().reward)
}
