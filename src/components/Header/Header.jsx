import { useState } from 'react';
import logo from "../../assets/logo.png";
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <header className="container">
            <div className="page-header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu-icon" onClick={handleMenuToggle}>
                    <i className="fas fa-bars"></i> {/* Three horizontal lines icon */}
                </div>
            </div>
            <nav className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#about">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
