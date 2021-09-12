import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
 return (
  <nav>
   <Link to="/about">About</Link>
   <Link to="/">Projects</Link>
   <Link to="/contact">Contact</Link>
  </nav>
 );
};

export default Nav;
