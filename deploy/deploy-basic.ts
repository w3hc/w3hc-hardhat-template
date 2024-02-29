import "@nomiclabs/hardhat-ethers"
import color from "cli-color"
var msg = color.xterm(39).bgXterm(128)
import hre, { ethers, network } from "hardhat"

const initialMint = ethers.parseEther("10000")

export default async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments

    function wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const { deployer } = await getNamedAccounts()
    console.log("deployer:", deployer)

    const basic = await deploy("Basic", {
        from: deployer,
        args: [initialMint],
        log: true
    })

    switch (hre.network.name) {
        case "sepolia":
            try {
                console.log(
                    "Basic ERC-20 token contract deployed:",
                    msg(basic.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                await wait(90 * 1000)
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

        case "op-sepolia":
            try {
                console.log(
                    "Basic ERC-20 token contract deployed:",
                    msg(basic.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                await wait(90 * 1000)
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

        case "arthera":
            // the contract will be verified automatically
            console.log(
                "Basic ERC-20 token contract deployed:",
                msg(basic.receipt.contractAddress)
            )
            break

        case "arthera-testnet":
            // the contract will be verified automatically
            console.log(
                "Basic ERC-20 token contract deployed:",
                msg(basic.receipt.contractAddress)
            )
            break
    }
}
export const tags = ["Basic"]
