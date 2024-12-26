import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import AddFood from "../pages/AddFood/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home/Home";
import UpdateFood from "../pages/ManageMyFoods/UpdateFood";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/Profile/UpdateProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/available-foods",
                element: <AvailableFoods />
            },
            {
                path: "/food/:id",
                element: (
                    <PrivateRoute>
                        <FoodDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://food-sharing-server-pied.vercel.app/foods/${params.id}`)
            },
            {
                path: "/add-food",
                element: (
                    <PrivateRoute>
                        <AddFood />
                    </PrivateRoute>
                )
            },
            {
                path: "/manage-foods",
                element: (
                    <PrivateRoute>
                        <ManageMyFoods />
                    </PrivateRoute>
                )
            },
            {
                path: "/updating-food/:id",
                element: (
                    <PrivateRoute>
                        <UpdateFood />
                    </PrivateRoute>
                ),
                loader: () => fetch('https://food-sharing-server-pied.vercel.app/foods')
            },
            {
                path: "/my-food-requests",
                element: (
                    <PrivateRoute>
                        <MyFoodRequest />
                    </PrivateRoute>
                )
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                )
            },
            {
                path: "/update-profile",
                element: (
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                )
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
]);

export default router;