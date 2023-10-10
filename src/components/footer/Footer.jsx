/*import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>Sm</h4>
                        <a href="/#">
                            <p>link</p>
                        </a>
                        <a href="/#">
                            <p>link</p>
                        </a>
                        <a href="/#">
                            <p>link</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Sm</h4>
                        <a href="/#">
                            <p>link</p>
                        </a>
                        <a href="/#">
                            <p>link</p>
                        </a>
                        <a href="/#">
                            <p>link</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Sm</h4>
                        <a href="/#">
                            <p>link</p>
                        </a>
                        <a href="/#">
                            <p>link</p>
                        </a>
                        <a href="/#">
                            <p>link</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Sm</h4>
                        <div className="socialmedia">
                            <p>
                                <FontAwesomeIcon icon={faFacebook} />
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faTwitter} />
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faInstagram} />
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </p>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Dozgson. all right reserved.
                        </p>
                    </div>
                </div>
               

            </div>

        </div>
    )
}

export default Footer;
*/import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const year = new Date().getFullYear();

    const links = [
        { title: "Fadeco San Martin", items: ["Nos dedicamos a la fabricación de productos de concreto prefabricado para el sector industrial y saneamiento.", "Contamos con más de 15 años de experiencia.", "Lunes a viernes:  8.00 am a 5.00 pm. Sábados: 8.00 am a 12.00 pm"] },
        { title: "Nuestros Productos", items: ["– Buzones", "– Cajas de registro para desagüe", "– Caja porta medidor de agua", "– Caja condominial" ,"– Marco de fierro fundido"] },
        { title: "Contactanos", items: ["+51 955 445 875", "link", "link"] },
    ];

    const socialMediaIcons = [
        { icon: faFacebook },
        { icon: faTwitter },
        { icon: faInstagram },
        /*{ icon: faLinkedin },*/
    ];

    const renderLinks = (title, items) => (
        <div className="sb__footer-links-div" key={title}> 
            <h4>{title}</h4>
            {items.map((item, index) => (
                <a  key={index}>
                    <p>{item}</p>
                </a>
            ))}
        </div>
    );
    

    const renderSocialMediaIcons = () => (
        <div className="sb__footer-links-div">
            <h4>Síguenos</h4>
            <div className="socialmedia">
                {socialMediaIcons.map((item, index) => (
                    <p key={index}>
                        <a href={getSocialMediaLink(item.icon)} target="_blank" rel="noopener noreferrer">
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
        <div className='footer'>
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    {links.map((link, index) => (
                        renderLinks(link.title, link.items)
                    ))}
                    {renderSocialMediaIcons()}
                </div>
                <hr />
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>@{year} Dozgson. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
