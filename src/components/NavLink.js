import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li className={classes.list}>
          <NavLink
            to="lotion"
            style={({ isActive }) => {
              return { color: isActive ? "white" : "" };
            }}
          >
            Lottion
          </NavLink>
        </li>
        <li className={classes.list}>
          <NavLink
            to="oil"
            style={({ isActive }) => {
              return { color: isActive ? "white" : "" };
            }}
          >
            Oil
          </NavLink>
        </li>
        <li className={classes.list}>
          <NavLink
            to="fragnance"
            style={({ isActive }) => {
              return { color: isActive ? "white" : "" };
            }}
          >
            Fragnance
          </NavLink>
        </li>
        <li className={classes.list}>
          <NavLink to="injection" style={({ isActive }) => {
              return { color: isActive ? "white" : "" };
            }}>Injection</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
