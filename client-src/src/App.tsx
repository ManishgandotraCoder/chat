import * as React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import routes from './routes/route'
import NotFoundComponent from './pages/common/notFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import background from "./icons/bg.jpg";
const Loader = React.lazy(() => import("./components/loader"));
const Toolbar = React.lazy(() => import("./components/toolbar"));
const LoginComponent = React.lazy(() => import("./pages/common/login"));

const App: React.FunctionComponent = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<LoginComponent />} />
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

    return (<div className='bg'>
        <Toolbar logout = {true} heading = {'Chat Messenger'} background="rgba(10, 180, 180, 1)"/>
        <Outlet />
    </div>
    )
}

