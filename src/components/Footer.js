import "../styles/footer.css";
import { Link } from 'react-router-dom';
import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className="footer" data-aos="fade-up">
    <div className="footer-up">
      <div className="footerId">
        <div className="log">
          <img
            src={logo}
            alt=""
            className="footerLogo"
          /> <p>YAFET</p>
        </div>
        <p className="footerDesc">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="footerList">
        <ul className="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/get-started">Get Started</Link></li>
        </ul>
      </div>
    </div>

    <div className="footer-down">
      <div className="social-icon">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className=""
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;