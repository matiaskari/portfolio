import React from 'react'
import concept from './img/reaktor22/concept.png'
import customervalue from './img/reaktor22/customervalue.png'
import businesspotential from './img/reaktor22/businesspotential.png'
import nextsteps from './img/reaktor22/nextsteps.png'
import customerjourney1 from './img/reaktor22/customerjourney1.png'
import customerjourney2 from './img/reaktor22/customerjourney2.png'

const Projects = () => {
    const style = {
        button: { //the buttons also inherit global styles for <a>, see App.css
            padding: '4px 14px 4px 14px',
            margin: '0 10px 0 0',
            backgroundColor: '#417ec4',
            borderRadius: '2px',
        },
        item: {
            width: '33%'
        },
        title: {
            padding: '0 10px 5px 10px'
        },
        pic: {
            maxHeight: '300px',
            marginRight: '10px'
        },
        content: {
            paddingLeft: '10px'
        }
    }
    return (
        <div>
            <h1 style={style.title}>Service Design Project: Heathcare App</h1>
            <div style={style.content}>
                <h3>The task</h3>
                <p>
                    This project was a Digital Service Design project made as a pre-assignment for Reaktor's summer internship program in 2022.
                    The task was to improve the situation of a fictional private healthcare company Ahma Health in Finland, as they had fallen behind their competitors in
                    digital service development. More specifically, I was asked to come up with ways of improving their mobile app and streamlining the process
                    of what happens before, during and after a doctor's appointment.
                </p>
                <h3>My concept</h3>
                <img src={concept} style={style.pic} alt={'The Concept'} />
                <p>

                </p>
                <h3>Customer value and Business potential</h3>
                <img src={customervalue} style={style.pic} alt={'Customer value'} />
                <img src={businesspotential} style={style.pic} alt={'Business potential'} />
                <p>

                </p>
                <h3>Next steps</h3>
                <img src={nextsteps} style={style.pic} alt={'Next steps'} />
                <p>

                </p>
                <h3>Customer journeys</h3>
                <img src={customerjourney1} style={style.pic} alt={'Customer journey: Home care'} />
                <img src={customerjourney2} style={style.pic} alt={'Customer journey: Serious case'} />

            </div>
            <br />
            <a href={'/projects'} style={style.button}>Back</a>
        </div>
    )
}

export default Projects
