import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AppsOutageOutlined,
  AppsOutlined,
  HelpOutlineOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  Tune,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  background: "#Eaf1fb",
  marginLeft: "80px",
  borderRadius: "8px",
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& >div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  "& > div": {
    marginLeft: "20px",
  },
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon color="action" />
        </IconButton>
        {/* logo for mail */}
        <img src={gmailLogo} style={{ width: 110, marginLeft: "15" }} />

        {/* for the input */}
        <SearchWrapper>
          <IconButton>
            <Search color="action" />
          </IconButton>
          <InputBase placeholder="Search mail" />
          <IconButton>
            <Tune color="action" />
          </IconButton>
        </SearchWrapper>

        {/* added other icons */}
        <OptionsWrapper>
          <IconButton>
            <HelpOutlineOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          <IconButton>
            <AppsOutlined />
          </IconButton>
          <IconButton>
            <AccountCircleOutlined />
          </IconButton>
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
