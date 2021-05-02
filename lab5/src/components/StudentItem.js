import React, { useState } from 'react';
import logo from '../images/avatar.gif';
import { MdMessage } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { GrFavorite } from 'react-icons/gr';
import { IconButton } from '@material-ui/core';
import StudentPopup from './StudentPopup';

export const StudentItem = (props) => {
    const [isFavorite, setFavorite] = useState(false)
    const [isEdited, setEdited] = useState(false)

    const togglePop = () => {
        setEdited(!isEdited)
    };

    return (
        <div key={props.key} className='studentItem'>
            <div className='studentItemLeft'>
                {props.studentTags && <img alt='' src={logo} />}
            </div>
            <div className='studentItemCenter'>
                <h1>{props.studentName}</h1>
                <h5>{props.studentDescription}</h5>
                <div className='userTags'>
                    <ul>
                        <li>Tagi:</li>
                        {props.studentTags && props.studentTags.map((tag, index) => {
                            return <li key={index}>
                                {tag}
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

                        {!isFavorite ? <>Dodaj do ulubionych</> : <>Usun z ulubionych</>}
                        {isFavorite ? <MdFavorite /> : <GrFavorite />}
                    </IconButton>}
                </div>
                <div>
                    <div className="iconButton" onClick={togglePop}>
                        <button>Edytuj</button>
                    </div>
                    {isEdited ? <StudentPopup editStudent={props.editStudent} toggle={togglePop} studentId={props.studentId} studentName={props.studentName} studentDescription={props.studentDescription} studentTags={props.studentTags}/> : null}
                </div>
            </div>
        </div>
    )
}
