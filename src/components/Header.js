import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1>Matias Kari</h1>
            <nav>
                <Link className="headerLink" to="/">Projects</Link>
                <Link className="headerLink" to="/education">Education</Link>
            </nav>
        </header>
    )
}

export default Header;