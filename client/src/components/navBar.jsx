import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container navbar navbar-expand-lg h3 mt-3">
      <NavLink className="nav-item nav-link text-light" to="/university">
        University
      </NavLink>
      <NavLink className="nav-item nav-link text-light" to="/intership">
        Intership
      </NavLink>
      <NavLink className="nav-item nav-link text-light" to="/new-student">
        New student
      </NavLink>
    </nav>
  );
};

export default NavBar;
