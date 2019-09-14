const config = require("./config.json");

const initialReward = config.initial_reward;
const halvingBlocks = config.halving_blocks;

let numHalvings;

function calculateReward (blockHeight) {
    if(blockHeight === 0) return initialReward;
    numHalvings = Math.floor(blockHeight / halvingBlocks);
    let currentReward = initialReward;
    for(let i = 0; i < numHalvings; i++){
        currentReward = currentReward / 2;
    }
    if(currentReward < 1) return 1;
    return currentReward;
};

module.exports = {
    calculateReward
};