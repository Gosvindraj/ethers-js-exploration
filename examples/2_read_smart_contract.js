const { ethers } = require("ethers");
require("dotenv").config();

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; //USDC contract address
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log("name: ", name);
  console.log("symbol: ", symbol);
  console.log("total supply: ", ethers.utils.formatUnits(totalSupply, 6));

  const balanceOf = await contract.balanceOf(
    "0xc198e68528D2a5A08Affe030d19d3E23F2cb13e0" //random ethereum address
  );

  console.log("balance of is: ", ethers.utils.formatUnits(balanceOf, 6));
};

main();
