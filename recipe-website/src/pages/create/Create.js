import { projectFirestore } from '../../firebase/config'
import {useState, useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


//styles 
import './Create.css'


export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()



  //save the recipe data to firestore
  const handleSubmit = async (e) => {
    e.preventDefault()
    //the content we want to save
    const doc = {title, ingredients, method, cookingTime: cookingTime + ' minutes'}


    try{
      //add a document to collection 'recipes
      await projectFirestore.collection('recipes').add(doc)
      //redirect to homepage
      history.push('/')
      //if something goes wrong catch error is fired
    }catch(err) {
      console.log(err)
    }
  }
  



  //When Add button is clicked
  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    //making ingredients unique, cant enter same ingredient twice
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')

    //focus allows for the ingredient box to have the cursor in it after 
    //user adds an ingredient, for quicker adding of ingredients
    ingredientInput.current.focus()
  }



  return (
    <div className='create'>
        <h2 className='page-title'>Add New Recipe</h2>


        <form onSubmit={handleSubmit}>

          <label>
            <span> Recipe Title:</span>
            <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            />
          </label>


          <label>
            <span>Recipe Ingredients:</span>
            <div className="ingredients">
              <input type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput} />
              <button onClick={handleAdd} className='btn'>add</button>
            </div>
          </label>

          {/*Displaying all Ingredients*/}
          <p>Current Ingredients: {ingredients.map(ingredient => <em key={ingredient}>{ingredient}, </em>)}</p>


          <label>
            <span>Recipe Method:</span>
            <textarea
              onChange={(e) => setMethod(e.target.value)} 
              value={method}
              required
            />
          </label>



          <label>
            <span>Cooking Time (minutes):</span>
            <input 
              type="number"
              onChange={(e) => setCookingTime(e.target.value)} 
              value={cookingTime}
              required/>
          </label>


          {/*add an onClick here to handle deleting items from the database*/}
          <button className='btn'>Submit</button>
        </form>

    </div>
  )
}

