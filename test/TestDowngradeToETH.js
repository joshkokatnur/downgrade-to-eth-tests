const LiquidityExamples = artifacts.require("LiquidityExamples");
const IERC20 = artifacts.require("IERC20");

contract("LiquidityExample", accounts => {

    it("checks downgradeToETH on MATICx", async () => {
        
        const USER_ADDRESS = "0xFc25b7BE2945Dd578799D15EC5834Baf34BA28e1";
        const MATICx = "0x96B82B65ACF7072eFEb00502F45757F254c2a0D4";

        const MATICx_Contract = await IERC20.at(MATICx);

        const liquidityExamples = await LiquidityExamples.new();
        console.log("LiquidityExample.address -", liquidityExamples.address);

        // transfer maticx
        const User_Balance = (await MATICx_Contract.balanceOf(USER_ADDRESS)).toString();
        console.log("MATICx balance of user: ", User_Balance)
        await MATICx_Contract.transfer(liquidityExamples.address, User_Balance, { from: USER_ADDRESS, gasLimit: 800000 });

        const Contract_Balance = (await MATICx_Contract.balanceOf(liquidityExamples.address)).toString();
        console.log("MATICx balance of contract: ", Contract_Balance)

        const User_Balance2 = (await MATICx_Contract.balanceOf(USER_ADDRESS)).toString();
        console.log("MATICx balance of user: ", User_Balance2)

        const returnValues = await liquidityExamples.downgradeMatic({ from: USER_ADDRESS });
        console.log(returnValues);
    })
})