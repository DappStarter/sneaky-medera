require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name repeat night million include another army gauge'; 
let testAccounts = [
"0x6494deebe5fb3135fde44d4123cdefba7dd9f5547bae12aa16f301eaf959dd1c",
"0xec17abcf52af08112d131158ca5b6c3a13046c5b4de905c67c80a207bc6deb4f",
"0x8ef69ba29857034efd14a806884b044f0639ef698930bfa75c0b3baa3e968774",
"0xbdee50a1a4b852391e122684d3ec011f8a9722e0629cc543d415969850ddb1cb",
"0x40307aa33878340e82153cb7fe0a082c005625d5c37c4b3ae75604375ab8559f",
"0x3c301f1cb090dd64509f0c9c6c899d6a215a05f383c4306f3dcffc0e33d3e16b",
"0x9e1b104a352c2f3bb4b2573a72edda6cf78fdc633097ec8a66289f0a285d7f44",
"0x408622eef1a4f8b492817715dcc82345af25e397464f3c737634f9390d6efaf1",
"0x21280f359c30fcdaf00c8d91dda45abec4aac90e97d66099a2f9c95a1f067f9f",
"0xb90aa7b6b75a72eb4edc32b70c0d1d1b84b23fbe419db2a4efaaf21204b4bdf3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
