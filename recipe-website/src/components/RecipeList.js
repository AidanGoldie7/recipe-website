import { projectFirestore } from '../firebase/config'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import DeleteIcon from '../assets/delete.svg'


//styles
import './RecipeList.css'



export default function RecipeList({recipes}) {
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div className='error'>No recipes found.</div>
    
  }

  //handleClick for Deleting an item from Home Page
  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }


  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}> 
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
            <img 
            className='delete'
            src={DeleteIcon}
            onClick={() => handleClick(recipe.id)}  
            />
            </div>
        )) }
        
    </div>
  )
}
