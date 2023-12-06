import styled from "@emotion/styled";
import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem } from "@mui/material";
import React from "react";
import { sidebarData } from "../config/sidebar";

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
  },

  "& > ul > li >svg": {
    marginRight: "20px",
  },
});

const SidebarContent = () => {
  return (
    <Container>
      <ComposeButton>
        <CreateOutlined /> Compose
      </ComposeButton>
      <List>
        {sidebarData.map((data) => {
          return (
            <ListItem>
              <data.icon fontSize="small" />
              {data.title}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default SidebarContent;
