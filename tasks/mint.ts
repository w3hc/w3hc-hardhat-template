import { task } from "hardhat/config"
var msg = require("cli-color").xterm(39).bgXterm(128)
import * as artheraTestnetDeploymentData from "../deployments/arthera-testnet/Basic.json"
import * as sepoliaDeploymentData from "../deployments/sepolia/Basic.json"
import * as artheraDeploymentData from "../deployments/arthera/Basic.json"
import * as opSepoliaDeploymentData from "../deployments/op-sepolia/Basic.json"

task("mint", "Mint a given amount of ERC-20 tokens")
    .addParam("amount")
    .setAction(async (amount, hre) => {
        const [signer] = await ethers.getSigners()
        const Basic = await ethers.getContractFactory("Basic")
        let addr
        switch (hre.network.name) {
            case "arthera":
                addr = artheraDeploymentData.address
                break
            case "arthera-testnet":
                addr = artheraTestnetDeploymentData.address
                break
            case "sepolia":
                addr = sepoliaDeploymentData.address
                break
            case "op-sepolia":
                addr = opSepoliaDeploymentData.address
                break
        }
        const erc20 = new ethers.Contract(addr, Basic.interface, signer)
        const mint = await erc20.mint(await ethers.parseEther(amount.amount))
        const hash = mint.hash
        console.log(
            "Minted",
            msg(amount.amount),
            "units. \n\nTx hash:",
            msg(hash)
        )
    })
