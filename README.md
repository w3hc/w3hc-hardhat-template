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
