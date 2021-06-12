
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
export default function App() {
  const user  =  {};
  return (
    <Router>
      <Route exact path="/browse">
        <Browse />
      </Route>



      
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>


      
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>




      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
