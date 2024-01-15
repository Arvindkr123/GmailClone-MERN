import React from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import { StarBorder, Star } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import useApi from "../../hooks/useApi";
import { API_URLS } from "../../services/api.urls";

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

const Email = ({
  mail,
  selectedEmails,
  setRefreshScreen,
  setSelectedEmails,
}) => {
  const navigate = useNavigate();
  const toggleStarredService = useApi(API_URLS.toggleStarredMails);

  const toggleStarredMails = () => {
    toggleStarredService.call({ id: mail._id, value: !mail.starred });
    setRefreshScreen((prev) => !prev);
  };

  const changeCheckedBoxValue = () => {
    if (selectedEmails.includes(mail._id)) {
      // if id is already checked then remove it
      setSelectedEmails((prev) => prev.filter((id) => id !== mail._id));
    } else {
      // else add it
      setSelectedEmails((prev) => [...prev, mail._id]);
    }
  };

  return (
    <Wrapper>
      <Checkbox
        size="small"
        checked={selectedEmails.includes(mail._id)}
        onChange={() => changeCheckedBoxValue()}
      />
      {/* [+][-] Starred Icons Start  [-][+] */}
      {mail?.starred ? (
        <Star
          fontSize="small"
          style={{ marginRight: "10px", color: "#fff200" }}
          onClick={toggleStarredMails}
        />
      ) : (
        <StarBorder
          fontSize="small"
          style={{ marginRight: "10px" }}
          onClick={toggleStarredMails}
        />
      )}
      {/* [+][-] Starred Icons End  [-][+] */}
      <Box
        onClick={() => navigate(routes.view.path, { state: { mail: mail } })}
      >
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
