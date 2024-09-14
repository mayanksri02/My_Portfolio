import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myImage from "../../assets/myImage.png";
import "./hero.css";

const Hero = () => {
    return (
        <div>
            <div className="hero-container">
                <div className="main">
                    <div className="images">
                        <img src={myImage} alt="Mayank Srivastava" className="img-w" />
                    </div>
                    <div className="info">
                        <h1>Mayank Srivastava</h1>
                        <p>MERN Developer</p>
                    </div>
                    <div className="social">
                        <a href="https://github.com/mayanksri02">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/mayank-srivastava-2b1067247">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://www.instagram.com/i_mynk_09d?igsh=cWRpcXN0OGZwOWNm">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://wa.me/qr/W54QYBVZDKDLN1">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
