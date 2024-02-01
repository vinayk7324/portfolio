import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Navbar from './Component/Navbar.jsx';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Experience from './Component/Experience';
import Work from './Component/Work.jsx';
import Contact from './Component/Contact.jsx'

const router  = createHashRouter(
[
  {path:'/',
  element:<App/>,
  children:[{
    path:'navbar',
    element:<Navbar/>

  },
{
  path:"about",
  element:<About/>
  

},
{
  path:"experience",
  element:<Experience/>

},
{
  path:"work",
  element:<Work/>
},
{
  path:"contact",
  element:<Contact/>
}

]
}
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
