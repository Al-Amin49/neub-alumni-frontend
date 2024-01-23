import React, { useState } from 'react';
import SideDrawer from '../../components/Chats/SideDrawer';
import MyChats from '../../components/Chats/MyChats';
import ChatBox from '../../components/Chats/ChatBox';

const Chat = () => {
 
    return (
        <div className='w-full'> 
           <SideDrawer/>
           <div className='flex justify-between w-full p-10'>
           <MyChats/>
           <ChatBox/>
           </div>
        </div>
    );
};

export default Chat;