import * as React from "react";
import { Dashboard } from "../pages/admin/dashboard";

const ListUserComponent = React.lazy(() => import("../pages/admin/list-user"));
const CreateuserComponent = React.lazy(() => import("../pages/admin/create-user"));
const EditUserComponent = React.lazy(() => import("../pages/admin/edit-user"));
const ChatComponent = React.lazy(() => import("../pages/normal/chat"))


const routes = [
  
    {
        path: "/users",
        element: (<ListUserComponent />),
    },
    {
        path: "/user/create",
        element: (<CreateuserComponent />),
    },
    {
        path: "/user/edit/:id",
        element: (<EditUserComponent />),

    },
    {
        path: "/chat",
        element: (< ChatComponent />),

    },
    {
        path: "/dashboard",
        element: (< Dashboard />),

    }
]
export default routes