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
        }
    }
    const descInfo = <div>
        <p>Short description, studies include:</p>
        <ul>
            <li>Programming</li>
            <li>Communication</li>
            <li>Service Design</li>
            <li>Growth Hacking</li>
            <li>Human-Computer Interaction</li>
            <li>Groupwork and Organising</li>
            <li>Human Perception and Psychology</li>
            <li>Accounting and Finance</li>
        </ul>
    </div>
    return (
        <div>
            <h1>Education</h1>
            <div style={style.content}>
                <School
                    style={style.item}
                    major={'Information Networks'}
                    school={'Aalto University'}
                    level={'Bachelor of Science'}
                    years={'2018-2021'}
                    shortDesc={descInfo}
                    thumbnail={infoLogo}
                />
                <School
                    style={style.item}
                    major={'Computer Science'}
                    school={'Aalto University'}
                    level={'Bachelor of Science'}
                    years={'2015-2017'}
                    shortDesc={descInfo}
                    thumbnail={tikLogo}
                />
            </div>
        </div>
    )
}

export default Education