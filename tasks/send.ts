import { task } from "hardhat/config"
var msg = require("cli-color").xterm(39).bgXterm(128)
import * as optimismDeploymentData from "../deployments/op-sepolia/Basic.json"
import * as sepoliaDeploymentData from "../deployments/sepolia/Basic.json"
import * as opSepoliaDeploymentData from "../deployments/op-sepolia/Basic.json"

task("send", "Send a given amount of tokens to a given address")
    .addParam("wallet")
    .addParam("amount")
    .setAction(async (args, hre) => {
        const [signer] = await ethers.getSigners()
        const Basic = await ethers.getContractFactory("Basic")

        let addr
        switch (hre.network.name) {
            case "optimism":
                addr = optimismDeploymentData.address
                break
            case "sepolia":
                addr = sepoliaDeploymentData.address
                break
            case "op-sepolia":
                addr = opSepoliaDeploymentData.address
                break
        }
        const erc20 = new ethers.Contract(addr, Basic.interface, signer)
        const mint = await erc20.transfer(
            args.wallet,
            await ethers.parseEther(args.amount)
        )
        const hash = mint.hash
        console.log(
            "\nSent",
            msg(args.amount),
            "to",
            args.wallet,
            "\n\nTx hash:",
            msg(hash)
        )
    })
