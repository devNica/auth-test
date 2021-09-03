import React from 'react'
import {Link} from 'react-router-dom'

const Redirect = ({message, route, text}) => {
    return (
        <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-gray-300 text-md">
            {message}
          <Link
            to={route}
            className="text-md text-blue-500 hover:text-blue-300 hover:underline ml-2"
          >
            {text}
          </Link>
        </p>
      </div>
    )
}


export default Redirect