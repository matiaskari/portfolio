import React from 'react'
import Project from './Project'
import profilePic from './img/profile.jpg'
import renegeoLogo from './img/renegeologo.png'
import reaktorLogo from './img/reaktorlogo.png'

const Projects = () => {
    const descPortfolio = <div>
        <p>This portfolio that you are currently viewing is made with React.js</p>
        <p>This is a simple portfolio website made to showcase my different projects I've made. I wanted to do a small project to see how my recently obtained React.js skills were.</p>
    </div>
    const descReaktorFall21 = <div>
        <p>This website was made for the Reaktor Junior Developer pre-assignment for fall 2021.</p>
        <p>
            The solution dynamically imports a text file from Wizards of the Coast and creates an interactive rulebook with a clickable table of contents
            for reading individual chapters. It also features a filtering search field. I have also hosted a CORS proxy server on Heroku, through which
            this site imports the text file.
        </p>
        <p>This was the first full project that I completed using React.js after learning it earlier the same year. I feel that this project was a significant
            improvement over the previous project made for summer.
        </p>
    </div>
    const descReaktorSummer2021 = <div>
        <p>This website was made for the Reaktor Junior Developer pre-assignment for summer 2021.</p>
        <p>
            The project featured working with two legacy APIs which can not be modified and involved numerous iterations of dealing with
            unexpected issues that were put in place by Reaktor to test my problem-solving ability, such as:
        </p>
        <ul>
            <li>Requirement to fetch data from 9 different URLs</li>
            <li>Non-matching case in the IDs of items of each API</li>
            <li>Fetching of some data randomly failing</li>
            <li>All data being blocked by CORS</li>
        </ul>
    </div>
    const descRenegeo = <div>
        <p>This website was made as a university project with HTML, CSS and JavaScript and is the first website I ever made.</p>
        <p>The Contact page on this site features a couple of JavaScript apps made as practice projects. The first one is a weather display that
            fetches information from an API and the second is a very basic social media app made in collaboration with Sampo Rapeli.</p>
    </div>

    const style = {
        content: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto'
        },
        item: {
            width: '33%'
        },
        title: {
            padding: '0 10px 5px 10px'
        }
    }
    return (
        <div>
            <h1 style={style.title}>My projects</h1>
            <div style={style.content}>
                <Project
                    style={style.item}
                    title={'Portfolio'}
                    year={'2021'}
                    languages={'React.js, CSS'}
                    shortDesc={descPortfolio}
                    thumbnail={profilePic}
                    codeLink={'https://github.com/matiaskari/portfolio'}
                    siteLink={'https://gtrportfolio.herokuapp.com/'}
                />
                <Project
                    style={style.item}
                    title={'Magic: the Gathering Rulebook'}
                    subTitle={'Reaktor Junior Developer Assignment Fall 2021'}
                    year={'2021'}
                    languages={'React.js, Node.js'}
                    shortDesc={descReaktorFall21}
                    thumbnail={reaktorLogo}
                    codeLink={'https://github.com/matiaskari/reaktorfall21'}
                    siteLink={'https://reaktorfall21.herokuapp.com/'}
                />
                <Project
                    style={style.item}
                    title={'Inventory Management Tool'}
                    subTitle={'Reaktor Junior Developer Assignment Summer 2021'}
                    year={'2020'}
                    languages={'Javascript (vanilla), HTML, CSS'}
                    shortDesc={descReaktorSummer2021}
                    thumbnail={reaktorLogo}
                    codeLink={'https://github.com/matiaskari/reaktorThing'}
                    siteLink={'https://matiaskari.github.io/reaktorApp/reaktorApp.html'}
                />
                <Project
                    style={style.item}
                    title={'Geothermal Energy'}
                    subTitle={'School project'}
                    year={'2019'}
                    languages={'HTML, CSS, JavaScript (vanilla)'}
                    shortDesc={descRenegeo}
                    thumbnail={renegeoLogo}
                    codeLink={'https://matiaskari.github.io/geohtml.html'}
                    siteLink={'https://users.aalto.fi/~karim6/index.html'}
                />
            </div>
        </div>
    )
}

export default Projects
