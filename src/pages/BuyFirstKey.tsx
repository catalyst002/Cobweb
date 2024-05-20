import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import useConnect from '@/lib/hooks/useConnect';
import KeyImage from '../../assets/key.png';

const BuyFirstKey = () => {
  const navigate = useNavigate();
  const { contractAddress, supabase, getSigner, contractABI } = useConnect();
  const [response, setResponse] = useState<string | null>(null);

  const saveSubjectToDB = async (addr: string) => {
    const { error } = await supabase.from('subjects').insert({ roomId: addr });
    if (error) {
      console.error('Error inserting to DB:', error);
    }
  };

  const buyKey = async () => {
    try {
      // Request accounts from Ethereum provider
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const addr = await ethereum.request({ method: 'eth_accounts' });
      
      // Initialize contract
      const signer = await getSigner();
      if (!signer) {
        throw new Error('No signer found');
      }

      const friend = new ethers.Contract(contractAddress, contractABI, signer);
      const result = await friend.buyShares(addr[0], 1, { value: 0, gasLimit: 250000 });

      console.log('Result:', result);
      const receipt = await result.wait();
      if (receipt.status === 1) {
        await saveSubjectToDB(addr[0]);
        navigate(`/profile/${addr[0]}`);
      } else {
        console.log('Buying failed!');
      }
    } catch (error) {
      console.error('Error buying key:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white w-screen">
      <div className="text-center">
        <div className="mb-0">
          <div className="px-4 py-4 text-center flex flex-row items-center justify-center gap-2">
            <img src={KeyImage} alt="Key" width={200} />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6">Buy your first key</h1>
        <p className="text-gray-600 text-lg mb-8 w-[700px]">
          Everyone in Cobweb has a chat unlocked by their keys. These keys can be bought and sold on a person's profile, and their price goes up and down based on how many are circulating.
        </p>
        <p className="text-gray-600 text-lg mb-8 w-[700px]">
          You'll earn a trading fee every time your keys are bought and sold by anyone.
        </p>
        <p className="text-gray-600 text-lg mb-8 w-[700px]">
          To create your profile, buy the first key to get your own room for free!
        </p>
        <button
          onClick={buyKey}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mb-4 hover:bg-yellow-600"
        >
          Buy Key for $0
        </button>
      </div>
    </div>
  );
};

export default BuyFirstKey;
