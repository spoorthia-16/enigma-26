import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="mc-navbar">
      <div className="nav-logo">ENIGMA '26</div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <a href="/Rulebook.pdf">RuleBook</a>
      </div>
    </nav>
  );
};

export default Navbar;