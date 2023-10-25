import React from "react";
import "../../components/footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const socialMediaIcons = [
    { icon: faFacebook },
    { icon: faTwitter },
    { icon: faInstagram },
    /*{ icon: faLinkedin },*/
  ];

  const links = [
    {
      title: "955445875 / 952066393 / 976631901",
      icon: faPhoneFlip,
    },
    {
      title: "ventas@fadecosanmartin.com.pe",
      icon: faEnvelope,
    },
    
  ];

  const renderLinks = (title, icon) => (
    <div className="sb__footer-links-div" key={title}>
      <h4 style={{marginBottom:"0"}}>
        <FontAwesomeIcon icon={icon} style={{marginRight:"1rem"}} />
        <p style={{display:"inline" }} >
          {title}
        </p>
      </h4>
    </div>
  );

  const renderSocialMediaIcons = () => (
    <div className="sb__footer-links-div" style={{ margin: "0.5rem 0 0 0" }}>
      <div className="socialmedia">
        {socialMediaIcons.map((item, index) => (
          <p key={index}>
            <a
              href={getSocialMediaLink(item.icon)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </p>
        ))}
      </div>
    </div>
  );

  const getSocialMediaLink = (icon) => {
    switch (icon) {
      case faFacebook:
        return "https://web.facebook.com/profile.php?id=100064091890509";
      case faTwitter:
        return "https://twitter.com/TuCuentaDeTwitter";
      case faInstagram:
        return "https://www.instagram.com/fadeco_san_martin/";
      case faLinkedin:
        return "https://www.linkedin.com/in/TuPerfilDeLinkedIn";
      default:
        return "#";
    }
  };

  return (
    <div className="header-links">
      <div className="sb__footer-links" style={{ marginBottom: "0" }}>
        {links.map((link) => renderLinks(link.title, link.icon))}
        {renderSocialMediaIcons()}
      </div>
    </div>
  );
};

export default Header;
