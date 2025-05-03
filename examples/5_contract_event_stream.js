const { ethers } = require("ethers");
require("dotenv").config();

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const address = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; // USDC Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const block = await provider.getBlockNumber();

  const transferEvents = await contract.queryFilter(
    "Transfer",
    block - 5,
    block
  );
  console.log(transferEvents);
};

main();
