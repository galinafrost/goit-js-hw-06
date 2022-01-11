const listEl = document.querySelectorAll('.item');
const listElLingth = listEl.length;

console.log(`Number of categories: ${listElLingth}`);



const titleEl = document.querySelectorAll('.item');

// Первый вариант с переменными
// titleEl.forEach( (el) => {
//    const titleLi = el.querySelector('h2');
//    const titleText = titleLi.textContent;
//    const amount = el.querySelectorAll('li');
//    console.log(amount.length);

//   });

// Второй вариант покороче

titleEl.forEach( (el) => {
    const titleLi = el.querySelector('h2').textContent;
    console.log(`Category: ${titleLi}`);
    const amount = el.querySelectorAll('li').length;
    console.log(`Elements: ${amount}`);
   });