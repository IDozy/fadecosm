import React from 'react';
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
                {/*<div className="sb__footer-below-links">
                    <a href="">
                        <div>
                            <p>termios y condiciones</p>
                        </div>
                    </a>
                    <a href="">
                        <div>
                            <p>privacy</p>
                        </div>
                    </a>
                    <a href="">
                        <div>
                            <p>security</p>
                        </div>
                    </a>

    </div>*/}

            </div>

        </div>
    )
}

export default Footer;
