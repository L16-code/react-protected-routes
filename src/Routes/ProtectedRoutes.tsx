// import { Children } from "react";
import { Navigate ,Outlet } from "react-router-dom"
import {ProtectedRoutesProps} from '../types/authTypes'

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ isAuthenticated,children ,adminRoute,isAdmin }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    if(adminRoute && !isAdmin){
        return <Navigate to="/" />;
    }
    return children ? children :<Outlet/>
}

export default ProtectedRoutes