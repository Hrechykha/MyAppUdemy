'use strict';

const box = document.querySelector('.box'),
    button = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

button.addEventListener('click', () => {
    //box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop); // сколько отлистали страницы в px
})

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);
console.log(box.getBoundingClientRect().bottom); //высота элемента + top

const style = window.getComputedStyle(box);
console.log(style.display);