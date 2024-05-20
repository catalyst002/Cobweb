import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftMenu from '@/components/leftMenu';
import useConnect from '@/lib/hooks/useConnect';

interface ChatRoom {
  roomId: string;
  hasAccess?: boolean;
}

const Explore: FC = () => {
  const { supabase, address, checkIsKeyHolder } = useConnect();
  const navigate = useNavigate();
  const [friends, setFriends] = useState<ChatRoom[]>([]);
  const [subjects, setSubjects] = useState<ChatRoom[]>([]);
  const [activeTab, setActiveTab] = useState<'friends' | 'global'>('friends');

  useEffect(() => {
    const getAllFriends = async () => {
      const { data, error, status } = await supabase.from('subjects').select();

      if (status === 200 && data) {
        const result = await Promise.all(
          data.map(async (chatRoom) => ({
            ...chatRoom,
            hasAccess: await checkIsKeyHolder(chatRoom.roomId),
          }))
        );
        setFriends(result);
      } else {
        console.error('Error fetching friends:', error);
      }
    };

    const getAllSubjects = async () => {
      const { data, error, status } = await supabase.from('subjects').select();
      if (status === 200 && data) {
        setSubjects(data);
      } else {
        console.error('Error fetching subjects:', error);
      }
    };

    getAllFriends();
    getAllSubjects();
  }, [supabase, checkIsKeyHolder]);

  const handleChatRoomClick = (roomId: string, isProfile: boolean = false) => {
    const path = isProfile ? `/profile/${roomId}` : `/chatRoom?name=${roomId}`;
    navigate(path);
  };

  const Tab: FC<{
    id: 'friends' | 'global';
    activeTab: 'friends' | 'global';
    setActiveTab: (id: 'friends' | 'global') => void;
    children: React.ReactNode;
  }> = ({ id, activeTab, setActiveTab, children }) => (
    <li
      className={`cursor-pointer px-4 py-2 text-sm font-medium text-center ${
        activeTab === id
          ? 'border-b-2 border-yellow-500 text-yellow-600'
          : 'text-gray-500 hover:text-gray-600'
      }`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </li>
  );

  return (
    <div className="relative bg-yellow-50 overflow-hidden h-screen w-screen">
      <LeftMenu />
      <main className="ml-60 pt-16 h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <h1 className="text-3xl font-bold mb-10">Find friends</h1>
              <hr className="my-10" />
              <div className="w-full mx-auto">
                <ul className="flex border-b">
                  <Tab id="friends" activeTab={activeTab} setActiveTab={setActiveTab}>
                    Your Friends
                  </Tab>
                  <Tab id="global" activeTab={activeTab} setActiveTab={setActiveTab}>
                    Global
                  </Tab>
                </ul>
                <div className="p-4 pt-10">
                  {activeTab === 'friends' ? (
                    <div className="gap-x-20">
                      <div>
                        {friends.map(
                          (chatRoom) =>
                            chatRoom.hasAccess && (
                              <div
                                key={chatRoom.roomId}
                                onClick={() => handleChatRoomClick(chatRoom.roomId)}
                                className="flex items-center justify-between border-b pb-5 mb-10 cursor-pointer"
                              >
                                <div className="text-lg font-bold">{chatRoom.roomId}</div>
                                <div className="flex items-center gap-x-2">
                                  <button
                                    type="button"
                                    className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      className="bi bi-chat-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="gap-x-20">
                      <div>
                        {subjects.map((chatRoom) => (
                          <div
                            key={chatRoom.roomId}
                            onClick={() => handleChatRoomClick(chatRoom.roomId, true)}
                            className="flex items-center justify-between border-b pb-5 mb-10 cursor-pointer"
                          >
                            <div className="text-lg font-bold">{chatRoom.roomId}</div>
                            <div className="flex items-center gap-x-2">
                              <button
                                type="button"
                                className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  className="bi bi-chat-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
