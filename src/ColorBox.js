import React from 'react';
import './ColorBox.css'

const ColorBox = (props) => {
    return <div className='ColorBox' 
    style={{backgroundColor: `${props.color}`}}
    onClick={() => props.clickedColor(props.color)}>
        {props.color}
    </div>
}

export default ColorBox;