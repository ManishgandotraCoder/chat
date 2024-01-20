import * as React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import routes from './routes/route'
import NotFoundComponent from './pages/common/notFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
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
    const [role, setRole] = React.useState('NORMAL')
    React.useEffect(() => {
        let user = localStorage.getItem('user') || ''
        setRole(JSON.parse(user).role);

    }, [])
    return (<div className='bg'>
        {role === "admin" && <Toolbar logout={true} heading={'Speedster'} background="rgba(176, 54, 247);" />}
        <Outlet />
    </div>
    )
}

