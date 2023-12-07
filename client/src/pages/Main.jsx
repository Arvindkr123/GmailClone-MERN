import React, { useState } from "react";
import { Header, Sidebar } from "../components";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar  openDrawer={openDrawer}  />
      <div>Display here emails</div>
    </div>
  );
};

export default Main;
