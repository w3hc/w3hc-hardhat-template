const {
    loadFixture
} = require("@nomicfoundation/hardhat-toolbox/network-helpers")
const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Basic ERC-20", function () {
    async function deployContracts() {
        const [alice, bob] = await ethers.getSigners()
        const initialBalance = ethers.parseEther("10000")
        const Basic = await ethers.getContractFactory("Basic")
        const basic = await Basic.deploy(initialBalance)
        return { basic, alice, bob, initialBalance }
    }

    describe("Deployment", function () {
        it("Should return a balance of 10,000 units", async function () {
            const { basic, initialBalance, alice } = await loadFixture(
                deployContracts
            )
            expect(await basic.balanceOf(alice.address)).to.equal(
                initialBalance
            )
        })
    })

    describe("Interactions", function () {
        it("Should mint 1 unit", async function () {
            const { basic, alice } = await loadFixture(deployContracts)
            const amount = ethers.parseEther("1")
            await basic.mint(amount)
            expect(await basic.balanceOf(alice.address)).to.be.equal(
                ethers.parseEther("10001")
            )
        })
        it("Should transfer 1 unit", async function () {
            const { basic, bob } = await loadFixture(deployContracts)
            const amount = ethers.parseEther("1")
            await basic.transfer(bob.address, amount)
            expect(await basic.balanceOf(bob.address)).to.be.equal(
                ethers.parseEther("1")
            )
        })
    })
})
