require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn provide harvest beauty fun season'; 
let testAccounts = [
"0x6cc766671c81bdd3e18664384ed5db98a167bdbcd7ea7432ce65ebb92aa00538",
"0xe5a7076907747efd39e5e4de241c7e5b56bf25706b2e664ff9bd3af8c203c578",
"0xb6d34dd9b16ce61589ff5dafa02f393f4116e26ce8342cce8eee65a880e9208e",
"0xca84c19aa9bb56791c5bec0e9cbec380c8e2091a81eaad84b97a35847ab0d576",
"0xe46d320626af0fadf226e71fad965858f38a8bbb747949099ea76f70e261bfde",
"0x5ba95e5ac0d0a9e9478c76123047f9a09c95a35b4e0bdcf4259e7275305ae1e2",
"0xc0edd88cd2f00d74d6492db00aa40a66546207483c522d403045207cbda642ac",
"0xb124e7c0695f7c89ae635a1a966c4dfe715bb74ad2e2ce4029d200bd0ec2c9c8",
"0x5439df2eb42c735db122fab8250ffc3dad1c5d6bae7fdedace382a0ec7a863e4",
"0x98446be598420b38c929e79afd3955c5db76e0b394f514d7902be2e106ff81d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
