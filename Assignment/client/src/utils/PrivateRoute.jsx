import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken, removeUserSession } from "./Common";
import Navbar from "../components/Navbar";

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? (
          <div className="BgColor" style={{height:"100vh" ,overflowY:'scroll'}}>
            <div className="navbarPage">
              <Navbar />
            </div>
            <div style={{paddingTop: "60px" ,paddingBottom:"20px"}}>
              <Component {...props} />
            </div>
          </div>
        ) : (
          <>
            {removeUserSession()}
            <Redirect from="/" to="/login" />
          </>
        )
      }
    />
  );
}

export default PrivateRoute;
