import React, { useState, useContext } from "react";

import Input from "../Custom/Input";
import Button from "../Custom/Button";
import Redirect from "../Custom/Redirect";

import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../../GraphQL/Mutations";

import {Store} from '../../store/mainStore'
import Alert from "../Custom/Alerts";

const Register = ({ history }) => {
  const [state, dispatch] = useContext(Store)
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [register, {}] = useMutation(REGISTER_MUTATION, {
    onCompleted: (data) => {
      if (data.register.success) {
        
        dispatch({type: 'SUCCESS_REGISTER', payload: {message: data.register.message}})
        
        setTimeout(()=>{
          dispatch({type: 'CLEAR_ALERT'})
          history.push("/");
        },2000)
       
      }
    },
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    register({
      variables: {
        email: user.email,
        firstName: user.firstname,
        lastName: user.lastname,
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
          JOIN US
        </div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-gray-200 p-8 rounded-sm">
        <Alert/>
        <form action="" autoComplete="off" onSubmit={handleOnSubmit}>
          <Input
            inputLabel="First Name:"
            inputType="text"
            inputName="firstname"
            getValue={handleOnchange}
          />
          <Input
            inputLabel="Last Name:"
            inputType="text"
            inputName="lastname"
            getValue={handleOnchange}
          />
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

          <Button buttonType="submit" buttonText="Sign Up" />
        </form>
      </div>

      <Redirect
        message="If you already have an account click on the link"
        route="/"
        text="Sign In"
      />
    </div>
  );
};

export default Register;
