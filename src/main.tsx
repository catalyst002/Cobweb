import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Chats from './pages/Chats';
import Login from './pages/Login';
import BuyFirstKey from './pages/BuyFirstKey';
import ChatRoomUI from './pages/ChatRoomUI';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buy-first-key" element={<BuyFirstKey />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/chats" element={<Chats />} />
        <Route path="/chatRoom" element={<ChatRoomUI />} />
        <Route path="/profile/:slug" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
