const CryptoSamurai = artifacts.require("CryptoSamurai");

module.exports = function (deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(CryptoSamurai);
};
