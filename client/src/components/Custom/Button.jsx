import React from 'react'

const Button = ({buttonType, buttonText}) => {
    return (
        <div>
        <button
          type={buttonType}
          className="w-full text-md text-white font-bold py-2 px-4 bg-blue-400 hover:bg-blue-600 rounded shadow-lg hover:shadow-xl transition duration:200"
        >
          {buttonText}
        </button>
      </div>
    )
}

export default Button