function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnEl = document.querySelector('.change-color');

btnEl.addEventListener ('click', event => {
 const colorHex = getRandomHexColor();
  event.currentTarget;
  document.querySelector('body').style.backgroundColor = colorHex;
  
  document.querySelector('.widget .color').textContent = colorHex;
  
})