import React, { useEffect, useState } from 'react';
import { getAllAnnouncement, getAllAnnouncementById,  } from '../../../../api/Announcement';
import { TfiAnnouncement } from "react-icons/tfi";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const fetchAllData = async () => {
    try {
      const response = await getAllAnnouncement();
      console.log("announcement ", response);
      setAnnouncements(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchAnnouncementDetails = async (id) => {
    try {
      const response = await getAllAnnouncementById(id);
      console.log("announcement details ", response);
      setSelectedAnnouncement(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleAnnouncementClick = (id) => {
    fetchAnnouncementDetails(id);
  };

  return (
    <div>
        <h2 className="text-center text-2xl font-bold mt-8 flex justify-center items-center">
            <TfiAnnouncement className="mr-1" /> Announcements
          </h2>
          <hr className='border-t-2 border-orange-300 my-2 mx-auto w-16' />
      <div className="flex ">
        <div className="w-1/2 overflow-y-auto">
          
          {announcements.map((announcement) => (
           <div
           key={announcement._id}
           className={`w-full bg-black border-orange-400 rounded p-5 text-white my-8 cursor-pointer ${
             selectedAnnouncement && selectedAnnouncement._id === announcement._id
               ? 'border-4 border-orange-500'  // Add left border for the selected announcement
               : ''
           }`}
           onClick={() => handleAnnouncementClick(announcement._id)}
         >
              <TfiAnnouncement className='text-orange-500'  /> 
              <h3 className='text-2xl font-medium'>{announcement.title}</h3>
              <p className='text-blue-600'><small>{new Date(announcement.createdAt).toLocaleString()}</small></p>
              <p>{announcement.content.slice(0, 50)}...</p>
            </div>
          ))}
        </div>
        <div className="w-1/2 overflow-y-auto ml-10">
          {selectedAnnouncement && (
            <div className="w-full bg-black border-2-blue rounded p-5 text-white my-8">
              <h3 className='text-2xl font-medium'>{selectedAnnouncement.title}</h3>
              <p className='text-blue-600'><small>{new Date(selectedAnnouncement.createdAt).toLocaleString()}</small></p>
              <p>{selectedAnnouncement.content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
