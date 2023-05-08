import { Route, Router, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import ErrorPage from '../pages/Error/Error'
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
)
