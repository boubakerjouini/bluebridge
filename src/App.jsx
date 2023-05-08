import React from 'react'
import Main from './layouts/Main'
import Home from './pages/Home/Home'
import { Outlet } from 'react-router-dom'

export function App() {
  return (
    <Main>
      <Outlet />
    </Main>
  )
}

export default App
