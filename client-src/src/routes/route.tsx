import * as React from "react";
const LoginComponent = React.lazy(() => import("../pages/common/login"));
const CreateuserComponent = React.lazy(() => import("../pages/admin/create-user"));
const EditUserComponent = React.lazy(() => import("../pages/admin/edit-user"));
const ChatComponent = React.lazy(() => import("../pages/normal/chat"))
const ViewGroupComponent = React.lazy(() => import("../pages/normal/viewgroup"));
const routes = [
    {
        path: "/",
        element: (<LoginComponent />
        ),
    },
    {
        path: "/user/create",
        element: (<CreateuserComponent />
        ),
    },
    {
        path: "/user/edit/:id",
        element: (<EditUserComponent />
        ),
    },
    {
        path: "/chat",
        element: (< ChatComponent />
        ),
    },
    {
        path: "/group/:id",
        element: (<ViewGroupComponent />
        ),
    },

]
export default routes