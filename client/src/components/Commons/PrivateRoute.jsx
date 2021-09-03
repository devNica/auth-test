import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {Store} from "../../store/mainStore";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, dispatch] = useContext(Store);

    return (
    <Route
      {...rest}
      render={(props) =>
        state.isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
