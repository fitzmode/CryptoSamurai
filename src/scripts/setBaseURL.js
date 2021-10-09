const Web3 = require("web3");
const AppContract = require("../output/NonConformingDucks.json");

const ACCOUNT = "0x3046741Dd68146Ee4391Ee5bB0d2D45F2f53A8cC";

//IMPORTANT: BASE_URL must have a trailing slash i.e 👉🏾 "/"

const BASE_URL =
  "https://ipfs.io/ipfs/Qmaiut7NtndwTrcLFsAoWcpE4kaVSzC91b81hPvAc44aNN/";
const sendTransaction = async () => {
  try {
    const web3 = new Web3(process.env.INFURA_URL);
    const chainId = await web3.eth.net.getId();
    const CONTRACT_ADDRESS = AppContract.networks[chainId].address;

    const contract = new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);
    const tx = contract.methods.setBaseURL(BASE_URL);
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
      },
      process.env.PRIVATE_KEY
    );
    console.log({ data, gas });
    console.log(`Initial BaseURL: ${await contract.methods._baseURL().call()}`);
    const receipt = await web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction
    );
    console.log(
      `Updated BaseURL: ${await contract.methods._baseURL().call()}. TX Hash ${
        receipt.transactionHash
      }`
    );
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

sendTransaction();
