import React from "react";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";

const Home = () => (
  <Base title="Home Page" description="Description">
    <div className="grid grid-cols-4">
      <div className="ml-10">
        <button className="btn btn-primary">Demo Btn</button>
      </div>
      <div className="ml-10">
        <button className="btn btn-primary">Demo Btn</button>
      </div>
      <div className="ml-10">
        <button className="btn btn-primary">Demo Btn</button>
      </div>
    </div>
  </Base>
);

export default Home;
