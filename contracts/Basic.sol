// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Basic is ERC20 {
    constructor(uint _initialSupply) ERC20("Basic ERC-20", "BASIC") {
        _mint(msg.sender, _initialSupply);
    }

    function mint(uint _amount) public {
        _mint(msg.sender, _amount);
    }

    receive() external payable {
        payable(msg.sender).transfer(msg.value);
    }

    fallback() external payable {
        payable(msg.sender).transfer(msg.value);
    }
}
