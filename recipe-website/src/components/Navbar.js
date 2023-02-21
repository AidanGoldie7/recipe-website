import { Link } from 'react-router-dom'

//styles 
import './Navbar.css'
import Searchbar from './Searchbar'


export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link className="brand" to="/">
            <h1>Aidans Kitchen</h1>
            </Link> 
            <Searchbar />
            <Link to="/create">Create Recipe</Link>

        </nav>
       
    </div>
  )
}
