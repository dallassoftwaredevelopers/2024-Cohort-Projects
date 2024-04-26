// Footer.tsx

import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import social media icons from react-icons/fa


const Footer = () => {
  return (
    <footer>
      <p>&#169;2024 Pantry Pro</p> 
      <div className="spacer"></div> {/* Spacer */}
      <p>Contact Us</p> {/* Example additional content */}
    <div className="spacer"></div> {/* Spacer */}
    <div className="social-icons">
        <a href="#" className="social-icon"><FaFacebookF /></a>
        <a href="#" className="social-icon"><FaLinkedin /></a>
        <a href="#" className="social-icon"><FaYoutube /></a>
        <a href="#" className="social-icon"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
