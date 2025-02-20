import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddNewMovie from './pages/AddNewMovie.jsx'

const router=createBrowserRouter([{
  element:<App/>,
  path:'/'
},{
  element:<AddNewMovie/>,
  path:"/addmovie"
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

  </StrictMode>,
)
