import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Main
