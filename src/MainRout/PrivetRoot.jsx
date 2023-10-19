/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providor/Providor";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoot = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    // console.log(location.pathname)

    if (loading) {
        return <div className="container mx-auto h-[80vh] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>

    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoot;