import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">      
      <div className="links">
        <Link to="/PIW-Lab">Strona główna</Link>
        <Link to="/studentList">Lista studentów</Link>
        <Link to="/createStudent">Dodaj studenta</Link>
        <Link to="/projectsList">Lista projektów</Link>
        <Link to="/createProject">Dodaj projekt</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;