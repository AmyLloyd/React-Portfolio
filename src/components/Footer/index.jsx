//https://medium.com/@ryaddev/social-media-footer-component-for-your-react-application-using-tailwindcss-97af8680a1bd
//https://mdbootstrap.com/how-to/bootstrap/footer-at-bottom/#:~:text=In%20order%20for%20this%20element,bottom%20to%20the%20class%20footer%20.

import {
    FiGithub,
    FiLinkedin,
  } from "react-icons/fi";

import './styles.css';

  const socialLinks = [
    {
      id: 1,
      icon: <FiGithub />,
      url: "https://github.com/AmyLloyd",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/amy-lloyd-2a1028135/",
    },
  ];
  
  const Footer = () => {
    return (
        <footer className="footer fixed-bottom">
            <div className="container p-1">
                <div className="row">
                {/* Footer social links */}
                  <div className="text-center">
                      <h5 className="">Links</h5>
                      <ul className="list-unstyled">
                      {socialLinks.map((link) => (
                          <a
                          href={link.url}
                          target="__blank"
                          key={link.id}
                          className=""
                          >
                          <i className="px-3 py-1 mx-3 my-1">{link.icon}</i>
                          </a>
                      ))}
                      </ul>
                  </div>
                </div>
            </div>
      </footer>  
    );
};
  
  export default Footer;