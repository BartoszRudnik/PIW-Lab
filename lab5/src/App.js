import AddStudent from './components/AddStudent'
import SearchFilter from './components/SearchFilter'
import { StudentList } from './components/StudentList'
import { useState } from 'react'
import React from 'react'
import { NumberOfFoundUsers } from './components/NumberOfFoundUsers'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import AddProject from './components/AddProject'
import { ProjectList } from './components/ProjectList'

function App() {
  const [students, setStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([])
  const [favoriteStudents, setFavoriteStudents] = useState([])
  const [usersFound, setUsersFound] = useState(0)

  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [favoriteProjects, setFavoriteProjects] = useState([])
  const [projectsFound, setProjectsFound] = useState(0)

  const addStudent = (name, description, email, tags, isFavorite) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newStudent = { id, name, description, email, tags, isFavorite }

    setStudents([...students, newStudent])
    setFilteredStudents([...filteredStudents, newStudent])
    setUsersFound(students.length + 1)
  }

  const editStudent = (id, name, description, tags) => {

    const index = students.findIndex((student) => student.id === id);
    var studentCopy = [...students];

    var studentToEdit = students.find((student) => student.id === id);
    studentToEdit.name = name;
    studentToEdit.description = description;
    studentToEdit.tags = tags;

    studentCopy[index] = studentToEdit;

    setStudents([...studentCopy]);

  }

  const editProject = (id, organization, name, description, tags) => {

    const index = projects.findIndex((project) => project.id === id);
    var projectCopy = [...projects];

    var projectToEdit = projects.find((project) => project.id === id);
    projectToEdit.organization = organization;
    projectToEdit.name = name;
    projectToEdit.description = description;
    projectToEdit.tags = tags;

    projectCopy[index] = projectToEdit;

    setProjects([...projectCopy]);

  }

  const addProject = (organization, name, description, email, tags, isFavorite) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newProject = { id, organization, name, description, email, tags, isFavorite }

    setProjects([...projects, newProject])
    setFilteredProjects([...filteredProjects, newProject])
    setProjectsFound(projects.length + 1)
  }

  const deleteFromFavorites = (id) => {
    const result = favoriteStudents.filter((student) => student.id !== id && student !== null)
    setFavoriteStudents(result)
  }

  const deleteProjectFromFavorites = (id) => {
    const result = favoriteProjects.filter((project) => project.id !== id && project !== null)
    setFavoriteProjects(result)
  }

  const addToFavorites = (name, description, tags, id) => {
    const newStudent = { id, name, description, tags }
    setFavoriteStudents([...favoriteStudents, newStudent])
  }

  const addProjectToFavorites = (organization, name, description, tags, id) => {
    const newProject = { id, organization, name, description, tags }
    setFavoriteProjects([...favoriteProjects, newProject])
  }

  const showFavorites = () => {
    setUsersFound(favoriteStudents.length)
    setFilteredStudents([...favoriteStudents])
  }

  const showFavoritesProjects = () => {
    setProjectsFound(favoriteProjects.length)
    setFilteredProjects([...favoriteProjects])
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

  const filterProjects = (enteredDescription, enteredTags) => {
    if (enteredTags.length > 0) {
      const result = projects.filter((project) => {
        for (var ent in enteredTags) {
          var isPresent = false;
          for (var tag in project.tags) {
            if (project.tags[tag] === enteredTags[ent]) {
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
      setFilteredProjects(result)
      setProjectsFound(result.length)
      if (enteredDescription !== '') {
        const newResult = result.filter((item) => item.description.toLowerCase().includes(enteredDescription.toLowerCase())).map(({ id, organization, name, description, email, tags }) => ({ id, organization, name, description, email, tags }));
        setFilteredProjects(newResult)
        setProjectsFound(newResult.length)
      }
    }
    else if (enteredTags.length === 0 && enteredDescription !== '') {
      const result = projects.filter((item) => item.description.toLowerCase().includes(enteredDescription.toLowerCase())).map(({ id, organization, name, description, email, tags }) => ({ id, organization, name, description, email, tags }));
      setFilteredProjects(result)
      setProjectsFound(result.length)
    }
    else {
      setFilteredProjects(projects)
      setProjectsFound(projects.length)
    }
  }

  return (
    <Router>
      <React.StrictMode>
        <div className="App">

          <Navbar />
          <Switch>

            <Route exact path="/PIW-Lab">
              <HomePage />
            </Route>

            <Route exact path="/studentList">
              <div className='header'>
                <SearchFilter filter={filter} showFavorites={showFavorites} />
                <NumberOfFoundUsers foundUsers={usersFound} />
              </div>
              <StudentList students={filteredStudents} addToFavorites={addToFavorites} deleteFromFavorites={deleteFromFavorites} editStudent={editStudent} />
            </Route>

            <Route exact path="/createStudent">
              <AddStudent onAdd={addStudent} />
            </Route>

            <Route exact path="/createProject">
              <AddProject onAdd={addProject} />
            </Route>

            <Route exact path="/projectsList">
              <div className='header'>
                <SearchFilter filter={filterProjects} showFavorites={showFavoritesProjects} />
                <NumberOfFoundUsers foundUsers={projectsFound} />
              </div>
              <ProjectList projects={filteredProjects} addToFavorites={addProjectToFavorites} deleteFromFavorites={deleteProjectFromFavorites} editProject={editProject} />
            </Route>

          </Switch>
        </div>
      </React.StrictMode >
    </Router>
  );
}

export default App;
