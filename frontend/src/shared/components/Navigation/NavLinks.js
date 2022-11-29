import "./NavLinks.css";

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import Button from "../FormElements/Button";



const NavLinks = (props) => {
  const auth = /* A hook that allows you to access the context object in a functional component. */
  useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" end>
          MENU
        </NavLink>
      </li>
        <li>
          <NavLink to="/u1/products">PRODUCTS</NavLink>
        </li>
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">LOGIN</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Button onClick={auth.logout}>LOGOUT</Button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;