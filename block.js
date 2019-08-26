const SHA256 = require('crypto-js/sha256');
const Reward = require('./reward');


class Block {
    
    constructor(index, timestamp) {
        this.index = index;
        this.difficulty = 0;
        this.timestamp = timestamp;
        this.previousHash = 0;
        this.nonce = 0;
        this.reward = this.calculateReward(index);
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash +
            this.timestamp + JSON.stringify(this.timestamp)
            + this.nonce).toString();
    }

    calculateReward(height) {
        let reward = Reward.calculateReward(height);
        return reward;
    }

}

module.exports = Block;