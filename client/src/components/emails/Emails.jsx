import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { API_URLS } from "../../services/api.urls";


const Emails = () => {
  const { openDrawer } = useOutletContext();
  const { type } = useParams();

  const getEmailService = useApi(API_URLS.getEmailsFromType);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type]);

  return (
    <div
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      hello from email
    </div>
  );
};

export default Emails;
