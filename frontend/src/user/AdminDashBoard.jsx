import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const AdminLeftSide = () => {
    return <h1 className="">Admin Left Side</h1>;
  };
  const AdminRightSide = () => <h1>Admin Right Side </h1>;
  return (
    <Base>
      <h1 className="text-center text-4xl">Welcome to admin Dashboard</h1>

      <div className="flex">
        <div className="w-1/4">
          <AdminLeftSide />
        </div>
        <div className="">
          <AdminRightSide />
        </div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
