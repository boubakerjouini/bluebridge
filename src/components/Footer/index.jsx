import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="flex bg-gray-100 justify-between  center py-4 px-5 ">
        <div className="">
          <p>&copy; {new Date().getFullYear()} UGC</p>
        </div>
        <nav className="flex-row">
          <ul className="flex"></ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
