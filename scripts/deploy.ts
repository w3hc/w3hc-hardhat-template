const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128);
import hre, { ethers, network } from 'hardhat'

async function main() {

  const initialMint = ethers.parseEther("10000")
  const Basic = await ethers.getContractFactory("Basic");
  const basic = await Basic.deploy(initialMint);

  console.log('Basic ERC-20 token contract deployed:', msg(await basic.getAddress()));

  try {
    console.log("\nEtherscan verification in progress...")
    await basic.deploymentTransaction()?.wait(6);
    await hre.run("verify:verify", { network: network.name, address: await basic.getAddress(), constructorArguments: [initialMint], })
    console.log("Etherscan verification done. ✅")
  } catch (error) {
    console.error(error)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});