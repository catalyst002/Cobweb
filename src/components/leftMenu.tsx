import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import logo from './svglogo.svg';
import ConnectWallet from './connectWallet';
import useConnect from '@/lib/hooks/useConnect';
import ChatsImage from '../../assets/chats.png'
import SearchImage from '../../assets/search.png'
import ProfileImage from '../../assets/profile.png'



// eslint-disable-next-line @typescript-eslint/no-explicit-any

const LeftMenu = () => {
  const { address } = useConnect();
  const { slug } = useParams();
  const getNavLinkClass = ({ isActive }: any) => {
    return isActive
      ? 'flex items-center gap-5 bg-yellow-500 rounded-xl font-bold text-md text-white py-3 px-4'
      : 'flex items-center gap-5 bg-white hover:bg-yellow-50 rounded-xl font-bold text-md text-gray-900 py-3 px-4';
  };
  

  return (
    <aside className="fixed inset-y-0 left-0 bg-white shadow-md w-80 h-screen">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="px-4 py-6 text-center border-b flex flex-row items-center justify-center gap-2">
            <img src={logo} alt="" width={30} height={30} />
            <h1 className="text-xl font-normal leading-none">
              <span className="text-yellow-500">Cobweb</span>.social
            </h1>
          </div>
          <div className="p-4">
            <ul className="space-y-5">
              {/* <li>
                <NavLink to={'/home'} className={getNavLinkClass}>
                  <img src="../assets/home.png" alt="" width={50} />
                  Home
                </NavLink>
              </li> */}
              <li>
                <NavLink to={'/chats'} className={getNavLinkClass}>
                  <img src={ChatsImage} alt="" width={50} />
                  Chats
                </NavLink>
              </li>
              <li>
                <NavLink to={'/explore'} className={getNavLinkClass}>
                  <img src={SearchImage} alt="" width={50} />
                  Explore
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/profile/${address}`}
                  className={getNavLinkClass}
                >
                  <img src={ProfileImage} alt="" width={50} />
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-10 pb-25">
          <ConnectWallet />
        </div>
      </div>
    </aside>
  );
};

export default LeftMenu;
