import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="headerContainer">
      <div className="LoginSign">
        <Link to="/">Home</Link>
      </div>
      <div className="LoginSignup">
          <Link to="/Login">Login</Link>
        <div className="LoginSign">
        </div>
        <div className="LoginSign">
          <Link to="/Registration">Signup</Link>
        </div>
      </div>
    </div>
  );
}

