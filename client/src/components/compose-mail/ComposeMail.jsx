import styled from "@emotion/styled";
import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import { API_URLS } from "../../services/api.urls";

let dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0 ",
};

const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 15px",
  backgroundColor: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontWeight: 500,
  },
});

const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
    marginTop: "10px",
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 15px",
  alignItems: "center",
});

const SendButton = styled(Button)({
  borderRadius: 18,
  width: 100,
});

const ComposeMailDialog = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});

  const sentEmailServices = useApi(API_URLS.saveSentMails);

  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const config = {
    Host: import.meta.env.VITE_Host,
    Username: import.meta.env.VITE_Username,
    Port: import.meta.env.VITE_Port,
    Password: import.meta.env.VITE_Password,
  };

  // console.log(data);
  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "thakurarvindkr10@gmail.com", // use your email address to use
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }

    const payload = {
      to: data.to,
      from: "thakurarvindkr10@gmail.com", // use your email address to use
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: "",
      name: "Arvind Kumar",
      starred: false,
      type: "sent",
    };

    sentEmailServices.call(payload);

    if (!sentEmailServices.error) {
      setOpenDialog(false);
      setData({});
    }
    setOpenDialog(false);
  };

  const onValueChanged = (e) => {
    // console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      {/*---------------------- Header ------------------- */}
      <Header>
        <Typography>New Message</Typography>
        {/*Icon for close  */}
        <IconButton onClick={closeComposeMail}>
          <Close fontSize="small" />
        </IconButton>
      </Header>
      {/*----------------------- Header End------------------- */}

      {/*----------------------------- Content========================= */}
      <RecipientsWrapper>
        <InputBase
          placeholder="Recipients"
          name="to"
          onChange={(e) => onValueChanged(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => onValueChanged(e)}
        />
      </RecipientsWrapper>
      {/* ------------------------------TextArea start--------------------------- */}
      <TextField
        multiline
        rows={20}
        name="body"
        onChange={(e) => onValueChanged(e)}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      />
      {/* ------------------------------TextArea end--------------------------- */}
      {/*----------------------------- Content End========================= */}
      {/*============================== footer start ======================= */}
      <Footer>
        <SendButton
          type="submit"
          onClick={(e) => sendMail(e)}
          variant="contained"
        >
          Send
        </SendButton>
        <IconButton onClick={closeComposeMail}>
          <DeleteOutline />
        </IconButton>
      </Footer>
      {/*============================== footer END ======================= */}
    </Dialog>
  );
};

export default ComposeMailDialog;
