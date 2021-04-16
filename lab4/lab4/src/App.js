import AddStudent from './components/AddStudent'
import SearchFilter from './components/SearchFilter'
import { StudentList } from './components/StudentList'
import { useState } from 'react'
import { NumberOfFoundUsers } from './components/NumberOfFoundUsers'

function App() {
  const [students, setStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([])

  const addStudent = (name, description, email, tags) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newStudent = { id, name, description, email, tags }

    setStudents([...students, newStudent])
    setFilteredStudents([...filteredStudents, newStudent])
  }

  const filter = (enteredDescription, enteredTags) => {
    console.log(enteredDescription)
    console.log(enteredTags)
    if (enteredTags.length > 0) {
      const result = students.filter((student) => {
        for (var ent in enteredTags) {
          var isPresent = false;
          for (var tag in student.tags) {
            if (student.tags[tag] === enteredTags[ent]) {
              isPresent = true;
              break;
            }
          }
          if (!isPresent) {
            return false;
          }
        }
        return true;
      })
      setFilteredStudents(result)
      if (enteredDescription !== '') {        
        const newResult = result.filter((item) => item.description.toLowerCase().includes(enteredDescription.toLowerCase())).map(({ id, name, description, email, tags }) => ({ id, name, description, email, tags }));
        setFilteredStudents(newResult)
      }
    }
    else if (enteredTags.length === 0 && enteredDescription !== '') {      
      const result = students.filter((item) => item.description.toLowerCase().includes(enteredDescription.toLowerCase())).map(({ id, name, description, email, tags }) => ({ id, name, description, email, tags }));
      setFilteredStudents(result)
    }
    else{
      setFilteredStudents(students)
    }

  }

  return (
    <div className="App">
      <SearchFilter filter={filter} />
      <AddStudent onAdd={addStudent} />
      <StudentList students={filteredStudents} />
      <NumberOfFoundUsers foundUsers={filteredStudents.length} />
    </div>
  );
}

export default App;
