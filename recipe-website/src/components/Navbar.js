import { Link } from 'react-router-dom'

//styles 
import './Navbar.css'


export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/">
            <h1>Aidans Kitchen</h1>
            </Link> 

            <Link to="/create">
             Create Recipe
            </Link>

        </nav>
       
    </div>
  )
}
