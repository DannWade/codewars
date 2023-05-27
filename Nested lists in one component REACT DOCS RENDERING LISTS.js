// Nested lists in one component 
// Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.


import { recipes } from './data.js';

export default function RecipeList() {
  const recipeList = recipes.map(x=>
    <div key={x.id}>
      <h2 >{x.name}</h2>
      <ul>
        {x.ingredients.map((y)=><li key={y}>{y}</li>)}
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{recipeList}</ul>
    </div>
  );
}