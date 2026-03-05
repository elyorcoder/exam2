import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";


const Sidbar = () => {
  return (
    <div className="s1">
      <ul className="s2">
        <li>
          <NavLink className="s3" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="s3" to="/create">
            Create
          </NavLink>
        </li>
        <li>
          <NavLink className="s3" to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidbar;
