import ClickedButton from "./ClickedButton"
import SaveButton from './SaveButton'
import RecipeData from './recipe.json'

function Button(props) {
  const saveButton = props.saveButton;
  
   return saveButton ? <SaveButton /> : <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 