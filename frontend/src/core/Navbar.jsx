import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (location.pathname === path) {
    return { color: "#1d4ed8" };
  } else {
    return { color: "#d1d1d1" };
  }
};

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        {/* <a className="btn btn-ghost normal-case text-l"> */}
        <Link
          style={currentTab(history, "/")}
          className="btn btn-ghost normal-case text-l"
          to="/"
        >
          Home
        </Link>

        <Link
          style={currentTab(history, "/cart")}
          className="btn btn-ghost normal-case text-l"
          to="/cart"
        >
          Cart
        </Link>

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <Link
            style={currentTab(history, "/dashboard")}
            className="btn btn-ghost normal-case text-l"
            to="/user/dashboard"
          >
            U. Dashboard
          </Link>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="btn btn-ghost normal-case text-l"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        )}

        {!isAuthenticated() && (
          <>
            <Link
              style={currentTab(history, "/signup")}
              className="btn btn-ghost normal-case text-l"
              to="/signup"
            >
              Signup
            </Link>

            <Link
              style={currentTab(history, "/signin")}
              className="btn btn-ghost normal-case text-l"
              to="/signin"
            >
              Signin
            </Link>
          </>
        )}

        {isAuthenticated() && (
          <span
            className="btn btn-ghost normal-case text-l"
            onClick={() => {
              signout(() => {
                navigate("/");
              });
            }}
          >
            Signout
          </span>

          // <Link
          //   style={currentTab(history, "/signout")}
          //   className="btn btn-ghost normal-case text-l"
          //   to="/signout"
          // >
          //   Signout
          // </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
