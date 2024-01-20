
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CareerDevelopmentPDF from "./PDF/CarrerDevelopment";
import EntrepreneurshipPDF from "./PDF/Enterprenurship";
import AlgorithmDesignPDF from "./PDF/AlgorithmDesign";
import SystemDesignPDF from "./PDF/SystemDesign";
import { getAllResource } from "../../api/LibraryResource";

const Library = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await getAllResource();
        console.log('response', response)
        setResources(response.data || []);
      } catch (error) {
        console.error("Error fetching resources", error);
      }
    };

    fetchResources();
  }, []);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };
  return (
    <div>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect} className='pt-10'>
      <TabList className="flex justify-evenly items-center py-2">
          <Tab
            className={`font-medium border-2 border-orange-500 rounded-full bg-blue-500 text-white p-2 ${
              selectedTab === 0 ? "bg-green-500" : "" // Change the background color for the selected tab
            }`}
          >
            Career Development
          </Tab>
          <Tab
            className={`font-medium border-2 border-orange-500 rounded-full bg-blue-500 text-white p-2 ${
              selectedTab === 1 ? "bg-green-500" : ""
            }`}
          >
            Entrepreneurship
          </Tab>
          <Tab
            className={`font-medium border-2 border-orange-500 rounded-full bg-blue-500 text-white p-2 ${
              selectedTab === 2 ? "bg-green-500" : ""
            }`}
          >
            Algorithm Design
          </Tab>
          <Tab
            className={`font-medium border-2 border-orange-500 rounded-full bg-blue-500 text-white p-2 ${
              selectedTab === 3 ? "bg-green-500" : ""
            }`}
          >
            System Design
          </Tab>
        </TabList>

        <div className="flex flex-col justify-center items-center pt-10">
          <TabPanel>
      
              <CareerDevelopmentPDF resources={resources} />
            
          </TabPanel>
          <TabPanel>
          
              <EntrepreneurshipPDF resources={resources} />
           
          </TabPanel>
          <TabPanel>
           
              <AlgorithmDesignPDF resources={resources} />
           
          </TabPanel>
          <TabPanel>
           
              <SystemDesignPDF resources={resources} />
            
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Library;
