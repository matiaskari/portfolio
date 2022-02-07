import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import backgroundImage from './components/img/DSC_0463.JPG'

//Components
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import NaistenLinja from './components/NaistenLinja'
import Reaktor22 from './components/Reaktor22'
import ApexSheet from './components/ApexSheet'

const App = () => {
    const styles = {
        container: { //Creating the 2-column layout
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            width: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: 'white', //If background image is unavailable
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        },
        about: {
            flex: '1', //Table of Contents width
            width: '20%',
            padding: '20px',
            margin: '10px',

            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '2px',
            borderColor: '#417ec4',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
        },
        content: {
            flex: '3', //Rules width
            width: '70%',
            padding: '20px',
            margin: '10px',
            marginLeft: '0px',

            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '2px',
            borderColor: '#417ec4',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
        }
    }

    return (
        <Router className="App">
            <Header />
            <div style={styles.container}>
                <div style={styles.about}><About /></div>
                <div style={styles.content}>
                    <Switch>
                        <Route path="/education"><Education /></Route>
                        <Route path="/naistenlinja"><NaistenLinja /></Route>
                        <Route path="/reaktor22"><Reaktor22 /></Route>
                        <Route path="/apexsheet"><ApexSheet /></Route>
                        <Route path="/"><Projects /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;
