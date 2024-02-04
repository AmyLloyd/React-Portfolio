//https://medium.com/@ryaddev/social-media-footer-component-for-your-react-application-using-tailwindcss-97af8680a1bd
//https://mdbootstrap.com/how-to/bootstrap/footer-at-bottom/#:~:text=In%20order%20for%20this%20element,bottom%20to%20the%20class%20footer%20.
import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiGlobe,
    FiYoutube,
  } from "react-icons/fi";

  import '.././styles/Footer.css';

  const socialLinks = [
    {
      id: 1,
      icon: <FiGlobe />,
      url: "https://www.stoman.me/",
    },
    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/",
    },
    {
      id: 3,
      icon: <FiTwitter />,
      url: "https://twitter.com/",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/",
    },
    {
      id: 5,
      icon: <FiYoutube />,
      url: "https://www.youtube.com/c/",
    },
  ];
  
  const Footer = () => {
    return (
        <footer class="bg-info text-center text-lg-start fixed-bottom">
            <div className="container p-4">
                <div className="row">
                {/* Footer social links */}
                <div className="text-centered">
                    <h5 class="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                    {socialLinks.map((link) => (
                        <a
                        href={link.url}
                        target="__blank"
                        key={link.id}
                        className=""
                        >
                        <i className="p-3 m-3">{link.icon}</i>
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