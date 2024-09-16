import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutImage from "../../assets/aboutImage.png";
import resume from "../../assets/Resume.pdf";
import "./about.css";

const About = () => {
    return (
        <div className="about-container" id="about">
            <p className="about-title" id="about">About me</p>
            <div className="about">
                <div className="image-about">
                    <img src={aboutImage} alt="About Image" />
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                </div>
                <div className="about-content">
                    <p>
                        Hello!! I'm Mayank Srivastava, hailing from Raebareli, Uttar Pradesh. Currently pursuing a Bachelor of Technology with CSE Stream in my third year at ABES Engineering College, Ghaziabad, I am passionate about crafting web applications using the MERN stack.
                    </p>
                    <p>
                        My enthusiasm extends to immersing myself in diverse projects that challenge my skills. I am dedicated, patient, and committed to living life to its fullest.
                    </p>
                    <p>
                        Here are a few of the technologies I have been working with recently:
                    </p>
                    <div className="tech">
                        <div className="tech-item">
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="tech-item">
                            <ul>
                                <li>Express.js</li>
                                <li>Java</li>
                            </ul>
                        </div>
                    </div>
                    <div className="button">
                        <a href={resume} className="btn-download" download="Mayank Resume.pdf">
                            Download Resume
                        </a>
                        <a href="#contact" className="btn-talk">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
