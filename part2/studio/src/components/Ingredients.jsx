import RecipeData from './recipe.json'

function IngredientList() {
  let ingredients = RecipeData[0].ingredients;
   return <div>
    <h3>Ingredients</h3>
      <ol>
      {ingredients.map((data, id) => (
        <li key={id}>{data}</li>
      ) )}
    </ol>
   </div>;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 