import styled from "@emotion/styled";
import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import { sidebarData } from "../config/sidebar";
import ComposeMailDialog from "./compose-mail/ComposeMail";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../constants/routes";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",

  "&>svg": {
    marginRight: "10px",
  },
});

const Container = styled(Box)({
  padding: 10,
  "&>ul": {
    padding: "10px 0 0 5px",
    fontSize: "14px",
    fontWeight: "800",
    cursor: "pointer",
    "& > a": {
      textDecoration: "none",
      color: "inherit",
    },
  },

  "& > ul > a > li >svg": {
    marginRight: "20px",
  },
});

const SidebarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const { type } = useParams();
  return (
    <Container>
      <ComposeButton onClick={toggleDialog}>
        <CreateOutlined /> Compose
      </ComposeButton>
      <List>
        {sidebarData.map((data) => {
          return (
            <NavLink to={`${routes.emails.path}/${data.name}`} key={data.name}>
              <ListItem
                style={
                  type === data.name.toLowerCase()
                    ? {
                        backgroundColor: "#d3e3fd",
                        borderRadius: "0 16px 16px 0",
                      }
                    : {}
                }
              >
                <data.icon fontSize="small" />
                {data.title}
              </ListItem>
            </NavLink>
          );
        })}
      </List>
      <ComposeMailDialog
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
      />
    </Container>
  );
};

export default SidebarContent;
