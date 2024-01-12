import * as React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import routes from './routes/route'
const Loader = React.lazy(() => import("./components/loader"));

const App: React.FunctionComponent = () => {

  return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routes.map(item =>
                        <Route
                            path={item.path}
                            key={item.path}
                            element={
                                <React.Suspense fallback={<Loader />}>
                                    {item.element}
                                </React.Suspense>
                            }
                        />
                    )}
                    <Route path="*" element={<NotFoundComponent />} />
                </Route>
            </Routes>
        </div>
  )
}
export default App

const Layout: React.FunctionComponent = () => {
  return (<div>
            <Outlet />
        </div>
  )
}

const NotFoundComponent: React.FunctionComponent = () => {
  return (
        <div>
            <h2>Invalid Route!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
  )
}
