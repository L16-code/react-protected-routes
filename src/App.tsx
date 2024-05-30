// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard';
import Profile from './components/Profile/Profile';
import MyOrders from './components/MyOrders/orders';
import MyBlog from './components/MyBlog/blog';
import { useSelector } from 'react-redux';
// import { Root } from 'react-dom/client';
import { RootState } from './Store/store';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import PublicRoute from './Routes/PublicRoutes';
// import {ProtectedRoutes} from './Routes/ProtectedRoutes';
// import { AuthState } from './types/authTypes';
function App() {
  const isAuthenticated=useSelector((state:RootState)=>state.root.isAuthenticated)
  console.log(isAuthenticated)
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/admin/dashboard" element={
          <ProtectedRoutes isAuthenticated={isAuthenticated} isAdmin={true} adminRoute={true} >
            <Dashboard />
          </ProtectedRoutes>
        } />

        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute isAuthenticated={isAuthenticated}/>}>
        <Route path="/login" element={<Login />} />

        </Route>

          
        
        {/* <Route path="/profile" element={<ProtectedRoutes isAuthenticated={isAuthenticated}>
          <Profile />
        </ProtectedRoutes>} />
        <Route path="/myorders" element={<ProtectedRoutes isAuthenticated={isAuthenticated}>
          <MyOrders />
        </ProtectedRoutes>} />
        <Route path="/myblog" element={<ProtectedRoutes isAuthenticated={isAuthenticated}>
          <MyBlog />
        </ProtectedRoutes>} /> */}

        <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} adminRoute={false}  isAdmin={false}/>}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/blog" element={<MyBlog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
