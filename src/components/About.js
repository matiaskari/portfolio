import React from 'react'
import profilePic from './img/profile.jpg'

const About = () => {
    const style = {
        pic: {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            borderColor: '#70b1df',
            borderStyle: 'solid',
            borderWidth: '2px',
        },
        block: {
            paddingTop: '15px'
        },
        heading: {
            paddingTop: '10px',
            paddingBottom: '5px'
        }
    }
    return (
        <div>
            <img src={profilePic} style={style.pic} />
            <h1>About Me</h1>
            <div style={style.block}>
                <h2 style={style.heading}>Overview</h2>
                <p>I am a Master's student of Information Networks at Aalto University in the track of Social & Digital Media.
                    As a person I like to be organised but also creative and I am always eager to learn new things.
                    My main skills are programming, understanding of many different areas of IT work and the ability to help them understand each other.</p>
            </div>
            <div style={style.block}>
                <h2 style={style.heading}>Skills</h2>
                <h3 style={style.heading}>Languages</h3>
                <p>Finnish (native), English (fluent), German (good), Swedish (good)</p>
                <h3 style={style.heading}>Programming</h3>
                <p>Scala, Java, HTML, CSS, JavaScript, React.js, Node.js</p>
                <h3 style={style.heading}>Other</h3>
                <p>Microsoft Excel, Adobe Photoshop, Google Analytics</p>
            </div>
        </div>
    )
}

export default About
