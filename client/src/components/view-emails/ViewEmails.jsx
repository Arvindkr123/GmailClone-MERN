import { useLocation, useOutletContext } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../../constants/constant";
import useApi from "./../../hooks/useApi";
import { API_URLS } from "../../services/api.urls";

const Container = styled(Box)({
  marginLeft: 15,
  width: "100%",
  "& > div": {
    display: "flex",
    "& > p > span": {
      fontSize: 12,
      color: "#5E5E5E",
    },
  },
});

const IconWrapper = styled(Box)({
  padding: 15,
});

const Subject = styled(Typography)({
  fontSize: 22,
  margin: "10px 0 20px 75px",
  display: "flex",
});

const Indicator = styled(Box)({
  fontSize: 12,
  background: `#ddd`,
  color: "#222",
  padding: "2px 4px",
  marginLeft: 6,
  borderRadius: "4px",
  alignSelf: "center",
});

const DateWrapper = styled(Box)({
  margin: "0 50px 0 auto",
  fontSize: 12,
  color: "#5E5E5E",
});

const Image = styled("img")({
  borderRadius: "50%",
  width: 40,
  height: 40,
  margin: "5px 10px 0 10px",
  backgroundColor: "#cccccc",
});

const ViewEmails = () => {
  const { openDrawer } = useOutletContext();
  const {
    state: { mail },
  } = useLocation();

  const moveEmailstoBinService = useApi(API_URLS.moveEmailsToBin);

  const deleteEmail = () => {
    moveEmailstoBinService.call([mail._id]);
    window.history.back();
  };

  return (
    <Box style={openDrawer ? { marginLeft: 250 } : { width: "100%" }}>
      <IconWrapper>
        <ArrowBack
          onClick={() => window.history.back()}
          color="action"
          fontSize="small"
        />
        <Delete
          color="action"
          fontSize="small"
          onClick={() => deleteEmail()}
          style={{ marginLeft: "10px" }}
        />
      </IconWrapper>
      <Subject>
        {mail?.subject} <Indicator component={"span"}>Inbox</Indicator>
      </Subject>
      <Box style={{ display: "flex" }}>
        <Image src={emptyProfilePic} alt="profile" />
        <Container>
          <Box>
            <Typography>
              {mail.to.split("@")[0]}
              <Box component="span">&nbsp;&#60;{mail.to}&#62;</Box>
            </Typography>
            <DateWrapper>
              {new Date(mail.date).getDate()}&nbsp;
              {new Date(mail.date).toLocaleString("default", {
                month: "long",
              })}{" "}
              &nbsp;
              {new window.Date(mail.date).getFullYear()}
            </DateWrapper>
          </Box>
          <Typography style={{ marginTop: 20 }}>{mail.body}</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ViewEmails;
