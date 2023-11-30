import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../images/FadecoLogosinbg.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    {
      title: "Fadeco San Martin",
      items: [
        <img
          style={{ width: "90%" }}
          src={logo}
          alt="Descripción de la imagen"
          key="imagen"
        />,
      ],
    },
    {
      title: "Nuestros Horarios",

      items: [
        "Lunes - viernes:",
        "7:00 AM - 12:00 PM.",
        "2:00 PM a 6:00 PM.",
        "Sábados:",
        "7:30 AM a 1:00 PM",
      ],
    },
    {
      title: "Contactanos",
      items: [
        "+51 955 445 875",
        "+51 952 066 393",
        "+51 976 631 901",
        "ventas@fadecosanmartin.com.pe",
        "fadecosanmartin321@gmail.com",
      ],
    },
  ];

  const socialMediaIcons = [
    { icon: faFacebook, description: "Facebook de FADECO San Martin" },
    /* { icon: faTwitter },*/
    { icon: faInstagram, description: "Instagram de FADECO San Martin" },
    /*{ icon: faLinkedin },*/
  ];

  const renderLinks = (title, items) => (
    <div className="sb__footer-links-div" key={title}>
      <h4>{title}</h4>
      {items.map((item, index) => (
        <div key={index}>
          <br />
          <p className="sb__footer-link-item">{item}</p>
        </div>
      ))}
    </div>
  );

  const renderSocialMediaIcons = () => (
    <div className="sb__footer-links-div">
      <h4>Síguenos</h4>
      <div className="socialmedia">
        {socialMediaIcons.map((item, index) => (
          <p key={index}>
            <a
              href={getSocialMediaLink(item.icon)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.description}
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
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          {links.map((link, index) => renderLinks(link.title, link.items))}
          {renderSocialMediaIcons()}
        </div>
        <hr />
        <div className="sb__footer-below ">
          <div
            className="sb__footer-copyright"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {/* <a className="link-desarrollo" href="https://github.com/IDozy" target="_blank" rel="noopener noreferrer">Desarrollado por Dozgson</a>*/}
            <p>@Fadeco San Martin. Todos los derechos reservados Cajamarca-{year}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
