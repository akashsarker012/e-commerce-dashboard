import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Home />}>

        
      </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
