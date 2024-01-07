import React, { Suspense, useState } from "react";
import { Header, Sidebar, Emails } from "../components";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <Suspense fallback={<SuspenseLoader />}>
        <Outlet context={{ openDrawer }} />
      </Suspense>
    </>
  );
};

export default Main;
