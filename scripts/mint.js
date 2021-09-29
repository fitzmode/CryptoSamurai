const Web3 = require("web3");
const AppContract = require("../src/output/CryptoSamurai.json");

const CONTRACT_ADDRESS = "0xE9750C35e4f78b80A8710cFbc8DCD089c95dbc46";
const ACCOUNT = "0x3046741Dd68146Ee4391Ee5bB0d2D45F2f53A8cC";

//IMPORTANT: BASE_URL must have a trailing slash i.e 👉🏾 "/"

const BASE_URL =
  "https://ipfs.io/ipfs/QmVZ4R2j2BwR1HNhsNGpgWdWmaCjzc45oC8uz3nQYTWkp4/";
const sendTransaction = async () => {
  try {
    const web3 = new Web3(process.env.INFURA_URL);
    const chainId = await web3.eth.net.getId();
    const contract = new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

    const amount = (0.03 * 1).toFixed(2);
    const value = web3.utils.toWei(amount, "ether");
    const tx = contract.methods.mint(1);
    const gas = await tx.estimateGas({ from: ACCOUNT });
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(ACCOUNT);
    const signedTransaction = await web3.eth.accounts.signTransaction(
      {
        to: CONTRACT_ADDRESS, //contract.options.address
        data,
        gas,
        gasPrice,
        nonce,
        chainId,
        value,
      },
      process.env.PRIVATE_KEY
    );
    console.log({ data, gas });
    // console.log(`Initial BaseURL: ${await contract.methods._baseURL().call()}`);
    const receipt = await web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction
    );
    // console.log(
    //   `Updated BaseURL: ${await contract.methods._baseURL().call()}. TX Hash ${
    //     receipt.transactionHash
    //   }`
    // );
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

sendTransaction();
