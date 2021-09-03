import React from 'react'

const Input = ({inputLabel, inputType, inputName, getValue}) => {

    return (
        <div className="mb-6 pt-3 rouded bg-gray-100">
            <label htmlFor="email"className="block text-gray-600 text-md font-bold mb-2 ml-3">
              {inputLabel}
            </label>
            <input
              autoComplete="none"
              type={inputType}
              className="bg-gray-100 active:bg-gray-100 rouded w-full text-gray-600 focus:outline-none border-b-4 border-gray-300 focus:border-red-300 transition duration=500 px-3 pb-3"
              name={inputName}
              onChange={(e)=>getValue(e)}

            />
        </div>
    )
}

export default Input