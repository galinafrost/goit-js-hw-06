const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEL = document.querySelector('#ingredients');

const listItemElement = ingredients.map (el => {
  const ingredientsElLi = document.createElement('li');
  ingredientsElLi.classList.add('item');
  ingredientsElLi.textContent = el;
  return ingredientsElLi;
})

listEL.append(...listItemElement);