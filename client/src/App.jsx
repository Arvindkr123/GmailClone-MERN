import React, { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./constants/routes";
const ErrorComponent = lazy("./components/common/ErrorComponent");
import SuspenseLoader from "./components/common/SuspenseLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path={routes.main.path}
        element={<Navigate to={`${routes.emails.path}/inbox`} />}
      />
      // home path /
      <Route path={routes.main.path} element={<routes.main.element />}>
        // children routes
        <Route
          path={`${routes.emails.path}/:type`}
          element={<routes.emails.element />}
          errorElement={<ErrorComponent />}
        />
        <Route
          path={routes.view.path}
          element={<routes.view.element />}
          errorElement={<ErrorComponent />}
        />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};

export default App;
