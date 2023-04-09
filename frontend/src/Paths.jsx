import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";

const Paths = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signin" exact element={<Signin />} />

        <Route
          path="/user/dashboard"
          element={
            <PrivateRoute>
              <UserDashBoard />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashBoard />
            </AdminRoute>
          }
        ></Route>

        {/* <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} /> */}
        {/* <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
