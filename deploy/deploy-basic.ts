import "@nomiclabs/hardhat-ethers"
const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128)
import hre, { ethers, network } from "hardhat"

const initialMint = ethers.parseEther("10000")

export default async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments

    const { deployer } = await getNamedAccounts()
    console.log(deployer)

    const basic = await deploy("Basic", {
        from: deployer,
        args: [initialMint],
        log: true
    })

    console.log("basic.receipt.contractAddress:", basic.receipt.contractAddress)
    console.log("hre.network.name:", hre.network.name)

    switch (hre.network.name) {
        // TODO: fix verification for Arthera Testnet using Sourcify
        case "arthera-testnet":
            console.log(
                "Basic ERC-20 token contract deployed:",
                msg(basic.receipt.contractAddress)
            )
            try {
                console.log("\nEtherscan verification in progress...")
                console.log(
                    "\nWaiting for 6 block confirmations (you can skip this part)"
                )
                await basic.deploymentTransaction()?.wait(6)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: basic.receipt.contractAddress,
                    constructorArguments: [initialMint]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break
        case "sepolia":
            try {
                console.log(
                    "Basic ERC-20 token contract deployed:",
                    msg(basic.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                console.log(
                    "\nWaiting for 6 block confirmations (you can skip this part)"
                )
                // await basic.deploymentTransaction()?.wait(6)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: basic.receipt.contractAddress,
                    constructorArguments: [initialMint]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break
    }
}
export const tags = ["Basic"]
