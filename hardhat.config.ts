import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@nomicfoundation/hardhat-verify"
import "hardhat-deploy"
import * as dotenv from "dotenv"
import "./tasks/mint"
import "./tasks/send"
dotenv.config()

const {
    SEPOLIA_RPC_ENDPOINT_URL,
    SEPOLIA_PRIVATE_KEY,
    ETHERSCAN_API_KEY,
    ARTHERA_TESTNET_RPC_ENDPOINT_URL,
    ARTHERA_TESTNET_PRIVATE_KEY
} = process.env

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    namedAccounts: {
        deployer: 0
    },
    networks: {
        hardhat: {
            chainId: 1337,
            allowUnlimitedContractSize: true
        },
        sepolia: {
            url:
                SEPOLIA_RPC_ENDPOINT_URL ||
                "https://ethereum-sepolia.publicnode.com",
            accounts:
                SEPOLIA_PRIVATE_KEY !== undefined ? [SEPOLIA_PRIVATE_KEY] : []
        },
        "arthera-testnet": {
            url:
                ARTHERA_TESTNET_RPC_ENDPOINT_URL ||
                "https://rpc-test.arthera.net",
            accounts:
                ARTHERA_TESTNET_PRIVATE_KEY !== undefined
                    ? [ARTHERA_TESTNET_PRIVATE_KEY]
                    : []
        }
    },
    solidity: {
        version: "0.8.19",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    etherscan: {
        apiKey: {
            sepolia: ETHERSCAN_API_KEY || ""
        }
    }
}

export default config
