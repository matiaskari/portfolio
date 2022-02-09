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
                <p>
                    My concept was to give the doctor some ready-made tools that they could use to provide the patient with instructions without needing to explain
                    everything to every patient separately. This would be done via a premade library of self-care instructions where the doctor could choose
                    the most applicable ones for that particular case. If appropriate instructions don't exist, the doctor could explain the instructions
                    the old way.
                </p>
                <img src={concept} style={style.pic} alt={'The Concept'} />
                <p>
                    Lots of the time-consuming paperwork like sick-leave doctor's notes and easily forgettable things like keeping track of appointments, treatments, and
                    prescribed medications (with prescription or not) would be shown and reminded of via the app so that everything can be found in the same place.
                </p>
                <h3>Customer value and Business potential</h3>
                <p>
                    Streamlining the entire process would improve the value for the customer. As the appointments take less time per person, there would be time for
                    more of them. Also having the treatment instructions easily accessible and follow-up questions easy to do means the patient needs to spend less time
                    on their treatment and can possibly reduce the number of required doctor's appointments.
                </p>
                <img src={customervalue} style={style.pic} alt={'Customer value'} />
                <img src={businesspotential} style={style.pic} alt={'Business potential'} />
                <h3>Next steps</h3>
                <p>
                    The next steps in the design process would obviously be to present these suggestions to the intended users: both doctors and patients.
                    Creating a tangible prototype would be time-consuming but possibly beneficial in getting more in-depth results from the target group interviews.
                </p>
                <img src={nextsteps} style={style.pic} alt={'Next steps'} />
                <p>
                    A very important part of Service Design is getting a thorough picture of what the situation is currently. This assignment did not provide a thorough
                    explanation of the current situation, so this project has been done largely based on assumptions. In a real setting, getting an idea of the current
                    situation would be the first thing to do.
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
