import {
  DeleteOutline,
  InsertDriveFileOutlined,
  MailOutline,
  Photo,
  SendOutlined,
  StarOutline,
} from "@mui/icons-material";

export const sidebarData = [
  {
    name: "inbox",
    title: "Inbox",
    icon: Photo,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarOutline,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendOutlined,
  },
  {
    name: "darfts",
    title: "Drafts",
    icon: InsertDriveFileOutlined,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutline,
  },
  {
    name: "allmail",
    title: "All Mails",
    icon: MailOutline,
  },
];
