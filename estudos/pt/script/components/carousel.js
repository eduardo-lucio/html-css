// alert('caixatroll');

const buttonRight = document.querySelector('.button-arrow.-right')
const buttonLeft = document.querySelector('.button-arrow.-left')
const elements = document.querySelector('#container-sobre > div')
let pixels = 50
// const buttonRight = window.document.querySelector('.button-arrow.-right')
// const elements = window.document.querySelector('#container-sobre')
// nao precisa digitar o window. 
// buttonRight.onclick forma velha

buttonRight.addEventListener('click', function() {
    pixels = pixels + 50
    elements.style = `transform: translateX(${pixels}px); transition: 1s ease-in-out;`
})

buttonLeft.addEventListener('click', function(){
    pixels = pixels - 50
    elements.style = `transform: translateX(${pixels}px); transition: 1s ease-in-out;`
})

