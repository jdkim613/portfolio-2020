// console.log(window); // the highest level of selection

// single element selectors
// document.getElementById('form-name').innerHTML = 'Hello World';

// console.log(document.getElementById('form-name'));

// multiple element selectors
// console.log(document.querySelectorAll('.item')); // generally use querySelector than getElementBy...
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((items) => console.log(items));

// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'World';
// ul.children[2].innerHTML = '<h2>Yeepers</h2>';

// function testFunction(thisText) {
//     ul.firstElementChild.textContent = thisText;
//     document.querySelector('.btn').style.background = 'red';
// }

// testFunction(document.getElementById('form-name').textContent);

const btn = document.querySelector('.btn');

let i = 0;
btn.addEventListener('click', (e) => {
    e.preventDefault();
    i++;
    console.log(e.target.className);
    // console.log('click ' + i);
});