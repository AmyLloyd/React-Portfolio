// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import Navbar from './OffcanvasNavbar';
import './styles.css';

export default function Nav() {
  const location = useLocation();
  // The Navbar UI component will render each of the Link elements in the links prop
  // The useLocation is used to identify a state variable for the conditional rendering of the nav-link as active
  return (
    <Navbar
      links={[
        <Link key={1} className={location.state === 'about' ? 'nav-link active button-radius' : 'nav-link button-radius'} to="/" state="about" >About Me</Link>,
        <Link key={2} className={location.state === 'portfolio' ? 'nav-link active button-radius' : 'nav-link button-radius'} to="/portfolio" state="portfolio">Portfolio</Link>,
        // <Link key={3} className={location.state === 'contact' ? 'nav-link active button-radius' : 'nav-link button-radius'} to="/contact" state="contact">Contact Me</Link>,
        // <Link key={4} className={location.state === 'resume' ? 'nav-link active button-radius' : 'nav-link button-radius'} to="/resume" state="resume">Resume</Link>,
      ]}
    />
  );
}