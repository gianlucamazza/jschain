const bip39 = require('bip39');
const fs = require('fs');
const directory = './jschain/wallet/';

class Wallet {
    constructor(){
        this.seed = this.readSeed();
    }

    readSeed(){
        let mnemonic;
        try {
            mnemonic = fs.readFileSync(directory + 'seed.secret', "utf8");
        } catch (err) {
            console.log(err);
            if(err.code === 'ENOENT'){
                console.log('generate new seed');
                mnemonic = bip39.generateMnemonic();
                fs.writeFileSync(directory + 'seed.secret', mnemonic);
            }
        }
        console.log('your mnemonic is: ');
        console.log(mnemonic);
    }
}


module.exports = Wallet;