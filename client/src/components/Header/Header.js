import NavigationItem from "./NavigationItem/NavigationItem";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="listItem">
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            <img src="/white-origami-bird.png" alt="white-origami" />
          </NavLink>
        </li>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Home</NavigationItem>
        </NavLink>
        <NavLink
          to="/about"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>About</NavigationItem>
        </NavLink>
        <NavLink
          to="/contact-us"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Contact Us</NavigationItem>
        </NavLink>
        <Link
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Going to 4</NavigationItem>
        </Link>
        <Link
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Going to 5</NavigationItem>
        </Link>
        <Link
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Going to 6</NavigationItem>
        </Link>
        <Link
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Going to 7</NavigationItem>
        </Link>
        <Link
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Going to 8</NavigationItem>
        </Link>
        <Link
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Going to 9</NavigationItem>
        </Link>
        <Link
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Going to 10</NavigationItem>
        </Link>
        <Link
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <NavigationItem>Going to 11</NavigationItem>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
