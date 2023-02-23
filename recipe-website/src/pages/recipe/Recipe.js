import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

//styles 
import './Recipe.css'



export default function Recipe() {
  const { id } = useParams()
  const { mode } =useTheme()


  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    setIsPending(true)


    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that recipe')
      }
    })
  }, [])




  return (
    <div className={`recipe ${mode}`}>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {recipe && (
          <>
            <h2 className="page-title">{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook.</p>
            <ul>
              {recipe.ingredients.map(ingredient => <li key={ingredient} >{ingredient}</li>)}
            </ul>
            <p className='method'>{recipe.method}</p>
            <br />
            <button className='btn'>Delete</button>
          </>
        )}
    </div>
  )
}