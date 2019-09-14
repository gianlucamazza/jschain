const config = require("./config.json");

const numberOfBlocks = config.number_of_blocks_diff_adjustment;
const startingDiff = config.starting_network_difficulty;
const secondsBetweenBlocks = config.seconds_between_blocks;

function adjustDifficulty(jschain){
    let currentDiff = jschain.lastBlock().difficulty;
    let currentIndex = jschain.lastBlock().index;
    if(currentIndex <= numberOfBlocks) return startingDiff;
    if(currentIndex % numberOfBlocks === 0){
        let datesArray = [];
        for(let i = currentIndex; i > currentIndex - numberOfBlocks; i--){
            let dateBlock1 = new Date(jschain.chain[i].timestamp);
            let dateBlock2 = new Date(jschain.chain[i - 1].timestamp);
            let difference = (dateBlock1.getTime() - dateBlock2.getTime()) / 1000;
            datesArray.push(difference)
        }

        let up = 0;
        let down = 0;
        for(let i = 0; i < datesArray.length; i++){
            if(datesArray[i] < secondsBetweenBlocks){
                down = down + 1;
            }
            if(datesArray[i] > secondsBetweenBlocks){
                up = up + 1;
            }
        }

        if(up>down){
            console.log('decrease difficulty, current diff: ' + (currentDiff - 1));
            return parseInt(currentDiff) -1;
        }
        if (up<down){
            console.log('increase difficulty, current diff: ' + (currentDiff + 1));
            return parseInt(currentDiff) + 1;
        }
        if (up === down){
            console.log('no adjustment, current diff: ' + currentDiff);
            return parseInt(currentDiff)
        }
    }else{
        console.log('no adjustment, current diff: ' + currentDiff);
        return parseInt(currentDiff);
    }
}

module.exports = {
    adjustDifficulty
};