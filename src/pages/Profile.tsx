import LeftMenu from '@/components/leftMenu';
import useConnect from '@/lib/hooks/useConnect';

import { truncateAddress } from '@/lib/utils';
import { Description } from '@radix-ui/react-dialog';
import { FunctionFragment, Result, ethers, toNumber } from "ethers";


import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isContext } from 'vm';
//@ts-ignore
BigInt.prototype.toJSON = function() {}

const Profile = () => {
  const { slug } = useParams();

  const navigate = useNavigate();
  const { connect, getSigner, getProvider, contractAddress, balance, contractABI, address, isConnected} =
    useConnect();
  const [inputAmount, setInputAmount] = useState('');
  const [shareBuyPrice, setShareBuyPrice] = useState(0);
  const [keyBalance, setKeyBalance] = useState(0);
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [proposals, setProposals] = useState([Result]);
  const interfaceABI = new ethers.Interface(contractABI)
  useEffect(() => {
    fetchShareBalance(slug);
    fetchSharePrice(slug);
    fetchProposals();
  }, [slug]);
  
  
  
  const fetchSharePrice = async (slug: any) => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    // @ts-ignore
    const addr = await window.ethereum.request({
      "method": "eth_accounts",
      "params": []
    });
    console.log(`${slug} slug is null or not`)
    // @ts-ignore
    const result = await window.ethereum.request({method: "eth_call", params: [{to: contractAddress, from: addr[0], data: interfaceABI.encodeFunctionData("getBuyPriceAfterFee", [slug, 1])}, "latest"]});
    
    
    console.log('Result of fetch share price', result);
    setShareBuyPrice(parseInt(result)/1e12);
  };

  const fetchShareBalance = async (slug: any) => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    // @ts-ignore
    const addr = await window.ethereum.request({
      "method": "eth_accounts",
      "params": []
    });
    // @ts-ignore
    const result = await window.ethereum.request({method: "eth_call", params: [{to: contractAddress, from: addr[0], data: interfaceABI.encodeFunctionData("sharesBalance", [slug, addr[0]])}, "latest"]});

    
    setKeyBalance(parseInt(result));
};
  const fetchProposals = async () => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    // @ts-ignore
    const addr = await window.ethereum.request({
      "method": "eth_accounts",
      "params": []
    });
    // @ts-ignore
    const result = await window.ethereum.request({method: "eth_call", params: [{to: contractAddress, from: addr[0], data: interfaceABI.encodeFunctionData("getProposals", [])}, "latest"]});
    const resultdecoded = interfaceABI.decodeFunctionResult("getProposals", result)
    const resultArray = Array.from(resultdecoded[0])
    const editedResultArray: any = []
    resultArray.forEach(array => {
      //@ts-ignore
      editedResultArray.push(Array.from(array))
    })
    //@ts-ignore
    const objectsArray = []
    //@ts-ignore
    editedResultArray.forEach(arrayed => {
      objectsArray.push({
        id: Number(arrayed[0]), // Convert BigInt to Number
        title: arrayed[1],
        description: arrayed[2],
        votesFor: Number(arrayed[3]), // Convert BigInt to Number
        votesAgainst: Number(arrayed[4]), // Convert BigInt to Number
        address: arrayed[5]
      })
    })
    //@ts-ignore
    console.log(objectsArray)
    //@ts-ignore
    setProposals(objectsArray)
  }


  const fetchBuySharePriceByAmount = async (
    amount: number
  ): Promise<string> => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    // @ts-ignore
    const addr = await window.ethereum.request({
      "method": "eth_accounts",
      "params": []
    });
    // @ts-ignore
    const result = await window.ethereum.request({method: "eth_call", params: [{to: contractAddress, from: addr[0], data: interfaceABI.encodeFunctionData("getBuyPriceAfterFee", [slug, amount])}, "latest"]});

    console.log('Price Result:', result);

    return result;
  };

  


  const handleBuyContractCall = async (amount: number) => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(`${amount} amount to buy`)
    const price = await fetchBuySharePriceByAmount(amount);
    console.log(`${price} price of buy key is `)
    // @ts-ignore
    const addr = await window.ethereum.request({
      "method": "eth_accounts",
      "params": []
    });
    // @ts-ignore
    const result = await window.ethereum.request({method: "eth_sendTransaction", params: [{to: contractAddress, from: addr[0], data: interfaceABI.encodeFunctionData("buyShares", [slug, amount]), value: price}, "latest"]});
    console.log('Result:', JSON.stringify(result))

    }
   
  

  const handleSellContractCall = async (amount: number) => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    // @ts-ignore
    const addr = await window.ethereum.request({
      "method": "eth_accounts",
      "params": []
    });
    // @ts-ignore
    const result = await window.ethereum.request({method: "eth_sendTransaction", params: [{to: contractAddress, from: addr[0], data: interfaceABI.encodeFunctionData("sellShares", [slug, amount])}, "latest"]});
    console.log('Result:', result);
  };

  const voteFor = async (proposalId: any) => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const signer = await getSigner()
    const friend = new ethers.Contract(contractAddress, contractABI, signer ? signer : undefined)
    const result = await friend.vote(proposalId, true)
    result.wait().then(async (receipt: any) => {
      if (receipt && receipt.status == 1) {
         fetchProposals()
      } else {
        console.log('buying failed!');
      }
   });

    console.log('Result:', result);
  }
  const voteAgainst = async (proposalId: any) => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const signer = await getSigner()
    const friend = new ethers.Contract(contractAddress, contractABI, signer ? signer : undefined)
    const result = await friend.vote(proposalId, false)
    result.wait().then(async (receipt: any) => {
      if (receipt && receipt.status == 1) {
         fetchProposals()
      } else {
        console.log('buying failed!');
      }
   });
    console.log('Result:', result);
  }

  
  const handleCreateProposal = async (_proposalTitle: any, _proposalDescription: any) => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const signer = await getSigner()
    const friend = new ethers.Contract(contractAddress, contractABI, signer ? signer : undefined)
    const result = await friend.createProposal(_proposalTitle, _proposalDescription, slug)

    console.log('Result:', result);
  }

  return (
    <body className="relative bg-yellow-50 overflow-hidden h-screen w-screen">
      <LeftMenu />
  
      <main className="ml-60 pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <h1 className="text-3xl font-bold mb-10">
                {truncateAddress(slug!)}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-stretch">
                  <div className="text-gray-400 text-xs">
                    Holders
                    <br />
                  </div>
                  <div className="h-100 border-l mx-4"></div>
                  <div className="flex flex-nowrap -space-x-3">
                  <div className="h-9 w-9">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://ui-avatars.com/api/?background=random&color=yellow&name=random"
                      />
                    </div>
                    <div className="h-9 w-9">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://ui-avatars.com/api/?background=random&color=yellow&name=random"
                      />
                    </div>
                    <div className="h-9 w-9">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://ui-avatars.com/api/?background=random&color=yellow&name=random"
                      />
                    </div>
                    <div className="h-9 w-9">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://ui-avatars.com/api/?background=random&color=yellow&name=random"
                      />
                    </div>
                    <div className="h-9 w-9">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://ui-avatars.com/api/?background=random&color=yellow&name=random"
                      />
                    </div>
                  </div>
                </div>
              
                <div className="flex flex-col items-center gap-x-2 gap-y-2 w-[400px]">
                <button
                    type="button"
                    className="w-[400px] inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                  >
                    buy price for 1 share: {shareBuyPrice / 1000000} ETH (inc.
                    all Fees)
                  </button>
                  <button
                    type="button"
                    className="w-[400px] inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                  >
                    you are holding : {keyBalance} keys
                  </button>
                </div>
              </div>
  
              <hr className="my-10" />
  
              <div className="grid grid-cols-2 gap-x-20">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Info</h2>
  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                    <div className="p-4 bg-yellow-50 rounded-xl">
                        <div className="font-bold text-xl text-gray-800 leading-none">
                          hello!
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Create Proposal</h2>
                        <form className="flex flex-col justify-between " action="">
                        <div className="mb-6">
                          <label
                            htmlFor="large-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Enter Proposal Title
                          </label>
                          <input
                            type="text"
                            id="large-input"
                            onChange={(e) => setProposalTitle(e.target.value)}
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                          />
                        </div>
                      </form>
                      <form className="flex flex-col justify-between " action="">
                        <div className="mb-6">
                          <label
                            htmlFor="large-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Enter Proposal Description
                          </label>
                          <input
                            type="text"
                            id="large-input"
                            onChange={(e) => setProposalDescription(e.target.value)}
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                          />
                          <button
                        type="button"
                        className="inline-flex items-center justify-center h-9 px-[50px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                        onClick={async () =>
                          await handleCreateProposal(proposalTitle, proposalDescription)}
                      >
                        Create Proposal
                      </button>
                        </div>
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Trade Keys</h2>
  
                  <form className="flex flex-col justify-between " action="">
                  <div className="mb-6">
                      <label
                        htmlFor="large-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Enter Amount
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        value={inputAmount}
                        onChange={(e) => setInputAmount(e.target.value)}
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                      />
                    </div>
                    <div className="flex flex-row justify-between">
                      <button
                        type="button"
                        onClick={async () =>
                          await handleBuyContractCall(parseInt(inputAmount))
                        }
                        className="inline-flex items-center justify-center h-9 px-[50px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                      >
                        BUY KEY
                      </button>

                      <button
                        type="button"
                        onClick={async () =>
                          await handleSellContractCall(parseInt(inputAmount))
                        }
                        className="inline-flex items-center justify-center h-9 px-[50px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                      >
                        SELL KEY
                      </button>
                    </div>
                  </form>
  
                  <div className="pt-10">
                    <h2 className="text-2xl font-bold mb-4">Content Proposals</h2>
                    <div className="proposals-list" style={{
                                maxHeight: '300px', // Adjust the height as needed
                                overflowY: 'auto', // Enables vertical scrolling
                                padding: '10px', // Optional, for inner spacing
                                border: '1px solid', // Optional, to visually define the area
                                borderRadius: '5px', // Optional, for rounded corners
                              }}>
                                   {/* @ts-ignore */}
                      {proposals.sort((a, b) => b.id - a.id).map((proposal) => (   
                        //@ts-ignore                     
                        <div key={proposal.id} className="proposal mb-4">
                          {/* @ts-ignore */}
                        <h3 className="text-xl">{proposal.title}</h3>
                        {/* @ts-ignore */}
                        <p>{proposal.description}</p>
                        {/* @ts-ignore */}
                        <div>Votes For: {proposal.votesFor}</div>
                        {/* @ts-ignore */}
                        <div>Votes Against: {proposal.votesAgainst}</div>
                        {/* @ts-ignore */}
                        <button className="inline-flex items-center justify-center h-9 px-[20px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition" onClick={async () => await voteFor(proposal.id)}>For</button>
                        {/* @ts-ignore */}
                        <button className="inline-flex items-center justify-center h-9 px-[20px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition" onClick={async () => await voteAgainst(proposal.id)}>Against</button>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
  
};

export default Profile;
