import "@nomiclabs/hardhat-ethers"

const initialMint = ethers.parseEther("10000")

export default async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments

    const { deployer } = await getNamedAccounts()
    console.log(deployer)

    await deploy("Basic", {
        from: deployer,
        args: [initialMint],
        log: true
    })
}
export const tags = ["Basic"]
