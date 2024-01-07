import React from "react";
import { useOutletContext } from "react-router-dom";

const ViewEmails = () => {
  const { openDrawer } = useOutletContext();
  return (
    <div
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      hello from view emails
    </div>
  );
};

export default ViewEmails;
