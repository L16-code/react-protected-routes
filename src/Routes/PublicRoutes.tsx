import { Navigate, Outlet } from 'react-router-dom';
import { PublicRoutesProps } from '../types/authTypes';


const PublicRoute: React.FC<PublicRoutesProps> = ({ isAuthenticated }) => {

    return  isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};


export default PublicRoute