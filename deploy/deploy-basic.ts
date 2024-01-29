import "@nomiclabs/hardhat-ethers"
import color from "cli-color"
var msg = color.xterm(39).bgXterm(128)
import hre, { ethers, network } from "hardhat"

const initialMint = ethers.parseEther("10000")

export default async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments

    const { deployer } = await getNamedAccounts()
    console.log("deployer:", deployer)

    const basic = await deploy("Basic", {
        from: deployer,
        args: [initialMint],
        log: true
    })

    switch (hre.network.name) {
        case "arthera":
            console.log(
                "Basic ERC-20 token contract deployed:",
                msg(basic.receipt.contractAddress)
            )

            try {
                // Please use `pnpm sourcify:arthera` after the deployment instead.

                // console.log("\nEtherscan verification in progress...")
                // console.log(
                //     "\nWaiting for 6 block confirmations (you can skip this part)"
                // )
                // await basic.deploymentTransaction()?.wait(6)
                // await hre.run("verify:verify", {
                //     network: network.name,
                //     address: basic.receipt.contractAddress,
                //     constructorArguments: [initialMint]
                // })

                console.log(
                    "Please use `pnpm sourcify:arthera` to verify your contract."
                )
            } catch (error) {
                console.error(error)
            }

            break
        case "arthera-testnet":
            console.log(
                "Basic ERC-20 token contract deployed:",
                msg(basic.receipt.contractAddress)
            )

            try {
                // Please use `pnpm sourcify:arthera` after the deployment instead.

                // console.log("\nEtherscan verification in progress...")
                // console.log(
                //     "\nWaiting for 6 block confirmations (you can skip this part)"
                // )
                // await basic.deploymentTransaction()?.wait(6)
                // await hre.run("verify:verify", {
                //     network: network.name,
                //     address: basic.receipt.contractAddress,
                //     constructorArguments: [initialMint]
                // })

                console.log(
                    "Please use `pnpm sourcify:arthera-testnet` to verify your contract."
                )
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

        case "op-sepolia":
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
