import styled from "@emotion/styled";
import { Close, Delete, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

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
  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const sendMail = () => {
    setOpenDialog(false);
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
        <InputBase placeholder="Recipients" />
        <InputBase placeholder="Subject" />
      </RecipientsWrapper>
      {/* ------------------------------TextArea start--------------------------- */}
      <TextField
        multiline
        rows={20}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      />
      {/* ------------------------------TextArea end--------------------------- */}
      {/*----------------------------- Content End========================= */}
      {/*============================== footer start ======================= */}
      <Footer>
        <SendButton onClick={sendMail} variant="contained">
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
