import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Green Stream</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Queue</Link>
            </li>

            <li>
              <Link to="/watched">Already Seen</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main"> + Add  </Link>

              <Link to="/signup"> Sign up </Link>

              <Link to="/login"> Login </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
