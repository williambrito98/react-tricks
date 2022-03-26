import React from 'react'
import './style.css'

const GreyImg = (props) => {
    return (
        <img src={props.img_url} className={props.grey ? 'bg-grey' : ''} alt=''></img>
    )
}


export default GreyImg
