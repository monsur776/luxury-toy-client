import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Category = () => {
   return (
      <div>
         <Tabs>
            <TabList>
               <Tab>Title 1</Tab>
               <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
               <h3>hello</h3>
            </TabPanel>
            <TabPanel>
               <h2>Any content 2</h2>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default Category;
