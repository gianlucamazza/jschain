const Block = require("./block");
const config = require("./config.json");
const genesis_quote = config.genesis_phrase;
const fs = require('fs');
const directory = './jschain/chain/';

function cleanChain(blockNum) {
    let files = fs.readdirSync(directory);
    if(files.length === 0) return;
    for (let i = files.length; i >= blockNum - 1;  i--) {
        console.log('removing not valid block.., : ' + files[i - 1]);
        this.chain.pop();
        fs.unlinkSync(directory + files[i - 1]);
    }
    console.log('blockchain folder cleaned...')
}

function readChain() {
    this.chain = [];
    let files = fs.readdirSync(directory);
    for (let i in files) {
        let data = fs.readFileSync(directory + files[i]);
        this.chain[i] = JSON.parse(data);
    }
    this.chain = this.chain.sort(function(a, b){return a.index - b.index});
    return this.chain
}

class Blockchain{
    
    constructor() {
        this.chain = readChain();
        if(this.chain.length > 0){
            console.log('restarting chain...');
            console.log('current block height: ' + this.chain[this.chain.length - 1].index)
        }else{
            // clean blockchain folder
            cleanChain(0);
            this.chain = [Blockchain.createGenesis()];
        }
    }

    static createGenesis() {
        let block = new Block(0, Date.now(), genesis_quote, "0");
        console.log('creating genesis block.. ');
        fs.writeFileSync(directory + 0 + '.json', JSON.stringify(block, null, 4));
        return block
    }

    lastBlock() {
        return this.chain[this.chain.length - 1]
    }

    getBlock(blockNum) {
        return this.chain[blockNum]
    }

    checkValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.previousHash !== previousBlock.hash) {
                cleanChain(currentBlock.index);
            }

            fs.writeFileSync('jschain/chain/' + currentBlock.index + '.json', JSON.stringify(currentBlock, null, 4));
           }
        return true;
    }
}

module.exports = Blockchain;