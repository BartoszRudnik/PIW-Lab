import React from 'react'
import { StudentItem } from './StudentItem'

export const StudentList = (props) => {
    return (
        props.students.map((student) => (
            <div key={student.uniqueId} >
                <StudentItem key={student.uniqueId} studentDescription={student.description} studentName={student.name} studentTags={student.tags} />
            </div>
        ))
    )       
}
