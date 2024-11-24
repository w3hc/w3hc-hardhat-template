import { task } from "hardhat/config"
import { ethers } from "hardhat"
import fs from "fs"
import path from "path"
var msg = require("cli-color").xterm(39).bgXterm(128)
var error = require("cli-color").red.bold

task("send", "Send a given amount of tokens to a given address")
    .addParam("wallet")
    .addParam("amount")
    .setAction(async (args, hre) => {
        const [signer] = await ethers.getSigners()
        const Basic = await ethers.getContractFactory("Basic")

        const deploymentPath = path.join(
            __dirname,
            "..",
            "deployments",
            hre.network.name,
            "Basic.json"
        )

        if (!fs.existsSync(deploymentPath)) {
            console.log(
                error(
                    `\nCan't find a deployed instance of Basic ERC-20 on ${hre.network.name}`
                ),
                "\nTry deploying it first with:",
                msg(`\npnpm deploy:${hre.network.name}`)
            )
            return
        }

        const deploymentData = JSON.parse(
            fs.readFileSync(deploymentPath, "utf8")
        )
        const addr = deploymentData.address

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
