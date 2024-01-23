import React, { useEffect, useState } from 'react';
import { ChatState } from '../../context/ChatProvider';
import { getAllChats } from '../../api/Chat';

const MyChats = () => {
    const [loggedUser, setLoggedUser]=useState();
    const { setSelectedChat, notification, setNotification, chats, setChats } =ChatState();

    const fetchChats = async () => {
        // console.log(user._id);
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
        <div>
            <h3>THis is my Chat</h3>
        </div>
    );
};

export default MyChats;