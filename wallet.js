const node = require('hdkey');
const bip39 = require('bip39');
const fs = require('fs');
const directory = './jschain/wallet/';

class Wallet {
    constructor(){
        this.seed = this.readSeed();
        this.account = 0;
        this.balance = 0;
        this.xpub = this.publicExtendedKey(this.seed);
        this.xpriv = this.privateExtendedKey(this.seed);
    }

    readSeed(){
        let mnemonic;
        try {
            mnemonic = fs.readFileSync(directory + 'seed.secret', 'UTF-8');
        } catch (err) {
            console.log(err);
            if(err.code === 'ENOENT'){
                console.log('generate new seed');
                mnemonic = bip39.generateMnemonic();
                fs.writeFileSync(directory + 'seed.secret', mnemonic);
            }
        }
        if(bip39.validateMnemonic(mnemonic)){
            return mnemonic
        }
    }

    publicExtendedKey(seed) {
        return node.fromMasterSeed(Buffer.from(seed)).publicExtendedKey;
    }

    privateExtendedKey(seed) {
        return node.fromMasterSeed(Buffer.from(seed)).privateExtendedKey;
    }

}

module.exports = Wallet;