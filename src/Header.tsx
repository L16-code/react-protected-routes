// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from './Store/store';
import {   logout } from './actions/rootReducer';

const Header = () => {
    const dispatch =useDispatch();
    // const logoutHandler =()=>{
    //     dispatch(logout())
    //     // dispatch()
    // }
    const {isAuthenticated}=useSelector((state:RootState)=>state.root)
    return (
        <nav>
            <Link to="/">Home</Link>
            {isAuthenticated &&
            <>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/myorders">MyOrders</Link>
            <Link to="/cart">Cart</Link>
            
            </>
            }
            {isAuthenticated ? <Link to="/" onClick={()=>{dispatch(logout())}}>Logout</Link>:<Link to="/login">Login</Link>}

        </nav>
    );
};

export default Header;
