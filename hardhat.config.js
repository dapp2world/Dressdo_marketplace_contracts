require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-truffle5');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-gas-reporter');
require('solidity-coverage');
require('@nomiclabs/hardhat-solhint');
require('hardhat-contract-sizer');
require('@openzeppelin/hardhat-upgrades');

// DB_URL=mongodb://USERNAME:PASSWORD@0.0.0.0:27017
// NETWORK_RPC=http://3.38.125.193:8545
// NETWORK_CHAINID=1337
// NODEINDEX=1
// API_ENDPOINT=http://localhost:3000/transfer/

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    enabled: false,
    gasPrice: 0,
  },
  networks: {
    mainnet: {
      url: `https://public-en.node.kaia.io`,
      chainId: 8217,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    testnet: {
      url: `https://public-en-kairos.node.kaia.io`,
      chainId: 1001,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    besutestnet: {
      url: `http://3.38.125.193:8545`,
      chainId: 1337,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    coverage: {
      url: 'http://localhost:8555',
    },
    
    localhost: {
      url: `http://127.0.0.1:8545`
    },
  },
  etherscan: {
    apiKey: '46DD6NK19R2AZQQIJIY1FXR85HKM2XSNBE'
  }
};