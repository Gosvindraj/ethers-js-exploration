const { ethers } = require("ethers");
require("dotenv").config();

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.WebSocketProvider(
  `wss://mainnet.infura.io/ws/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const address = "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55"; //SUPER contract token address

const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = () => {
  console.log("Listening for SUPER transfers...\n");
  contract.on("Transfer", (from, to, value, event) => {
    console.log(
      `Transfer from ${from} to ${to} of ${ethers.utils.formatEther(
        value
      )} SUPER`
    );
  });
};

main();
