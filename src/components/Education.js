import React from 'react'
import School from './School'
import infoLogo from './img/info.png'
import tikLogo from './img/tik.png'

const Education = () => {
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
    const descMaster = <div>
        <p>I am currently studying in the Master's program of Social & Digital Media, which is a part of the Information Networks major.</p>
        <p>My studies (will) include:</p>
        <ul>
            <li>Full Stack Web Development</li>
            <li>Design of Web Services</li>
            <li>Media manipulation</li>
            <li>Effect of Technology on Society</li>
            <li>Information Visualization</li>
            <li>Social Media</li>
            <li>Analytics</li>
            <li>Interaction Design</li>
        </ul>
    </div>
    const descInfo = <div>
        <p>
            After two years at Computer Science I wanted something slightly more human-centered but still within the realm of information technology,
            so I switched to Information Networks. Here I learned how humans and computers work well together as well as some things about how
            to lead people, how to design services and how to do financial calculations.
        </p>
        <p>Here I also completed my Bachelor's Degree.</p>
        <p>My studies included:</p>
        <ul>
            <li>Programming</li>
            <li>Communication</li>
            <li>Service Design</li>
            <li>Growth Hacking</li>
            <li>Human-Computer Interaction</li>
            <li>Groupwork and Organizing</li>
            <li>Human Perception and Psychology</li>
            <li>Accounting and Finance</li>
        </ul>
    </div>
    const descTik = <div>
        <p>
            I started university in Computer Science due to general interest in computers and video games. Here I learned the basics of programming in Scala and
            other base level subjects such as math and databases.
        </p>
        <p>After two years of Computer Science, I spent a year to complete my mandatory military service.</p>
        <p>My studies included:</p>
        <ul>
            <li>Programming</li>
            <li>Human-Computer Interaction</li>
            <li>Databases</li>
            <li>Mathematics</li>
        </ul>
    </div>
    return (
        <div>
            <h1 style={style.title}>Education</h1>
            <div style={style.content}>
                <School
                    style={style.item}
                    major={'Information Networks'}
                    school={'Aalto University'}
                    level={'Master of Science'}
                    years={'2021- (current)'}
                    shortDesc={descMaster}
                    thumbnail={infoLogo}
                />
                <School
                    style={style.item}
                    major={'Information Networks'}
                    school={'Aalto University'}
                    level={'Bachelor of Science'}
                    years={'2018-2020'}
                    shortDesc={descInfo}
                    thumbnail={infoLogo}
                />
                <School
                    style={style.item}
                    major={'Computer Science'}
                    school={'Aalto University'}
                    level={'Bachelor of Science'}
                    years={'2015-2017'}
                    shortDesc={descTik}
                    thumbnail={tikLogo}
                />
            </div>
        </div>
    )
}

export default Education