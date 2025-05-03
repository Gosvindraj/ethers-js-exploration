const { ethers } = require("ethers");
require("dotenv").config();

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const address = "0xaE4D837cAA0C53579f8a156633355Df5058B02f3"; //Random ethereum address
const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
};

main();
