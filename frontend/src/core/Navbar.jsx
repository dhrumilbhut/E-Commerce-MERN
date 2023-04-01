import React from "react";
import { Link } from "react-router-dom";

const currentTab = (history, path) => {
  if (location.pathname === path) {
    return { color: "#1d4ed8" };
  } else {
    return { color: "#d1d1d1" };
  }
};

const Navbar = () => (
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
      {/* </a> */}

      <Link
        style={currentTab(history, "/cart")}
        className="btn btn-ghost normal-case text-l"
        to="/cart"
      >
        Cart
      </Link>

      <Link
        style={currentTab(history, "/dashboard")}
        className="btn btn-ghost normal-case text-l"
        to="/dashboard"
      >
        Dashboard
      </Link>

      <Link
        style={currentTab(history, "/admin/dashboard")}
        className="btn btn-ghost normal-case text-l"
        to="/admin/dashboard"
      >
        A. Dashboard
      </Link>

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

      <Link
        style={currentTab(history, "/signout")}
        className="btn btn-ghost normal-case text-l"
        to="/signout"
      >
        Signout
      </Link>
    </div>
  </div>
);

export default Navbar;
