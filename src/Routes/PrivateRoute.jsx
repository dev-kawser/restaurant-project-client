/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex lg:h-[500px] justify-center items-center lg:mt-20 mx-auto">
            {/* <Lottie animationData={loadingAnimation} ></Lottie> */}
            <h1>Loading</h1>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};


export default PrivateRoute;