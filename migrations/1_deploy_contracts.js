const CreatorRoyalty = artifacts.require('CreatorRoyalty');

module.exports = function (deployer) {
  deployer.deploy(CreatorRoyalty);
};
