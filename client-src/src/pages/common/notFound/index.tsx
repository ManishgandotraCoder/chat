import React from "react"
import { Routes, Route, Outlet, Link } from 'react-router-dom'

const NotFoundComponent: React.FunctionComponent = () => {
    return (
          <div>
              <h2>Page Not Found!</h2>
              <p>
                  <Link to="/">Go to the home page</Link>
              </p>
          </div>
    )
  }
  
export default NotFoundComponent