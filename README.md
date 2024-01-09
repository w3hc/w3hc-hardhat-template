# W3HC Hardhat Template

This Hardhat template includes:

-   Typescript
-   Ethers v6
-   Open Zeppelin contracts
-   Hardhat Verify plugin

## Supported networks

-   [Sepolia Testnet](https://chainlist.org/chain/11155111) ([docs](https://ethereum.org/nb/developers/docs/networks/#sepolia))
-   [OP Sepolia Testnet](https://chainlist.org/chain/11155420) ([docs](https://docs.optimism.io/chain/networks#op-sepolia))
-   [Arthera testnet](https://chainlist.org/chain/10243) ([docs](https://docs.arthera.net/build/networks#arthera-testnet))

## Install

```
pnpm install
```

Create a `.env` file:

```
cp .env.template .env
```

Add your own keys in the `.env` file.

## Test

```
pnpm test
```

## Deploy

Deploy to Sepolia:

```
pnpm deploy:sepolia
```

_Please note that it includes an automatic Etherscan verification._

Deploy to Arthera Testnet:

```
pnpm deploy:arthera
```

> [!CAUTION]
> Will fail: `invalid opcode: opcode 0x5f not defined`

With Solidity `v0.8.19`, I get: 

```
> w3hc-hardhat-template@0.1.0 deploy:arthera /Users/ju/w3hc-hardhat-template
> hardhat deploy --network arthera-testnet

Error HH606: The project cannot be compiled, see reasons below.

The Solidity version pragma statement in these files doesn't match any of the configured compilers in your config. Change the pragma or configure additional compiler versions in your hardhat config.

  * @openzeppelin/contracts/token/ERC20/ERC20.sol (^0.8.20)
  * @openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol (^0.8.20)
  * @openzeppelin/contracts/token/ERC20/IERC20.sol (^0.8.20)
  * @openzeppelin/contracts/utils/Context.sol (^0.8.20)
  * @openzeppelin/contracts/interfaces/draft-IERC6093.sol (^0.8.20)

These files and its dependencies cannot be compiled with your config. This can happen because they have incompatible Solidity pragmas, or don't match any of your configured Solidity compilers.

  * contracts/Basic.sol

To learn more, run the command again with --verbose

Read about compiler configuration at https://hardhat.org/config


For more info go to https://hardhat.org/HH606 or run Hardhat with --show-stack-traces
 ELIFECYCLE  Command failed with exit code 1.
```

Then when I switch to Solidity `v0.8.20`: 

```
> w3hc-hardhat-template@0.1.0 deploy:arthera /Users/ju/w3hc-hardhat-template
> hardhat deploy --network arthera-testnet

Generating typings for: 8 artifacts in dir: typechain-types for target: ethers-v6
Successfully generated 34 typings!
Compiled 6 Solidity files successfully
0x3bF0fc0f9D54C0C6D4b35317f65Bb9ECA75c9Dd0
An unexpected error occurred:

Error: ERROR processing /Users/ju/w3hc-hardhat-template/deploy/deploy-basic.ts:
ProviderError: invalid opcode: opcode 0x5f not defined
    at HttpProvider.request (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat@2.17.2_ts-node@10.9.1_typescript@5.2.2/node_modules/hardhat/src/internal/core/providers/http.ts:88:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at DeploymentsManager.executeDeployScripts (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat-deploy@0.11.37/node_modules/hardhat-deploy/src/DeploymentsManager.ts:1214:19)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async DeploymentsManager.runDeploy (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat-deploy@0.11.37/node_modules/hardhat-deploy/src/DeploymentsManager.ts:1060:5)
    at async SimpleTaskDefinition.action (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat-deploy@0.11.37/node_modules/hardhat-deploy/src/index.ts:442:5)
    at async Environment._runTaskDefinition (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat@2.17.2_ts-node@10.9.1_typescript@5.2.2/node_modules/hardhat/src/internal/core/runtime-environment.ts:333:14)
    at async Environment.run (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat@2.17.2_ts-node@10.9.1_typescript@5.2.2/node_modules/hardhat/src/internal/core/runtime-environment.ts:166:14)
    at async SimpleTaskDefinition.action (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat-deploy@0.11.37/node_modules/hardhat-deploy/src/index.ts:593:32)
    at async Environment._runTaskDefinition (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat@2.17.2_ts-node@10.9.1_typescript@5.2.2/node_modules/hardhat/src/internal/core/runtime-environment.ts:333:14)
    at async Environment.run (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat@2.17.2_ts-node@10.9.1_typescript@5.2.2/node_modules/hardhat/src/internal/core/runtime-environment.ts:166:14)
    at async SimpleTaskDefinition.action (/Users/ju/w3hc-hardhat-template/node_modules/.pnpm/hardhat-deploy@0.11.37/node_modules/hardhat-deploy/src/index.ts:682:5)
 ELIFECYCLE  Command failed with exit code 1.
```

As of now, Arthera **can't support Open Zeppelin contracts library `v5.0.1`** because Arthera does not support Solidity `v0.8.20`. 

- Stack exchange: https://ethereum.stackexchange.com/questions/150281/invalid-opcode-opcode-0x5f-not-defined 
- EVM versions: https://ethereum.org/en/history/ 

## Check balance

You can check the current signer wallet balance:

```
pnpm bal op-sepolia
```

## Verify using Sourcify

On Arthera Testnet:

```
pnpm sourcify:arthera 8
```

## Mint

On Sepolia:

```
pnpm mint:sepolia 42
```

On Arthera Testnet:

```
pnpm mint:arthera 42
```

## Send

On Sepolia:

```
pnpm send:sepolia 8
```

On Arthera Testnet:

```
pnpm send:arthera 8
```

## Versions

-   Node [v20.9.0](https://nodejs.org/uk/blog/release/v20.9.0/)
-   PNPM [v8.7.5](https://pnpm.io/pnpm-vs-npm)
-   Hardhat [v2.17.2](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%402.17.2)
-   OpenZeppelin Contracts [v4.9.3](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v4.9.3)
-   Ethers [v6](https://docs.ethers.org/v6/)

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
