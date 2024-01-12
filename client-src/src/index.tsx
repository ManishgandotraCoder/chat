import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { HashRouter } from "react-router-dom"
import {Provider} from 'react-redux'
import store from './redux/store';

const Loader = React.lazy(() => import("./components/loader"));

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <HashRouter>
        <Provider store={store}>
        <App />
        </Provider>  
      </HashRouter>  </Suspense>
  </React.StrictMode>
)