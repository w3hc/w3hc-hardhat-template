import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import * as dotenv from "dotenv";
import "./tasks/mint"
dotenv.config();

const {
  GOERLI_RPC_ENDPOINT_URL,
  GOERLI_PRIVATE_KEY,
  ETHERSCAN_API_KEY
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.21",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    'hardhat': {
      chainId: 1337,
      allowUnlimitedContractSize: true
    },
    'goerli': {
      url: GOERLI_RPC_ENDPOINT_URL as string,
      accounts: GOERLI_PRIVATE_KEY !== undefined ? [GOERLI_PRIVATE_KEY] : [],
    }
  }, 
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY || ""
    },
  },
};

export default config;