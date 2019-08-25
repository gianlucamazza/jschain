let initialReward = 500;
let currentReward;
let numHalvings;
const halvingBlocks = 10;

let calculateReward = function(blockHeight) {
    if(blockHeight === 0) return initialReward;
    numHalvings = Math.floor(blockHeight / halvingBlocks);
    if(numHalvings === 0) return initialReward;
    else currentReward = initialReward / numHalvings;

    return currentReward;
};

module.exports = {
    calculateReward
};