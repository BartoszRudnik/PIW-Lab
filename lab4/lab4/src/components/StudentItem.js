import React, { useState } from 'react';
import logo from '../images/avatar.gif';
import { MdMessage } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { GrFavorite } from 'react-icons/gr';
import { IconButton } from '@material-ui/core';

export const StudentItem = (props) => {
    const [isFavorite, setFavorite] = useState(false)

    return (
        <div key={props.key} className='studentItem'>
            <div className='studentItemLeft'>
                {props.studentTags && <img src={logo} />}
            </div>
            <div className='studentItemCenter'>
                <h1>{props.studentName}</h1>
                <h5>{props.studentDescription}</h5>
                <div className='userTags'>
                    <ul>
                        <li><a>Tagi:</a></li>
                        {props.studentTags && props.studentTags.map((tag, index) => {
                            return <li>
                                <a key={index}> {tag} </a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <div className='studentItemRight'>

                {props.studentTags && <h2>Wyslij wiadomosc <MdMessage /> </h2>}
                <div className='iconButton'>
                    {props.studentTags && <IconButton key="tableModeButton"
                        onClick={() => {
                            setFavorite(!isFavorite)
                            if (!isFavorite) {
                                props.addToFavorites(props.studentName, props.studentDescription, props.studentTags, props.studentId)
                            } else {
                                props.deleteFromFavorites(props.studentId)
                            }
                        }}>

                        {!isFavorite ? <a>Dodaj do ulubionych </a> : <a>Usun z ulubionych </a>}
                        {isFavorite ? <MdFavorite /> : <GrFavorite />}
                    </IconButton>}
                </div>
            </div>
        </div>
    )
}
