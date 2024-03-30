import useConnect from '@/lib/hooks/useConnect';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from "ethers";
import KeyImage from '../../assets/key.png'



const BuyFirstKey = () => {
  const navigate = useNavigate();
  

  // Create a single supabase client for interacting with your database

  const { contractAddress, supabase, getSigner, address, contractABI} =
    useConnect();

  const [response, setResponse] = useState(null);

  const saveSubjectToDB = async (addr: any) => {
    const { error } = await supabase
      .from('subjects')
      .insert({ roomId: addr });
  };
 

  
  const buyKey = async () => {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
     //@ts-ignore
     const addr = await window.ethereum.request({
      "method": "eth_accounts",
      "params": []
    });
    const friend = new ethers.Contract(contractAddress, contractABI, await getSigner() ? await getSigner() : undefined)
    const result = await friend.buyShares(addr[0], 1, {
        value: 0, gasLimit: 250000
        })

    console.log('Result:', result);
    result.wait().then(async (receipt: any) => {
          // console.log(receipt);
          if (receipt && receipt.status == 1) {
            saveSubjectToDB(addr[0]);
            navigate(`/profile/${addr[0]}`);
          } else {
            console.log('buying failed!');
          }
       });
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white w-screen">
      <div className="text-center">
        <div className="mb-0">
          <div className="px-4 py-4 text-center flex flex-row items-center justify-center gap-2">
            <img src={KeyImage} alt="" width={200} />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6">Buy your first key</h1>

        <p className="text-gray-600 text-lg mb-8 w-[700px]">
          Everyone in Cobweb has a chat unlocked by their keys.These keys
          can be bought and sold on a person's profile and their price goes up
          and down based on how many are circulating.
        </p>

        <p className="text-gray-600 text-lg mb-8 w-[700px]">
          You'll earn trading fee everytime your keys are bought and sold by
          anyone
        </p>

        <p className="text-gray-600 text-lg mb-8 w-[700px]">
          To create your profile, buy the first key to buy your own room for
          free!
        </p>
        <button
          onClick={async () => {

              
              buyKey();
          }}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mb-4 hover:bg-yellow-600"
        >
          {'Buy Key for $0'}
        </button>
      </div>
    </div>
  );
};

export default BuyFirstKey;
