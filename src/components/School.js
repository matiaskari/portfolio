import React from 'react'

const School = ({ major, school, level, years, shortDesc, thumbnail }) => {
    const style = {
        content: {
            margin: '10px',
            padding: '10px 10px 0 10px',
            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '2px',
            borderColor: '#417ec4',
            backgroundColor: '#eee'
        },
        pic: {
            maxWidth: '60%',
            margin: '4% 20% 5% 20%',
            borderRadius: '20px',
        },
        button: { //the buttons also inherit global styles for <a>, see App.css
            padding: '4px 14px 4px 14px',
            marginLeft: '8px',
            backgroundColor: '#70b1df',
            borderRadius: '2px',
        },
        hidden: {
            visibility: 'hidden'
        }
    }
    return (
        <div style={style.content}>
            <img src={thumbnail} style={style.pic} />
            <table style={style.table}>
                <tr>
                    <td><h2>{major}</h2></td>
                </tr>
                <tr>
                    <td><h3>{school}</h3></td>
                </tr>
                <tr>
                    <td><p>{level}</p></td>
                </tr>
                <tr>
                    <td><p>Years: {years}</p></td>
                </tr>
                <tr><td>{shortDesc}</td></tr>
            </table>
            <p style={style.hidden}>_</p>
        </div>
    )
}

export default School