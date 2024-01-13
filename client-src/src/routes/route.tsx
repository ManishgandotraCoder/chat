import * as React from "react";
const LoginComponent = React.lazy(() => import("../pages/common/login"));
const CreateuserComponent = React.lazy(() => import("../pages/admin/create-user"));
const EditUserComponent = React.lazy(() => import("../pages/admin/edit-user"));
const ChatComponent = React.lazy(() => import("../pages/normal/chat"))
const ViewGroupComponent = React.lazy(() => import("../pages/normal/viewgroup"));
const roles =
{
    common: "COMMON",
    admin: "ADMIN",
    normal: "NORMAL"
}

const routes = [
    {
        path: "/",
        element: (<LoginComponent />),
        roles: [roles.common, roles.admin, roles.normal]
    },
    {
        path: "/user/create",
        element: (<CreateuserComponent />),
        roles: [roles.admin]
    },
    {
        path: "/user/edit/:id",
        element: (<EditUserComponent />),
        roles: [roles.admin]

    },
    {
        path: "/chat",
        element: (< ChatComponent />),
        roles: [roles.normal]

    },
    {
        path: "/group/:id",
        element: (<ViewGroupComponent />),
        roles: [roles.normal]

    },

]
export default routes