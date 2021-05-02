import AddStudent from './components/AddStudent'
import SearchFilter from './components/SearchFilter'
import { StudentList } from './components/StudentList'
import { useState } from 'react'
import React from 'react'
import { NumberOfFoundUsers } from './components/NumberOfFoundUsers'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

function App() {
  const [students, setStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([])
  const [favoriteStudents, setFavoriteStudents] = useState([])
  const [usersFound, setUsersFound] = useState(0)

  const addStudent = (name, description, email, tags, isFavorite) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newStudent = { id, name, description, email, tags, isFavorite }

    setStudents([...students, newStudent])
    setFilteredStudents([...filteredStudents, newStudent])
    setUsersFound(students.length + 1)
  }

  const deleteFromFavorites = (id) => {
    const result = favoriteStudents.filter((student) => student.id !== id && student !== null)
    setFavoriteStudents(result)
  }

  const addToFavorites = (name, description, tags, id) => {
    const newStudent = { id, name, description, tags }
    setFavoriteStudents([...favoriteStudents, newStudent])
  }

  const showFavorites = () => {
    setUsersFound(favoriteStudents.length)
    setFilteredStudents([...favoriteStudents])
  }

  const filter = (enteredDescription, enteredTags) => {
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
      setUsersFound(result.length)
      if (enteredDescription !== '') {
        const newResult = result.filter((item) => item.description.toLowerCase().includes(enteredDescription.toLowerCase())).map(({ id, name, description, email, tags }) => ({ id, name, description, email, tags }));
        setFilteredStudents(newResult)
        setUsersFound(newResult.length)
      }
    }
    else if (enteredTags.length === 0 && enteredDescription !== '') {
      const result = students.filter((item) => item.description.toLowerCase().includes(enteredDescription.toLowerCase())).map(({ id, name, description, email, tags }) => ({ id, name, description, email, tags }));
      setFilteredStudents(result)
      setUsersFound(result.length)
    }
    else {
      setFilteredStudents(students)
      setUsersFound(students.length)
    }
  }

  return (
    <Router>
      <React.StrictMode>
        <div className="App">
          <Navbar />
          <Switch>            
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/studentList">
              <div className='header'>
                <SearchFilter filter={filter} showFavorites={showFavorites} />
                <NumberOfFoundUsers foundUsers={usersFound} />
              </div>
              <StudentList students={filteredStudents} addToFavorites={addToFavorites} deleteFromFavorites={deleteFromFavorites} />
            </Route>
            <Route exact path="/createStudent">
              <AddStudent onAdd={addStudent} />
            </Route>
          </Switch>
        </div>
      </React.StrictMode >
    </Router>
  );
}

export default App;
