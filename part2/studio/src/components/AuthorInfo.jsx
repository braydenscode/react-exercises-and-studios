import RecipeData from './recipe.json'
import "./styling.css";

function AuthorInfo() {
  let recipeAuthor = RecipeData[0].author;
  // let recipeAuthorImage = RecipeData[0].map((item) => {const { author, authorImage , website} = item});
  let recipeAuthorImage = RecipeData[0].authorImage;
  let recipeWebsite = RecipeData[0].website;
  return (
    <div key={recipeAuthor}>
       <img src={recipeAuthorImage} alt={recipeAuthor} className='authorImage' />
       <h2>{recipeAuthor}</h2>
       <a href={recipeWebsite}>{recipeWebsite}</a>
    </div>
 );
}

 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 