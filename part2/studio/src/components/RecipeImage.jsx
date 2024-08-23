import RecipeData from './recipe.json'

function RecipeImage() {
  let recipeImage = RecipeData[0].recipeImage;
   return <div>
    <img src={recipeImage} alt={RecipeData[0].name} className='recipeImage'/>
   </div>
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 