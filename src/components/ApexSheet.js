import React from 'react'
import legend from './img/apexsheet/legend.png'
import formula from './img/apexsheet/formula.png'
import excel from './img/apexsheet/Match_stats.xlsx'

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
                <p>
                    The data was collected by hand over 9 months of playing, with 1653 matches played. The sheet was made and maintained in Google Sheets, with the import
                    to Microsoft Excel made solely for the purpose of providing a downloadable version for this portfolio.
                </p>
                <img src={formula} style={style.pic} alt={'A formula'} />
                <h3>How it works</h3>
                <p>
                    This sheet consists of two parts: the top section that performs calculations based on the provided data, and the bottom section that provides the data.
                    Each row of the bottom section represents a separate match.
                </p>
                <img src={legend} style={style.pic} alt={'Legend'} />
                <p>
                    <b>Cell L3:</b> This red cell calculates the percentage of games where the individual player did not make any damage, kills, assists or knockdowns.
                    The word "Audi" above it represents the four adjacent zeros that are marked in the row when damage, kills, assists and knockdowns are all zero.<br />
                    <b>Cell L4:</b> This green cell calculates the percentage of games where the individual player's squad won the game (out of 20-30 squads).<br />
                    <b>Row 4:</b> The average statistics of all the games that have been won.<br />
                    <b>Row 5:</b> The map, game mode and character that have the highest number of wins, as well as the highest single amount of damage, kills, assists and knockdowns.<br />
                    <b>Row 6:</b> Average results of all games played.<br />
                    <b>Row 7-16:</b> Average results of all games played in a particular month (+ a recap of the year 2021).<br />
                    <b>Column B:</b> Average finishing position of the entire squad.<br />
                    <b>Column C:</b> Most played gamemode.<br />
                    <b>Column D:</b> Most played map.<br />
                    <b>Column E:</b> Number of games played on the most played map.<br />
                    <b>Column F:</b> Number of games played with the most played character of the individual player.<br />
                    <b>Column G:</b> Most played character of the individual player.<br />
                    <b>Column H - K:</b> Average damage/kills/assists/knockdowns of the individual player in a single game.<br />
                    <b>Column L:</b> Total number of games played by the individual player.
                </p>
            </div>
            <br />
            <a href={'/projects'} style={style.button}>Back</a>
            <a href={excel} style={style.button} download>Download .xlsx</a>
        </div>
    )
}

export default Projects
