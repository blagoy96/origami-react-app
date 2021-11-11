import NavigationItem from "./NavigationItem/NavigationItem";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Component } from "react";

const Header = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="listItem">
          <NavLink to="/" activestyle={{ backgroundColor: "red" }}>
            <img src="/white-origami-bird.png" alt="white-origami" />
          </NavLink>
        </li>
        <NavLink to="/" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Home</NavigationItem>
        </NavLink>
        <NavLink to="/about" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>About</NavigationItem>
        </NavLink>
        <NavLink to="/contact-us" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Contact Us</NavigationItem>
        </NavLink>
        <Link to="/" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Going to 4</NavigationItem>
        </Link>
        <Link to="/" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Going to 5</NavigationItem>
        </Link>
        <Link to="/" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Going to 6</NavigationItem>
        </Link>
        <Link to="/" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Going to 7</NavigationItem>
        </Link>
        <Link to="/" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Going to 8</NavigationItem>
        </Link>
        <Link to="/" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Going to 9</NavigationItem>
        </Link>
        <Link to="/" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Going to 10</NavigationItem>
        </Link>
        <Link to="/" activestyle={{ backgroundColor: "red" }}>
          <NavigationItem>Going to 11</NavigationItem>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
