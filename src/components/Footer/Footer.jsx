import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__brand">
                    <h2>MAYANK SRIVASTAVA</h2>
                </div>
                <div className="footer__nav">
                    <ul className="footer__links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#extracurricular">ExtraCurricular</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__social">
                    <ul className="social__icons">
                        <li>
                            <a href="https://wa.me/qr/W54QYBVZDKDLN1" aria-label="WhatsApp">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/mayanksri02" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/i_mynk_09d?igsh=cWRpcXN0OGZwOWNm" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mayank-srivastava-2b1067247" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <p>Copyright © All rights reserved by Mayank Srivastava</p>
            </div>
        </footer>
    );
}

export default Footer;
