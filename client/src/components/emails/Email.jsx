import React from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import styled from "@emotion/styled";

const Wrapper = styled(Box)({
  padding: "0 0 0 10px",
  backgroundColor: "#f2f6fc",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "& > div": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& > p": {
      fontSize: "14px",
    },
  },
});

const Indicator = styled(Typography)({
  background: "#ddd",
  color: "#222",
  fontSize: "12px !important",
  padding: "0 4px",
  borderRadius: "4px",
  marginRight: 6,
});

const Email = ({ mail, selectedEmails }) => {
  // console.log(mail);
  return (
    <Wrapper>
      <Checkbox size="small" checked={selectedEmails.includes(mail._id)} />
      {/* <Star /> */}
      <StarBorder fontSize="small" style={{ marginRight: "10px" }} />
      <Box>
        <Typography style={{ width: 200, overflow: "hidden" }}>
          {mail.name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {mail.subject} {mail.body && "-"} {mail.body.substring(0, 80)}...
        </Typography>
        <Typography style={{ marginLeft: "auto", marginRight: "10px" }}>
          {new Date(mail.date).getDate()}{" "}
          {new Date(mail.date).toLocaleString("default", { month: "long" })}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default Email;
