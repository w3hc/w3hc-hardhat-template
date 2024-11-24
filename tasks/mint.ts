import { task } from "hardhat/config"
import { ethers } from "hardhat"
import fs from "fs"
import path from "path"
var msg = require("cli-color").xterm(39).bgXterm(128)
var error = require("cli-color").red.bold

task("mint", "Mint a given amount of ERC-20 tokens")
    .addParam("amount")
    .setAction(async (amount, hre) => {
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
        const mint = await erc20.mint(await ethers.parseEther(amount.amount))
        const hash = mint.hash

        console.log(
            "Minted",
            msg(amount.amount),
            "units. \n\nTx hash:",
            msg(hash)
        )
    })
