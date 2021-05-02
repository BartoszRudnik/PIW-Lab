import React from 'react'
import { ProjectItem } from './ProjectItem'

export const ProjectList = (props) => {
    return (
        props.projects.map((project) => (
            <div key={project.uniqueId} className='studentList'>
                <ProjectItem key={project.uniqueId} editProject={props.editProject} projectId={project.id} projectOrganization={project.organization} projectDescription={project.description} projectName={project.name} projectTags={project.tags} isFavorite={project.isFavorite} addToFavorites={props.addToFavorites} deleteFromFavorites={props.deleteFromFavorites} />
            </div>
        ))
    )       
}
