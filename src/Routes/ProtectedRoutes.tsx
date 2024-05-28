// import { Children } from "react";
import { ReactNode } from "react";
import { Navigate ,Outlet } from "react-router-dom"
interface ProtectedRoutesProps {
    isAuthenticated: boolean;
    children?: ReactNode;
    adminRoute:boolean;
    isAdmin:boolean;
}

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