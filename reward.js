const initialReward = 500;
const halvingBlocks = 10;

let numHalvings;


let calculateReward = function(blockHeight) {

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