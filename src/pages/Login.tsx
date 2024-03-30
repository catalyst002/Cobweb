import logo from '@/components/svglogo.svg';
import useConnect from '@/lib/hooks/useConnect';
import { ethers } from 'ethers';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';




const LoginPage = () => {
  const navigate = useNavigate();
  const { connect, isConnected, checkIsKeyHolder, address} = useConnect();
  useEffect(() => {
    
    const checkConnection = async () => {
      //@ts-ignore
      const addr = await window.ethereum.request({
        "method": "eth_accounts",
        "params": []
      });
      if (isConnected && !(await checkIsKeyHolder(addr[0]))) {
        navigate(`/buy-first-key`);
      } else if(isConnected) {
        navigate(`/profile/${address}`)
      }
    };
    checkConnection();
    }, [isConnected]);
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white w-screen">
      <div className="text-center">
        <div className="mb-4">
          <div className="px-4 py-6 text-center flex flex-row items-center justify-center gap-2">
            <img src={logo} alt="" width={70}  height={70}/>
            <h1 className="text-3xl font-normal leading-none">
              <span className="text-yellow-500 text-5xl">Cobweb</span>
              <span className=" text-5xl">.social</span>
            </h1>
          </div>
        </div>

        <p className="text-gray-600 mb-28">The marketplace for your friends</p>
        <button
          onClick={connect}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mb-4 hover:bg-yellow-600"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
