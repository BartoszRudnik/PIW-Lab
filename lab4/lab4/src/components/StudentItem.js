import React from 'react'
import logo from '../images/logo_image.jpg';
import { MdMessage } from 'react-icons/md';

export const StudentItem = (props) => {    
    return (
        <div key={props.key}>
            <img src={logo} width="50" height="90" />
            <h4>{props.studentName}</h4>
            <h5>{props.studentDescription}</h5>
            <ul>
                {props.studentTags.map((tag, index) => {
                    return <h6 key={index}>{tag}</h6>
                })}
            </ul>
            <h6>Wyslij wiadomosc <MdMessage /> </h6>
        </div>
    )
}
