import React from 'react'

const Project = ({ name, year, languages, shortDesc, thumbnail, codeLink, siteLink }) => {
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
                    <td><h2>{name}</h2></td>
                </tr>
                <tr>
                    <td><p>Year: {year}</p></td>
                </tr>
                <tr>
                    <td><p>Languages: {languages}</p></td>
                </tr>
                <tr><td>{shortDesc}</td></tr>
            </table>
            <a href={codeLink} style={style.button}>View code</a>
            <a href={siteLink} style={style.button}>Visit site</a>
            <p style={style.hidden}>_</p>
        </div>
    )
}

export default Project