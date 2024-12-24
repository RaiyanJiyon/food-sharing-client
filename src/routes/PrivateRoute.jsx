import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-ring loading-lg text-black-500"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={location.pathname} replace />
};

export default PrivateRoute;