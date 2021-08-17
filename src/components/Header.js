import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    /*const styles = {
        header: {
            position: 'relative',
            color: 'white',
            float: 'left',
            width: '100%',
            display: 'block',
            backgroundColor: '#131313',
            height: '5em',

            borderColor: '#c4953f',
            borderStyle: 'none none solid none',
            borderWidth: '2px',
        },
        headerLink: {
            color: 'white',
            textDecoration: 'none',
            padding: '6px'
        },
        headerLink:hover: {
            transition: ease -in -out;
    background - color: #cfcfcf;
}

header h1 {
    position: absolute;
    top: 50 %;
    left: 1em;
    transform: translateY(-50 %);
}
header nav {
    position: absolute;
    top: 50 %;
    right: 2em;
    transform: translateY(-50 %);
}
header nav ul {
    list - style - type: none;
    display: inline - block;
    margin - right: 1em;
}
header nav ul a {
    text - decoration: none;
}
    }*/
    return (
        <header className="header">
            <h1>Matias Kari</h1>
            <nav>
                <Link className="headerLink" to="/projects">Projects</Link>
                <Link className="headerLink" to="/education">Education</Link>
            </nav>
        </header>
    )
}

export default Header;