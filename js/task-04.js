
const swapMinusBtnEl = document.querySelector('button[data-action="decrement"]');
const swapPlusBtnEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('#value');
let counterValue = 0;

// let numSpan = Number(counterValue);


const onswapPlusBtnClick = event => {
    spanEl.textContent = counterValue += 1;
    // return spanEl = numSpan + 1;
}


const onswapMinusBtnClick = event => {
    spanEl.textContent = counterValue -= 1;

    if (spanEl.textContent < 0) {
        return spanEl.textContent = `Ой, за минус нельзя`;
    };
}

swapPlusBtnEl.addEventListener('click', onswapPlusBtnClick);
swapMinusBtnEl.addEventListener('click', onswapMinusBtnClick);

