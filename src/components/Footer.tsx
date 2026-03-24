import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">SeeFlix</div>
        <nav className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/media">Media</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer__copy">© 2025 Seeflix. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
