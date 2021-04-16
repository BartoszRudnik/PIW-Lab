import AddStudent from './components/AddStudent'
import SearchFilter from './components/SearchFilter'
import { StudentList } from './components/StudentList'
import { useState } from 'react'

function App() {
  const [students, setStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([])

  const addStudent = (name, description, email, tags) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newStudent = { id, name, description, email, tags }

    setStudents([...students, newStudent])
    setFilteredStudents([...filteredStudents, newStudent])
  }

  const filterStudentsByTag = (enteredText) => {
    if (enteredText) {
      const result = students.filter(obj => obj.tags.some(tag => tag.includes(enteredText)));

      console.log(result)
      setFilteredStudents(result)
    } else {
      setFilteredStudents(students)
    }
  }

  const filterStudentsByDescription = (enteredText) => {
    if (enteredText) {
      const result = students.filter((item) => item.description.toLowerCase().includes(enteredText.toLowerCase())).map(({ id, name, description, email, tags }) => ({ id, name, description, email, tags }));
      setFilteredStudents(result)
    } else {
      setFilteredStudents(students)
    }
  }

  return (
    <div className="App">
      <SearchFilter updateByDescription={filterStudentsByDescription} updateByTags={filterStudentsByTag} />
      <AddStudent onAdd={addStudent} />
      <StudentList students={filteredStudents} />
    </div>
  );
}

export default App;
