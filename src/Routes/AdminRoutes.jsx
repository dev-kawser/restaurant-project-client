/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoutes = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <div className="flex lg:h-[500px] justify-center items-center lg:mt-20 mx-auto">
            {/* <Lottie animationData={loadingAnimation} ></Lottie> */}
            <h1>Loading</h1>
        </div>
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};

export default AdminRoutes;