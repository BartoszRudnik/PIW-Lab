import React, { useState } from 'react';
import logo from '../images/office.png';
import { MdMessage } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { GrFavorite } from 'react-icons/gr';
import { IconButton } from '@material-ui/core';
import ProjectPopup from './ProjectPopup';

export const ProjectItem = (props) => {
    const [isFavorite, setFavorite] = useState(false)
    const [isEdited, setEdited] = useState(false)

    const togglePop = () => {
        setEdited(!isEdited)
    };

    return (
        <div key={props.key} className='studentItem'>
            <div className='studentItemLeft'>
                {props.projectTags && <img alt='' src={logo} />}
            </div>
            <div className='studentItemCenter'>
                <h1>{props.projectOrganization}</h1>
                <h2>{props.projectName}</h2>
                <h5>{props.projectDescription}</h5>
                <div className='userTags'>
                    <ul>
                        <li>Tagi:</li>
                        {props.projectTags && props.projectTags.map((tag, index) => {
                            return <li key={index}>
                                {tag}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <div className='studentItemRight'>

                {props.projectTags && <h2>Wyslij wiadomosc <MdMessage /> </h2>}
                <div className='iconButton'>
                    {props.projectTags && <IconButton key="tableModeButton"
                        onClick={() => {
                            setFavorite(!isFavorite)
                            if (!isFavorite) {
                                props.addToFavorites(props.projectOrganization, props.projectName, props.projectDescription, props.projectTags, props.projectId)
                            } else {
                                props.deleteFromFavorites(props.projectId)
                            }
                        }}>

                        {!isFavorite ? <>Dodaj do ulubionych</>  : <>Usun z ulubionych</>}
                        {isFavorite ? <MdFavorite /> : <GrFavorite />}
                    </IconButton>}
                </div>
                <div>
                    <div className="iconButton" onClick={togglePop}>
                        <button>Edytuj</button>
                    </div>
                    {isEdited ? <ProjectPopup editProject={props.editProject} toggle={togglePop} projectOrganization={props.projectOrganization} projectId={props.projectId} projectName={props.projectName} projectDescription={props.projectDescription} projectTags={props.projectTags}/> : null}
                </div>
            </div>
        </div>
    )
}
