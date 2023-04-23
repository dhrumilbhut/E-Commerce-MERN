import React from "react";
import Navbar from "./Navbar";

const Base = ({
  title = "Title",
  description = "Description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Navbar />
      <div className={className}>{children}</div>
      <div>
        <footer className="footer  bottom-0 footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Base;
