const SHA256 = require('crypto-js/sha256');
const Reward = require('./reward');

class Block {
    
    constructor(index, timestamp, address, anchor) {
        if(index === 0) {
            this.anchor = anchor;
        }
        this.index = index;
        this.difficulty = 0;
        this.timestamp = timestamp;
        this.previousHash = 0;
        this.nonce = 0;
        this.reward = this.calculateReward(index);
        this.owner = address;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.anchor + this.owner + this.previousHash +
            this.timestamp + JSON.stringify(this.timestamp)
            + this.nonce).toString();
    }

    calculateReward(height) {
        return Reward.calculateReward(height);
    }

}

module.exports = Block;