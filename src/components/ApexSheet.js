import React from 'react'
import legend from './img/apexsheet/legend.png'

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
            <h1 style={style.title}>Video game statistics sheet</h1>
            <div style={style.content}>
                <h3>The purpose</h3>
                <p>
                    This sheet was created to track the progress of our group of friends in the game Apex Legends. We wanted to see how much our skills were improving
                    both on an individual level and as a team, as the months of playing progressed.
                </p>
                <h3>How it works</h3>
                <p>This sheet consists of two parts: the top section that performs calculations based on the provided data, and the bottom section that provides the data.</p>
                <img src={legend} style={style.pic} alt={'Legend'} />
                <p>Cell L3: This red cell calculates the percentage of games where the individual player did not make any damage, kills, assists or knockdowns.</p>
                <p>Cell L4: This green cell calculates the percentage of games where the individual player's squad won the game (out of 20-30 squads).</p>
                <p>Row 4: The average statistics of all the games that have been won.</p>
                <p>Row 5: The map, game mode and character that have the highest number of wins, as well as the highest single amount of damage, kills, assists and knockdowns.</p>
                <p>Row 6: Average results of all games played.</p>
                <p>Row 7-16: Average results of all games played in a particular month (+ a recap of the year 2021).</p>
                <p>Column B: Average finishing position of the entire squad.</p>
                <p>Column C: Most played gamemode.</p>
                <p>Column D: Most played map.</p>
                <p>Column E: Number of games played on the most played map.</p>
                <p>Column F: Number of games played with the most played character of the individual player.</p>
                <p>Column G: Most played character of the individual player.</p>
                <p>Column H - K: Average damage/kills/assists/knockdowns of the individual player in a single game.</p>
                <p>Column L: Total number of games played by the individual player.</p>
            </div>
            <br />
            <a href={'/projects'} style={style.button}>Back</a>
        </div>
    )
}

export default Projects
