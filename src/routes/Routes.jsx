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
                path: "/my-food-requests",
                element: (
                    <PrivateRoute>
                        <MyFoodRequest />
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