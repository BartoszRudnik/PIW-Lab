import React from 'react'
import { StudentItem } from './StudentItem'

export const StudentList = (props) => {
    return (
        props.students.map((student) => (

            <div key={student.uniqueId} className='studentList'>
                <StudentItem key={student.uniqueId} editStudent={props.editStudent} studentId={student.id} studentDescription={student.description} studentName={student.name} studentTags={student.tags} isFavorite={student.isFavorite} addToFavorites={props.addToFavorites} deleteFromFavorites={props.deleteFromFavorites} />
            </div>
        ))
    )
}
