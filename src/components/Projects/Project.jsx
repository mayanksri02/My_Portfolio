import { useState } from 'react';
import breatheImage from "../../assets/breathe-easy-image.png";
import emprosImage from "../../assets/empros-image.png";
import portfolioImage from "../../assets/portfolio-image.png";
import salaahImage from "../../assets/salaah-image.png";
import techImage from "../../assets/tech-image.png";
import './project.css';

const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="projects-container">
            <p className="project-title">Projects</p>
            <div className="project-buttons">
                <button onClick={() => handleCategoryChange('all')}>All</button>
                <button onClick={() => handleCategoryChange('individual')}>Individual</button>
                <button onClick={() => handleCategoryChange('contributions')}>Contributions</button>
            </div>

            <div className="projects-display">
                {(selectedCategory === 'all' || selectedCategory === 'individual') && (
                    <div className="project-category">
                        <div className="project-card">
                            <img src={portfolioImage} alt="My Portfolio" />
                            <h2>My Portfolio</h2>
                            <div className="project-more-info">
                                <a href="#">View Project</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={breatheImage} alt="Breathe Easy" />
                            <h2>Breathe Easy</h2>
                            <div className="project-more-info">
                                <a href="https://breatheasy24.netlify.app">View Project</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={emprosImage} alt="Empros" />
                            <h2>EMPROS</h2>
                            <div className="project-more-info">
                                <a href="https://emprosabesec.netlify.app/">View Project</a>
                            </div>
                        </div>
                    </div>
                )}

                {(selectedCategory === 'all' || selectedCategory === 'contributions') && (
                    <div className="project-category">
                        <div className="project-card">
                            <img src={salaahImage} alt="Salaah: The Mentor Community" />
                            <h2>Salaah: The Mentor Community</h2>
                            <div className="project-more-info">
                                <a href="https://www.salaah.org.in/">View Project (Ongoing)</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={techImage} alt="TechFest" />
                            <h2>TechFest</h2>
                            <div className="project-more-info">
                                <a href="#">View Project</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;
