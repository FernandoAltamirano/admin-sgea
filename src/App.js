import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner";
import { useUser } from "./hooks/useUser";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { getUser } from "./utils/getUser";

const Login = lazy(() => import("./pages/Login"));
const UserDetails = lazy(() => import("./pages/UserDetails"));
const RequestList = lazy(() => import("./pages/RequestList"));
const Events = lazy(() => import("./pages/Events"));
const RequestsListDetails = lazy(() => import("./pages/RequestsListDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));
const EventsDetails = lazy(() => import("./pages/EventsDetails"));

function App() {
  const [_, dispatch] = useUser();

  const updateUser = (user) => {
    dispatch({ type: "UPDATE_USER", payload: user });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    else
      getUser(token)
        .then((data) => {
          updateUser(data);
        })
        .catch((err) => console.error(err));
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute exact path="/" component={Login} />

          <PrivateRoute
            exact
            path="/dashboard/profile"
            component={UserDetails}
          />
          <PrivateRoute
            exact
            path="/dashboard/events/details/:id"
            component={EventsDetails}
          />
          <PrivateRoute exact path="/dashboard/events" component={Events} />
          <PrivateRoute
            exact
            path="/dashboard/requestslist"
            component={RequestList}
          />
          <PrivateRoute
            exact
            path="/dashboard/requestslist/details/:id"
            component={RequestsListDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
