import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { API_URLS } from "../../services/api.urls";
import { Box, Checkbox, List } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";
import NoEmails from "../common/NoEmails";
import { EMPTY_TABS } from "../../constants/constant";

const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const { openDrawer } = useOutletContext();
  const { type } = useParams();

  const getEmailService = useApi(API_URLS.getEmailsFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteEmailsService = useApi(API_URLS.deleteEmails);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type, refreshScreen]);

  const selectedEmailHandler = (e) => {
    if (e.target.checked) {
      let emails = getEmailService?.response?.map((email) => email?._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = (e) => {
    // console.log("selected all emails", selectedEmails);
    if (type === "bin") {
      deleteEmailsService.call(selectedEmails);
    } else {
      moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScreen(!refreshScreen);
  };

  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100%-250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          display: "flex",
          padding: "20px 10px  0 10px",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e) => selectedEmailHandler(e)} />
        <DeleteOutline onClick={() => deleteSelectedEmails()} />
      </Box>
      {/*======== [-][-] Emails of List start here.[+][+]=======. */}
      <List>
        {getEmailService?.response?.map((mail) => (
          <Email
            mail={mail}
            key={mail?._id}
            selectedEmails={selectedEmails}
            setRefreshScreen={setRefreshScreen}
            setSelectedEmails={setSelectedEmails}
          />
        ))}
      </List>
      {/*========= [-] Emails of List start here.[+]======. */}
      {/* [-]-============No Mails start-===========[-] */}
      {getEmailService?.response?.length === 0 && (
        <NoEmails message={EMPTY_TABS[type]} />
      )}
      {/* [-]-============No Mails end-===========[-] */}
    </Box>
  );
};

export default Emails;
