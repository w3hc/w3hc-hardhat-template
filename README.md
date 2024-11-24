# W3HC Hardhat Template

A comprehensive development environment for Ethereum-compatible networks using Hardhat.

## Features

-   [Typescript](https://www.typescriptlang.org/)
-   [Ethers v6](https://docs.ethers.org/v6/)
-   [OpenZeppelin Contracts v5.1.0](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v5.1.0)
-   [Hardhat Verify plugin](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify)
-   [Hardhat Deploy plugin](https://github.com/wighawag/hardhat-deploy)

## Supported Networks

| Network | Chain ID | Documentation |
|---------|----------|---------------|
| Optimism Mainnet | 10 | [Documentation](https://docs.optimism.io/chain/networks#op-mainnet) |
| Sepolia Testnet | 11155111 | [Documentation](https://ethereum.org/nb/developers/docs/networks/#sepolia) |
| OP Sepolia Testnet | 11155420 | [Documentation](https://docs.optimism.io/chain/networks#op-sepolia) |
| Base Sepolia Testnet | 84532 | [Documentation](https://docs.base.org/docs/network-information/#base-testnet-sepolia) |

## Contract Verification

| Network | Explorer URL | API URL | API Key Variable |
|---------|--------------|---------|-----------------|
| Sepolia | https://sepolia.etherscan.io | https://api-sepolia.etherscan.io/api | ETHERSCAN_API_KEY |
| Optimism | https://optimistic.etherscan.io | https://api-optimistic.etherscan.io/api | OP_ETHERSCAN_API_KEY |
| OP Sepolia | https://sepolia-optimism.etherscan.io | https://api-sepolia-optimistic.etherscan.io/api | OP_ETHERSCAN_API_KEY |
| Base Sepolia | https://sepolia.basescan.org | https://api-sepolia.basescan.org/api | BASE_ETHERSCAN_API_KEY |

## Contract Verification

| Network | Explorer URL | API URL | API Key Variable |
|---------|--------------|---------|-----------------|
| Sepolia | https://sepolia.etherscan.io | https://api-sepolia.etherscan.io/api | ETHERSCAN_API_KEY |
| Optimism | https://optimistic.etherscan.io | https://api-optimistic.etherscan.io/api | OP_ETHERSCAN_API_KEY |
| Base | https://basescan.org | https://api.basescan.org/api | BASE_ETHERSCAN_API_KEY |
| OP Sepolia | https://sepolia-optimism.etherscan.io | https://api-sepolia-optimistic.etherscan.io/api | OP_ETHERSCAN_API_KEY |
| Base Sepolia | https://sepolia.basescan.org | https://api-sepolia.basescan.org/api | BASE_ETHERSCAN_API_KEY |

### Manual Contract Verification

When deploying, you may see this error:
```
ContractStatusPollingResponseNotOkError: The Etherscan API responded with a failure status.
Reason: Fail - Unable to verify. Unable to locate ContractCode at <address>
```

This is normal - it means the contract needs time to be indexed. Wait 1-2 minutes, then run:

```bash
npx hardhat verify --network <NETWORK_NAME> <CONTRACT_ADDRESS> "10000000000000000000000"
```

Where:
- `<NETWORK_NAME>`: `optimism`, `base`, `op-sepolia`, or `base-sepolia`
- `<CONTRACT_ADDRESS>`: The address where your contract was deployed

Note: The constructor argument represents the initial supply in wei (e.g., "10000000000000000000000" for 10,000 tokens with 18 decimals)

If the verification fails with "Unable to locate ContractCode", wait a few minutes for the contract to be indexed by the block explorer and try again.

Alternative Manual Verification via Block Explorers:
- Optimism: https://optimistic.etherscan.io/verifyContract
- Base: https://basescan.org/verifyContract
- OP Sepolia: https://sepolia-optimism.etherscan.io/verifyContract 
- Base Sepolia: https://sepolia.basescan.org/verifyContract

When verifying through block explorers:
1. Choose "Solidity (Single file)"
2. Fill in:
   - Contract Address
   - Compiler: v0.8.20
   - License: GPL-3.0
   - Optimization: Yes (200 runs)
   - Contract code from Basic.sol
   - Constructor Arguments: 10000000000000000000000

## Installation

1. Install dependencies:
```bash
pnpm install
```

2. Configure environment:
```bash
cp .env.template .env
```

3. Update `.env` with your configuration:
```plaintext
# Required Configuration
OPTIMISM_MAINNET_RPC_ENDPOINT_URL="your_optimism_rpc_url"
OPTIMISM_MAINNET_PRIVATE_KEY="your_private_key"
OP_ETHERSCAN_API_KEY="your_api_key"

# Additional networks...
```

## Usage

### Testing
Execute the test suite:
```bash
pnpm test
```

### Deployment
Deploy to supported networks:
```bash
pnpm deploy:<network>
```
Supported values for `<network>`: `sepolia`, `optimism`, `op-sepolia`, `base-sepolia`

### Network Operations

Check wallet balance:
```bash
pnpm bal <network>
```

Mint tokens:
```bash
pnpm mint:<network> <amount>
```

Transfer tokens:
```bash
pnpm send:<network> <amount>
```

## Core Dependencies

-   Node [v20.9.0](https://nodejs.org/uk/blog/release/v20.9.0/)
-   PNPM [v9.10.0](https://pnpm.io/pnpm-vs-npm)
-   Hardhat [v2.22.16](https://github.com/NomicFoundation/hardhat/releases/)
-   OpenZeppelin Contracts [v5.1.0](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v5.1.0)
-   Ethers [v6.13.4](https://docs.ethers.org/v6/)

## Support

Feel free to reach out to [Julien](https://github.com/julienbrg): [Farcaster](https://warpcast.com/julien-), [Element](https://matrix.to/#/@julienbrg:matrix.org), [Status](https://status.app/u/iwSACggKBkp1bGllbgM=#zQ3shmh1sbvE6qrGotuyNQB22XU5jTrZ2HFC8bA56d5kTS2fy), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).