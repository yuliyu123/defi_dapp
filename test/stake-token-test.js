const { expect } = require("chai");
const { ethers } = require("hardhat");
require("./tokens.js");

describe("stake token", function () {
  it("stake token", async function () {
    let [deployer, alice, bob] = await ethers.getSigners();

    // deploy dapp token and tokenfarm contract
    const dappTokenFactory = await ethers.getContractFactory("DappToken");
    this.dappToken = await dappTokenFactory.deploy();

    const tokenFarmFactory = await ethers.getContractFactory("TokenFarm");
    this.tokenFarm = await tokenFarmFactory.deploy(this.dappToken.address);    
    
    // add allowed token
    this.tokenFarm.addAllowedTokens(dai_usd_price_feed);
    this.tokenFarm.setPriceFeedContract(dai_usd_price_feed, eth_usd_price_feed);

    const ethPrice = await this.tokenFarm.getTokenEthPrice(dai_usd_price_feed);
    console.log("the latest eth price: ", ethPrice);

    const res = await this.tokenFarm.connect(alice).tokenIsAllowed(dai_usd_price_feed);
    console.log("dai_usd_price_feed tokenIsAllowed: ", res);
  });
});
