import React, {useContext} from "react";
import {Store} from '../../store/mainStore'

const Alert = () => {
    const[state, _] = useContext(Store)

    const alertClass = state.alertType !== "success" ? "text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-400" : "text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500"

    const myAlert = () => 
        state.isAlert ? ( 
        <div className={alertClass}>
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
                <b className="capitalize">{ state.alertType !== "success" ? "Error:": "Eureka:"}</b> {state.message}!
            </span>
            <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                <span>×</span>
            </button>
        </div>) : null

  return (
    myAlert()
  );
};


export default Alert