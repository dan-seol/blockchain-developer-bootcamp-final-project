const SenryuNFT = artifacts.require("SenryuNFT");

module.exports = function(deployer) {
  deployer.deploy(SenryuNFT);
};