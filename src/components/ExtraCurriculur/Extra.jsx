import salaah from "../../assets/salaahLogo.png";
import techno from "../../assets/technologo.jpg";
import "./extra.css";

const Extra = () => {
    return (
        <div className="extra-contain" id="extra">
            <p className="extra-title">ExtraCurricular</p>
            <div className="extra-container">
                <div className="extra-card">
                    <img src={techno} alt="Technovation Logo" />
                    <p className="extra-card-position">President (Batch- 2024-2025)</p>
                    <p className="extra-card-title">Technovation- the technical club of CSE</p>
                    <div className="extra-more-info">
                        <a href="https://www.instagram.com/technovationabes?igsh=N3E5emVsdDh0dHhw" target="_blank" rel="noopener noreferrer">
                            More info
                        </a>
                    </div>
                </div>

                <div className="extra-card">
                    <img src={salaah} alt="Salaah Logo" />
                    <p className="extra-card-position">Executive (Batch- 2024-2025)</p>
                    <p className="extra-card-title">Salaah: The Mentor Community</p>
                    
                    <div className="extra-more-info">
                        <a href="https://www.instagram.com/salaah_abesec?igsh=MTU3aGF5b3E4ZHhvZw==" target="_blank" rel="noopener noreferrer">
                            More info
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;
