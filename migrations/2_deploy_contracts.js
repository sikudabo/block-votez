const ConvertLib = artifacts.require("ConvertLib");
const MarionElection = artifacts.require("MarionElection");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MarionElection);
  deployer.deploy(MetaCoin);
};
