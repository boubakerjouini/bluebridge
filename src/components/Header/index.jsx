import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="flex  border-b-4 shadow-lg border-teal-400 bg-white justify-between  py-2 px-5 sticky top-0 ">
      <div className="flex py-2">
        <div className="flex row px-4 font-bold text-teal-800">
          <h1 className=" ">Create & Connect</h1>
        </div>
        <nav className="flex-row font-semibold">
          <ul className="flex">
            <Link to="/">
              <li className="px-4">Home</li>
            </Link>
            <Link to="about">
              <li className="px-4">About</li>
            </Link>
            <Link to="contact">
              <li className="px-4">Our Creators 🏅</li>
            </Link>
            <Link to="contact">
              <li className="px-4">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div>
        <button className="bg-teal-600 text-white border-2 border-teal-400 px-4 py-2 rounded-md hover:bg-white hover:border-2 hover:border-teal-400 hover:text-teal-400 hover:font-bold">
          Login
        </button>

        <button className="bg-teal-600 text-white px-4 py-2 rounded-md ml-4">Sign Up</button>
      </div>
    </div>
  )
}

export default Header
