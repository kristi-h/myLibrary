import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route 
} from 'react-router-dom'
import Home, {loader as homeLoader, action as homeAction} from './components/Home'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Home />} loader={homeLoader} action={homeAction} />
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
