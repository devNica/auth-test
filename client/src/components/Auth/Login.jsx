import React, { useState, useContext } from "react";
import Input from "../Custom/Input";
import Button from "../Custom/Button";
import Redirect from "../Custom/Redirect";
import { useMutation } from "@apollo/client";
import { AUTH_MUTATION } from "../../GraphQL/Mutations";
import { Store } from '../../store/mainStore'
import Alert from "../Custom/Alerts";

const Login = ({history}) => {
  const [_, dispatch] = useContext(Store)
  const [user, setUser] = useState({ email: "", password: "" });
  const [auth, {}] = useMutation(AUTH_MUTATION,{ onCompleted: data => {
    
    if(data.auth.success && data.auth.accessToken !== ""){
      dispatch({type: 'SET_AUTH', payload: { accessToken: data.auth.accessToken } })
      history.push('/dashboard')
    }else {
      dispatch({type: 'FAIL_LOGIN', payload: { message: data.auth.error } })
    }
    
  }});

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    auth({
      variables: {
        email: user.email,
        password: user.password,
      },
    });

  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className=" text-4xl text-center font-bold text-xl text-red-300">
          EPICTECH
        </div>
        <div className="text-3xl font-bold text-blue-300 mt-2 text-center">
          STARTUP
        </div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-gray-200 p-8 rounded-sm">

        <Alert/>

        <form action="POST" onSubmit={handleOnSubmit}>
          <Input
            inputLabel="Email:"
            inputType="email"
            inputName="email"
            getValue={handleOnchange}
          />

          <Input
            inputLabel="Password:"
            inputType="password"
            inputName="password"
            getValue={handleOnchange}
          />

          <Button buttonType="submit" buttonText="Sign In"/>
        </form>
      </div>

      <Redirect
        message=" Don't have an account?"
        route="/signup"
        text="Sign Up"
      />
    </div>
  );
};

export default Login;
