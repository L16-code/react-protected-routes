// import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from './Store/store';

const Header = () => {
    const {isAuthenticated}=useSelector((state:RootState)=>state.root)
    return (
        <nav>
            <Link to="/">Home</Link>
            {isAuthenticated ? <Link to="/">Logout</Link>:<Link to="/login">Login</Link>}
            
            {isAuthenticated &&
            <>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/myorders">MyOrders</Link>
            <Link to="/myblog">MyBlog</Link>
            
            </>
            }

        </nav>
    );
};

export default Header;
