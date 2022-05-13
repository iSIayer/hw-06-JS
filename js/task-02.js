const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsListItem = ingredient => {

  const listItem = document.createElement("li");

  listItem.textContent = ingredient;
  listItem.classList.add("item");

  return listItem;
};

const ingredientsListItems = ingredients.map(ingredientsListItem);

ingredientsList.append(...ingredientsListItems);