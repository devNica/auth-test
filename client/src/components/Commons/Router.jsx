import React from "react";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Dashboard from '../Dashboard/Dashboard'
import PrivateRoute from "./PrivateRoute";
import GuestRoute from "./GuestRoute";
import Navbar from "../Navbar/Navbar";

const Router = ({ location }) => {
  return (
    <div className="">
        <Navbar/>
        <PrivateRoute location={location} exact path='/dashboard' component={Dashboard} />
        <GuestRoute location={location} exact path='/' component={Login} />
        <GuestRoute location={location} exact path='/signup' component={Register} />
    </div>
    
  );
};

export default Router;
