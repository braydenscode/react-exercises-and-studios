import classes from './ChoresList.module.css';
export default function ChoresList () {
   return(
   <div>
      <h3 className = {classes.choresHeading}>Today's Chores</h3>
      <ul>
         <li className={classes.choresText}>Practice Russian flashcards.</li>
         <li className={classes.choresText}>Practice guitar.</li>
         <li className={classes.choresText}>Re-read some chapters of the LaunchCode documentation.</li>
      </ul>
   </div>)
};