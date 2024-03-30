import { ContractFactory, JsonRpcProvider, Wallet } from 'ethers';
import fs from "fs";


const bytecode = fs.readFileSync('Cobweb.bin').toString();
const abi = JSON.parse(fs.readFileSync('Cobweb.abi').toString());


const provider = new JsonRpcProvider("http://127.0.0.1:8545")
const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
const wallet = new Wallet(PRIVATE_KEY, provider); // private key with coins

const factory = new ContractFactory(abi, bytecode, wallet);

// If your contract requires constructor args, you can specify them here
const contract = await factory.deploy({ gasLimit: 1 * 10 ** 6 });

console.log(contract);
