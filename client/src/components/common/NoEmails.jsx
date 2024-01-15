import { Box, Typography, styled, Divider } from "@mui/material";

const Component = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  opacity: 0.8,
   padding: 100,
  textAlign: "center",
});

const StyledDivider = styled(Divider)({
  width: "100%",
  marginTop: 10,
});

const NoEmails = ({ message }) => {
  return (
    <Component>
      <Typography>{message.heading}</Typography>
      <Typography>{message.subHeading}</Typography>
      <StyledDivider />
    </Component>
  );
};

export default NoEmails;
