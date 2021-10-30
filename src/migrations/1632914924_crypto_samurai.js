const CyberSamurai = artifacts.require("CyberSamurai");

module.exports = function (deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(CyberSamurai);
};
