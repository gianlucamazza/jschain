const {
    performance
  } = require('perf_hooks');

class Miner {

    static prepareBlock(chain, block) {
        block.previousHash = chain.lastBlock().hash;
        block.index = chain.lastBlock().index + 1;
        Miner.mineBlock(block, block.difficulty);
    }

    static mineBlock(block, difficulty) {
        console.log('looking for new block...');
        const t0 = performance.now();

        while (block.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            block.nonce++;
            block.difficulty = difficulty;
            block.hash = block.calculateHash();
        }

        const t1 = performance.now();
        let delta = t1 - t0;
        console.log("Finding the block took " + delta + " milliseconds.");
    }

    static submitBlock(chain, block) {
        chain.push(block);
    }

}

module.exports = Miner;