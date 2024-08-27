import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{
      label: "Favorites",
      value: "favorites"
   },
   {
      label: "Desserts",
      value: "desserts"
   },
   {
      label: "Recipes",
      value: "recipes"
   }];

   let boardOptions = boards.map((board, index) => {
      return <option key={index} value={board.value}>{board.label}</option>
   })

   const [boardName, setBoardName] = useState("no boards yet!");

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
