const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128)
import hre, { ethers, network } from "hardhat"
import fs from "fs"

async function main() {
    const initialMint = ethers.parseEther("10000")
    const Basic = await ethers.getContractFactory("Basic")
    const basic = await Basic.deploy(initialMint)

    const recordAddress = {
        contractAddress: await basic.getAddress()
    }

    const content = JSON.stringify(recordAddress, null, 2)
    fs.writeFileSync("store.json", content)

    console.log(
        "Basic ERC-20 token contract deployed:",
        msg(await basic.getAddress())
    )

    if (network.name !== "arthera-testnet") {
        try {
            console.log("\nEtherscan verification in progress...")
            console.log(
                "\nWaiting for 6 block confirmations (you can skip this part)"
            )
            await basic.deploymentTransaction()?.wait(6)
            await hre.run("verify:verify", {
                network: network.name,
                address: await basic.getAddress(),
                constructorArguments: [initialMint]
            })
            console.log("Etherscan verification done. ✅")
        } catch (error) {
            console.error(error)
        }
    }
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
