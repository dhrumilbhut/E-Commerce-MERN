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
      <div className="flex flex-col">
        <h1
          className=" flex justify-center mt-5 text-3xl
        "
        >
          Welcome to {title}
        </h1>
        <h1
          className=" flex justify-center mt-1 text-xl
        "
        >
          {description}
        </h1>
      </div>

      <div className={className}>{children}</div>
      <div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Base;
