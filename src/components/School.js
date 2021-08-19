import React from 'react'

const School = ({ major, school, level, years, shortDesc, thumbnail }) => {
    const style = {
        content: {
            margin: '10px',
            padding: '10px 20px 10px 20px',
            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '2px',
            borderColor: '#417ec4',
            backgroundColor: '#eee'
        },
        pic: {
            maxWidth: '60%',
            margin: '4% 20% 5% 20%',
            borderRadius: '5px',
        },
        title: {
            padding: '0 0 10px 0'
        }
    }
    return (
        <div style={style.content}>
            <img src={thumbnail} style={style.pic} />
            <h2 style={style.title}>{major}</h2>
            <h3 style={style.title}>{school}</h3>
            <p>Level: {level}</p>
            <p>Years: {years}</p>
            {shortDesc}
        </div>
    )
}

export default School