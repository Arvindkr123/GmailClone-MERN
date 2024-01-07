import { lazy } from "react";
const ViewEmails = lazy(() => import("../components/view-emails/ViewEmails"));
const Main = lazy(() => import("../pages/Main"));
const Emails = lazy(() => import("./../components/emails/Emails"));

const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: Emails,
  },
  view: {
    path: "/view",
    element: ViewEmails,
  },
  invalid: {
    path: "/*",
    element: Emails,
  },
};

export { routes };
