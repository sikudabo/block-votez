const MarionElection = artifacts.require("MarionElection");
const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(MarionElection);
  deployer.deploy(Migrations);
};
