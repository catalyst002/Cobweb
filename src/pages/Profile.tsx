import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ethers, Result } from 'ethers';
import LeftMenu from '@/components/leftMenu';
import useConnect from '@/lib/hooks/useConnect';
import { truncateAddress } from '@/lib/utils';

// @ts-ignore
BigInt.prototype.toJSON = function () {};

const Profile: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const {
    connect,
    getSigner,
    contractAddress,
    contractABI,
    address,
    isConnected,
  } = useConnect();

  const [inputAmount, setInputAmount] = useState('');
  const [shareBuyPrice, setShareBuyPrice] = useState(0);
  const [keyBalance, setKeyBalance] = useState(0);
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [proposals, setProposals] = useState<any[]>([]);

  const interfaceABI = new ethers.Interface(contractABI);

  useEffect(() => {
    fetchShareBalance(slug);
    fetchSharePrice(slug);
    fetchProposals();
  }, [slug]);

  const fetchSharePrice = async (slug: any) => {
    // @ts-ignore
    const addr = await window.ethereum.request({
      method: 'eth_accounts',
      params: [],
    });

    // @ts-ignore
    const result = await window.ethereum.request({
      method: 'eth_call',
      params: [
        {
          to: contractAddress,
          from: addr[0],
          data: interfaceABI.encodeFunctionData('getBuyPriceAfterFee', [slug, 1]),
        },
        'latest',
      ],
    });

    console.log('Result of fetch share price', result);
    setShareBuyPrice(parseInt(result) / 1e12);
  };

  const fetchShareBalance = async (slug: any) => {
    // @ts-ignore
    const addr = await window.ethereum.request({
      method: 'eth_accounts',
      params: [],
    });

    // @ts-ignore
    const result = await window.ethereum.request({
      method: 'eth_call',
      params: [
        {
          to: contractAddress,
          from: addr[0],
          data: interfaceABI.encodeFunctionData('sharesBalance', [slug, addr[0]]),
        },
        'latest',
      ],
    });

    setKeyBalance(parseInt(result));
  };

  const fetchProposals = async () => {
    // @ts-ignore
    const addr = await window.ethereum.request({
      method: 'eth_accounts',
      params: [],
    });

    // @ts-ignore
    const result = await window.ethereum.request({
      method: 'eth_call',
      params: [
        {
          to: contractAddress,
          from: addr[0],
          data: interfaceABI.encodeFunctionData('getProposals', []),
        },
        'latest',
      ],
    });

    const decodedResult = interfaceABI.decodeFunctionResult('getProposals', result);
    const resultArray = Array.from(decodedResult[0]);

    const proposals = resultArray.map((proposal: any) => ({
      id: Number(proposal[0]),
      title: proposal[1],
      description: proposal[2],
      votesFor: Number(proposal[3]),
      votesAgainst: Number(proposal[4]),
      address: proposal[5],
    }));

    setProposals(proposals);
  };

  const fetchBuySharePriceByAmount = async (amount: number): Promise<string> => {
    // @ts-ignore
    const addr = await window.ethereum.request({
      method: 'eth_accounts',
      params: [],
    });

    // @ts-ignore
    const result = await window.ethereum.request({
      method: 'eth_call',
      params: [
        {
          to: contractAddress,
          from: addr[0],
          data: interfaceABI.encodeFunctionData('getBuyPriceAfterFee', [slug, amount]),
        },
        'latest',
      ],
    });

    console.log('Price Result:', result);
    return result;
  };

  const handleBuyContractCall = async (amount: number) => {
    const price = await fetchBuySharePriceByAmount(amount);

    // @ts-ignore
    const addr = await window.ethereum.request({
      method: 'eth_accounts',
      params: [],
    });

    // @ts-ignore
    const result = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          to: contractAddress,
          from: addr[0],
          data: interfaceABI.encodeFunctionData('buyShares', [slug, amount]),
          value: price,
        },
        'latest',
      ],
    });

    console.log('Result:', JSON.stringify(result));
  };

  const handleSellContractCall = async (amount: number) => {
    // @ts-ignore
    const addr = await window.ethereum.request({
      method: 'eth_accounts',
      params: [],
    });

    // @ts-ignore
    const result = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          to: contractAddress,
          from: addr[0],
          data: interfaceABI.encodeFunctionData('sellShares', [slug, amount]),
        },
        'latest',
      ],
    });

    console.log('Result:', result);
  };

  const voteFor = async (proposalId: number) => {
    const signer = await getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const result = await contract.vote(proposalId, true);
    await result.wait();

    fetchProposals();
  };

  const voteAgainst = async (proposalId: number) => {
    const signer = await getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const result = await contract.vote(proposalId, false);
    await result.wait();

    fetchProposals();
  };

  const handleCreateProposal = async (title: string, description: string) => {
    const signer = await getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const result = await contract.createProposal(title, description, slug);
    console.log('Result:', result);
  };

  return (
    <div className="relative bg-yellow-50 overflow-hidden h-screen w-screen">
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
                  </div>
                  <div className="h-100 border-l mx-4"></div>
                  <div className="flex flex-nowrap -space-x-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-9 w-9">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={`https://ui-avatars.com/api/?background=random&color=yellow&name=random${i}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-x-2 gap-y-2 w-[400px]">
                  <button
                    type="button"
                    className="w-[400px] inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                  >
                    Buy price for 1 share: {shareBuyPrice / 1000000} ETH (inc.
                    all Fees)
                  </button>
                  <button
                    type="button"
                    className="w-[400px] inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                  >
                    You are holding: {keyBalance} keys
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
                          Hello!
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Create Proposal</h2>
                        <form className="flex flex-col justify-between" onSubmit={(e) => e.preventDefault()}>
                          <div className="mb-6">
                            <label htmlFor="title-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Enter Proposal Title
                            </label>
                            <input
                              type="text"
                              id="title-input"
                              onChange={(e) => setProposalTitle(e.target.value)}
                              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                            />
                          </div>
                          <div className="mb-6">
                            <label htmlFor="description-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Enter Proposal Description
                            </label>
                            <input
                              type="text"
                              id="description-input"
                              onChange={(e) => setProposalDescription(e.target.value)}
                              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                            />
                          </div>
                          <button
                            type="button"
                            className="inline-flex items-center justify-center h-9 px-[50px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                            onClick={async () => await handleCreateProposal(proposalTitle, proposalDescription)}
                          >
                            Create Proposal
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Trade Keys</h2>
                  <form className="flex flex-col justify-between" onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-6">
                      <label htmlFor="amount-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Enter Amount
                      </label>
                      <input
                        type="text"
                        id="amount-input"
                        value={inputAmount}
                        onChange={(e) => setInputAmount(e.target.value)}
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                      />
                    </div>
                    <div className="flex flex-row justify-between">
                      <button
                        type="button"
                        onClick={async () => await handleBuyContractCall(parseInt(inputAmount))}
                        className="inline-flex items-center justify-center h-9 px-[50px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                      >
                        BUY KEY
                      </button>
                      <button
                        type="button"
                        onClick={async () => await handleSellContractCall(parseInt(inputAmount))}
                        className="inline-flex items-center justify-center h-9 px-[50px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                      >
                        SELL KEY
                      </button>
                    </div>
                  </form>
                  <div className="pt-10">
                    <h2 className="text-2xl font-bold mb-4">Content Proposals</h2>
                    <div
                      className="proposals-list"
                      style={{
                        maxHeight: '300px',
                        overflowY: 'auto',
                        padding: '10px',
                        border: '1px solid',
                        borderRadius: '5px',
                      }}
                    >
                      {proposals.sort((a, b) => b.id - a.id).map((proposal) => (
                        <div key={proposal.id} className="proposal mb-4">
                          <h3 className="text-xl">{proposal.title}</h3>
                          <p>{proposal.description}</p>
                          <div>Votes For: {proposal.votesFor}</div>
                          <div>Votes Against: {proposal.votesAgainst}</div>
                          <button
                            className="inline-flex items-center justify-center h-9 px-[20px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                            onClick={async () => await voteFor(proposal.id)}
                          >
                            For
                          </button>
                          <button
                            className="inline-flex items-center justify-center h-9 px-[20px] rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                            onClick={async () => await voteAgainst(proposal.id)}
                          >
                            Against
                          </button>
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
    </div>
  );
};

export default Profile;
