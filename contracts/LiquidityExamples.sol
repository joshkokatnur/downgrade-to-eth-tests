// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.0;

import "@superfluid-finance/ethereum-contracts/contracts/interfaces/tokens/ISETH.sol";
import "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";

contract LiquidityExamples {

    address MATICx = 0x96B82B65ACF7072eFEb00502F45757F254c2a0D4;

    constructor() {}

    function downgradeMatic() external {
        ISETH token = ISETH(MATICx);
        uint amount = token.balanceOf(address(this));
        token.downgradeToETH(amount);
    }
}
