import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../MainLayout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            // {
            //     path: "/login",
            //     element: <Login></Login>
            // },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/secret",
                element: <PrivateRoute>
                    <Secret></Secret>
                </PrivateRoute>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [

            // user routes
            {
                path: "userHome",
                element: <UserHome></UserHome>

            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },



            // admin routes
            {
                path: "adminHome",
                element: <AdminRoutes>
                    <AdminHome></AdminHome>
                </AdminRoutes>
            },
            {
                path: "allUsers",
                element: <AdminRoutes>
                    <AllUsers></AllUsers>
                </AdminRoutes>
            },
            {
                path: "addItems",
                element: <AdminRoutes>
                    <AddItems></AddItems>
                </AdminRoutes>
            },
            {
                path: "manageItems",
                element: <AdminRoutes>
                    <ManageItems></ManageItems>
                </AdminRoutes>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoutes>
                    <UpdateItem></UpdateItem>
                </AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params?.id}`)
            },
        ]
    }
]);

export default router;