import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { createWeb3Modal, defaultConfig, useDisconnect, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';

const useConnect = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState("0");

  // Supabase instance
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhwcmx6bmV6aHh4d2dqYnR6b2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1Mjk3NjEsImV4cCI6MjAyNjEwNTc2MX0.DGQXFFdlCJxbJxRFpy3QULnWiaYMayPp5Cjy65GmDI4";
  const supabase = createClient("https://hprlznezhxxwgjbtzoby.supabase.co", supabaseAnonKey);

  const contractAddress = '0xe3502f370a09876B41687f6a0E61a695d4b97123';
  const contractABI = [
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'event Trade(address indexed trader, address indexed subject, bool isBuy, uint256 shareAmount, uint256 ethAmount, uint256 protocolEthAmount, uint256 subjectEthAmount, uint256 supply)',
    'function buyShares(address sharesSubject, uint256 amount) payable',
    'function getBuyPrice(address sharesSubject, uint256 amount) external view returns (uint256)',
    'function getBuyPriceAfterFee(address sharesSubject, uint256 amount) external view returns (uint256)',
    'function getPrice(uint256 supply, uint256 amount) external pure returns (uint256)',
    'function getSellPrice(address sharesSubject, uint256 amount) external view returns (uint256)',
    'function getSellPriceAfterFee(address sharesSubject, uint256 amount) external view returns (uint256)',
    'function owner() external view returns (address)',
    'function protocolFeeDestination() external view returns (address)',
    'function protocolFeePercent() external view returns (uint256)',
    'function renounceOwnership() external',
    'function sellShares(address sharesSubject, uint256 amount) payable',
    'function setFeeDestination(address _feeDestination) external',
    'function setProtocolFeePercent(uint256 _feePercent) external',
    'function setSubjectFeePercent(uint256 _feePercent) external',
    'function sharesBalance(address, address) external view returns (uint256)',
    'function sharesSupply(address) external view returns (uint256)',
    'function subjectFeePercent() external view returns (uint256)',
    'function transferOwnership(address) external',
    'function isHolder(address, address) external view returns (bool)',
    'function getProposals() external view returns (tuple(uint, string, string, uint, uint, address)[])',
    'function vote(uint, bool) external',
    'function createProposal(string, string, address) public'
  ];

  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const { disconnect } = useDisconnect();

  // Project and chain configuration
  const projectId = 'd6873b1f678ae8f16024db137ef8fe26';
  const botanix = {
    chainId: 3636,
    name: 'Botanix',
    currency: 'BTC',
    explorerUrl: 'https://blockscout.botanixlabs.dev/',
    rpcUrl: 'https://node.botanixlabs.dev'
  };
  const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com',
    icons: ['https://avatars.mywebsite.com/']
  };
  const ethersConfig = defaultConfig({
    metadata,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
  });

  // Initialize Web3Modal
  createWeb3Modal({
    ethersConfig,
    chains: [botanix],
    projectId,
    enableAnalytics: true
  });

  useEffect(() => {
    fetchBalance();
  }, []);

  const connect = () => {
    const { open } = useWeb3Modal();
    open();
  };

  const getSigner = async () => {
    if (!walletProvider) return null;
    const ethersProvider = new ethers.BrowserProvider(walletProvider);
    return await ethersProvider.getSigner();
  };

  const getProvider = async () => {
    if (!walletProvider) return null;
    return new ethers.BrowserProvider(walletProvider);
  };

  const fetchBalance = async () => {
    try {
      if (!window.ethereum) return;
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
      setBalance(balance);
      console.log('Fetched balance:', balance.toString());
    } catch (error) {
      console.error('Failed to fetch balance:', error);
    }
  };

  const checkIsKeyHolder = async (subject) => {
    try {
      if (!window.ethereum) return false;
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = await getProvider();
      const contract = new ethers.Contract(contractAddress, contractABI, provider);
      const isHolder = await contract.isHolder(subject, accounts[0]);
      return isHolder > 0;
    } catch (error) {
      console.error('Failed to check key holder:', error);
      return false;
    }
  };

  return { connect, getProvider, getSigner, balance, address, contractAddress, contractABI, supabase, fetchBalance, checkIsKeyHolder, isConnected, disconnect };
};

export default useConnect;
