const SHA256 = require('crypto-js/sha256');

class Block {
    
    constructor(index, timestamp) {
        this.index = index;
        this.difficulty = 5;
        this.timestamp = timestamp;
        this.hash = this.calculateHash();
        this.nonce = 0;
        this.reward = 500;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.timestamp) + this.nonce).toString();
    }

}

module.exports = Block;