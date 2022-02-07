import React from 'react'
import Project from './Project'
import profilePic from './img/profile.jpg'
import renegeoLogo from './img/renegeologo.png'
import reaktorLogo from './img/reaktorlogo.png'
import naistenlinjaLogo from './img/naistenlinjalogo.png'
import googlexcelLogo from './img/googleexcellogo.png'

const Projects = () => {
    const descApexSheet = <div>
        <p>This Excel sheet contains numerical statistics collected from approximately 9 months of playing the video game Apex Legends.</p>
        <p>
            The sheet makes monthly complex calculations based on the data from 1653 matches, regarding average damage, kills, assists, knockdowns and team finishing position,
            as well as the most common character that each player used and the most common map that the match was played on.
        </p>
    </div>
    const descReaktorSummer2022 = <div>
        <p>This project was made as the pre-assignment for Reaktor's Junior Service Designer position for summer 2022.</p>
        <p>The assignment described a fictional private healthcare company working in Finland that wanted to bring their digital services up to par with their competitors.</p>
        <p>My solution featured multiple possible ways of streamlining the customer journey from booking an appointment to receiving care and everything that happens after.</p>
    </div>
    const descSDP = <div>
        <p>
            This project was a Digital Service Design project created in a team of 4 as a university course work for Naisten Linja, a non-profit organization that helps
            women who have experienced violence or who worry that they might experience it in the future.
        </p>
        <p>
            The solution was to restructure their website to be more user friendly and to create an awareness campaign, because during the design process it became
            apparent that the two biggest problems were people's overall lack of awareness of their services and the difficulty of use once they did reach the website.
        </p>
    </div>
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
                    title={'Video game statistics sheet'}
                    year={'2021 - 2022'}
                    info1={'Technologies: Google Sheets, converted to Microsoft Excel'}
                    shortDesc={descApexSheet}
                    thumbnail={googlexcelLogo}
                    button1name={'Read more'}
                    button1link={'/apexsheet'}
                />
                <Project
                    style={style.item}
                    title={'Service Design: Heathcare App'}
                    subTitle={'Reaktor Junior Service Designer Assignment Summer 2022'}
                    year={'2022'}
                    shortDesc={descReaktorSummer2022}
                    thumbnail={reaktorLogo}
                    button1name={'Read more'}
                    button1link={'/reaktor22'}
                />
                <Project
                    style={style.item}
                    title={'Societal Design Project: Naisten Linja'}
                    year={'2021'}
                    shortDesc={descSDP}
                    thumbnail={naistenlinjaLogo}
                    button1name={'Read more'}
                    button1link={'/naistenlinja'}
                />
                <Project
                    style={style.item}
                    title={'Portfolio'}
                    year={'2021'}
                    info1={'Languages: React.js, CSS'}
                    shortDesc={descPortfolio}
                    thumbnail={profilePic}
                    button1name={'View code'}
                    button1link={'https://github.com/matiaskari/portfolio'}
                    button2name={'Visit site'}
                    button2link={'https://gtrportfolio.herokuapp.com/'}
                />
                <Project
                    style={style.item}
                    title={'Magic: the Gathering Rulebook'}
                    subTitle={'Reaktor Junior Developer Assignment Fall 2021'}
                    year={'2021'}
                    info1={'Languages: React.js, Node.js'}
                    shortDesc={descReaktorFall21}
                    thumbnail={reaktorLogo}
                    button1name={'View code'}
                    button1link={'https://github.com/matiaskari/reaktorfall21'}
                    button2name={'Visit site'}
                    button2link={'https://reaktorfall21.herokuapp.com/'}
                />
                <Project
                    style={style.item}
                    title={'Inventory Management Tool'}
                    subTitle={'Reaktor Junior Developer Assignment Summer 2021'}
                    year={'2020'}
                    info1={'Languages: Javascript (vanilla), HTML, CSS'}
                    shortDesc={descReaktorSummer2021}
                    thumbnail={reaktorLogo}
                    button1name={'View code'}
                    button1link={'https://github.com/matiaskari/reaktorThing'}
                    button2name={'Visit site'}
                    button2link={'https://matiaskari.github.io/reaktorApp/reaktorApp.html'}
                />
                <Project
                    style={style.item}
                    title={'Geothermal Energy'}
                    subTitle={'School project'}
                    year={'2019'}
                    info1={'Languages: HTML, CSS, JavaScript (vanilla)'}
                    shortDesc={descRenegeo}
                    thumbnail={renegeoLogo}
                    button1name={'View code'}
                    button1link={'https://matiaskari.github.io/geohtml.html'}
                    button2name={'Visit site'}
                    button2link={'https://users.aalto.fi/~karim6/index.html'}
                />
            </div>
        </div>
    )
}

export default Projects
