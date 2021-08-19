import React from 'react'

const Project = ({ title, subTitle, year, languages, shortDesc, thumbnail, codeLink, siteLink }) => {
    const style = {
        content: {
            margin: '10px',
            padding: '20px 20px 0 20px',
            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '2px',
            borderColor: '#417ec4',
            backgroundColor: '#eee'
        },
        pic: {
            maxWidth: '290px',
            maxHeight: '290px',
            width: '58%',
            margin: '4% 21% 5% 21%',
            borderRadius: '20px',
        },
        button: { //the buttons also inherit global styles for <a>, see App.css
            padding: '4px 14px 4px 14px',
            margin: '0 10px 0 0',
            backgroundColor: '#70b1df',
            borderRadius: '2px',
        },
        title: {
            padding: '0 0 10px 0'
        },
        hidden: {
            visibility: 'hidden'
        }
    }
    return (
        <div style={style.content}>
            <img src={thumbnail} style={style.pic} />
            <h2 style={style.title}>{title}</h2>
            <h3 style={style.title}>{subTitle}</h3>
            <p>Year: {year}</p>
            <p>Languages: {languages}</p>
            {shortDesc}
            <a href={codeLink} style={style.button}>View code</a>
            <a href={siteLink} style={style.button}>Visit site</a>
            <p style={style.hidden}>_</p>
        </div>
    )
}

export default Project