require("@nomiclabs/hardhat-waffle");
require("dotenv").config;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const PRIVATE_KEY = process.env.PRIVATE_KEY
const ALCHEMY_PROJECT_ID = process.env.WEB3_ALCHEMY_PROJECT_ID
const INFURA_PROJECT_ID = process.env.WEB3_INFURA_PROJECT_ID

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      forking: {
        // Replace with your actual API URL
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_PROJECT_ID}`
      }
    },
    local: {
      url: 'http://127.0.0.1:8545', //本地RPC地址
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,  //Infura url with projectId
      accounts: [`${PRIVATE_KEY}`],
      chainId: 3,
      live: true,
      saveDeployments: true,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 42,
      live: true,
      saveDeployments: true,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`${PRIVATE_KEY}`],
    },
     mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    fantom_fork: {
      url: "https://speedy-nodes-nyc.moralis.io/202cdb2908b026ae9a1991ce/fantom/mainnet",
      blockNumber:32971742,
    },
    loggingEnabled: false
  },
  solidity: "0.8.4",
};
