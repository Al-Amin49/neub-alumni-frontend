import { PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CareerDevelopmentPDF from "./PDF/CarrerDevelopment";
import EntrepreneurshipPDF from "./PDF/Enterprenurship";
import AlgorithmDesignPDF from "./PDF/AlgorithmDesign";
import SystemDesignPDF from "./PDF/SystemDesign";

const Library = () => {
    const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const renderSelectedPDF = () => {
    switch (selectedTab) {
      case 0:
        return <CareerDevelopmentPDF/>;
      case 1:
        return <EntrepreneurshipPDF />;
      case 2:
        return <AlgorithmDesignPDF />;
      case 3:
        return <SystemDesignPDF />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect} className='pt-10'>
        <TabList className="flex justify-evenly items-center py-2">
          <Tab className="font-medium  border-2 border-orange-500 rounded-full bg-blue-500 text-white p-2">
            Career Development
          </Tab>
          <Tab className="font-medium border-2 border-orange-500 rounded-full bg-blue-500 text-white p-2">
            Entrepreneurship
          </Tab>
          <Tab className="font-medium border-2 border-orange-500 rounded-full bg-blue-500 text-white p-2">
            Algorithm Design and Analyis
          </Tab>
          <Tab className="font-medium border-2 border-orange-500 rounded-full bg-blue-500 text-white p-2">
            System Design
          </Tab>
        </TabList>

        <div className="flex flex-col justify-center items-center pt-10">
          <TabPanel>
          <PDFViewer width="600" height="800">
            {renderSelectedPDF()}
          </PDFViewer>
        </TabPanel>
          <TabPanel>
          <PDFViewer width="600" height="800">
            {renderSelectedPDF()}
          </PDFViewer>
        </TabPanel>
          <TabPanel>
          <PDFViewer width="600" height="800">
            {renderSelectedPDF()}
          </PDFViewer>
        </TabPanel>
          <TabPanel>
          <PDFViewer width="600" height="800">
            {renderSelectedPDF()}
          </PDFViewer>
        </TabPanel>
          

         
          
          
        </div>
      </Tabs>
    </div>
  );
};

export default Library;
