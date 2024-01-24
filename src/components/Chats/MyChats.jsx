import React, { useEffect, useState } from 'react';
import { ChatState } from '../../context/ChatProvider';
import { getAllChats } from '../../api/Chat';
import { useAuth } from '../../context/AuthProvider';
import Loading from '../Loading/Loading';
import { getSender } from './ChatLogic';

const MyChats = () => {
  const {user}=useAuth()
  const [loading, setLoading]=useState(false)
    const { setSelectedChat,selectedChat, notification, setNotification, chats, setChats } =ChatState();

    const fetchChats = async () => {
        console.log('chats',chats);
        try {
          const response = await getAllChats();
          console.log('chats', response)
          setChats(response);
        } catch (error) {
            toast.error("Error occured", {
                position: "bottom-left",
              });
        }
      };
      useEffect(()=>{
        // setLoggedUser(JSON.parse(localStorage.getItem('token')))
        fetchChats()
      },[])
    return (
        <div className={`flex flex-col items-center p-3 bg-white w-full h-full md:w-1/3 border-1 border-gray-300 rounded-lg`}>
        <div className="flex justify-between items-center pb-3 px-3 font-medium text-xl w-full">
          My Chats
        </div>
        <div className="flex flex-col py-10 px-5 bg-gray-200 w-full h-full rounded-lg ">
          {chats ? (
            <div className="">
              {chats.map((chat) => (
                <div
                  onClick={() => setSelectedChat(chat)}
                  className={`cursor-pointer bg-${selectedChat === chat ? "teal-500" : "gray-300"} hover:bg-teal-500 hover:text-white px-3 py-2 mb-2 rounded-lg`}
                  key={chat._id}
                >
                   <p className="text-sm font-semibold">
                   {chat.isGroupChat ? chat.chatName : (chat.users[0]?._id === user?._id ? chat.users[1].username : chat.users[0].username)}
                </p>
                {console.log('chat is groupd',user)}
                  {chat.latestMessage && (
                    <p className="text-xs">
                      <b>{chat.latestMessage.sender.username} : </b>
                      {chat.latestMessage.content.length > 50
                        ? chat.latestMessage.content.substring(0, 51) + "..."
                        : chat.latestMessage.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
};

export default MyChats;