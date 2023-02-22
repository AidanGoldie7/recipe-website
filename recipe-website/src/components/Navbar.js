import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useTheme } from '../hooks/useTheme'


//styles 
import './Navbar.css'

//components
import Searchbar from './Searchbar'



export default function Navbar() {
  const { color,changeColor } = useTheme()


  return (
    <div className="navbar" style={{background: color }}>
        <nav onClick={() => changeColor('pink')}>
            <Link className="brand" to="/">
            <h1>Aidans Kitchen</h1>
            </Link> 
            <Searchbar />
            <Link to="/create">Create Recipe</Link>

        </nav>
       
    </div>
  )
}
