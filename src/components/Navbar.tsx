import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">SeeFlix</div>
        <ul className="navbar__links">
          <li className="navbar__item"><Link to="/">Home</Link></li>
          <li className="navbar__item"><Link to="/media">Media</Link></li>
          <li className="navbar__item"><Link to="/about">About</Link></li>
          <li className="navbar__item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
