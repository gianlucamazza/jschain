const Block = require("./block");

const genesis_quote = 'Welcome to jschain';

var fs = require('fs');

class Blockchain{
    
    constructor() {
        this.chain = [Blockchain.createGenesis()];
    }

    static createGenesis() {
        let block = new Block(Date.now(), genesis_quote, "0");
        console.log('creating genesis block.. ');
        fs.writeFileSync('jschain/chain/' + 0 + '.txt', JSON.stringify(block), 'utf8', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        return block
    }

    latestBlock() {
        return this.chain[this.chain.length - 1]
    }

    checkValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }

            fs.writeFileSync('jschain/chain/' + currentBlock.index + '.txt', JSON.stringify(currentBlock), 'utf8', function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
           }
        return true;
    }
}

module.exports = Blockchain;