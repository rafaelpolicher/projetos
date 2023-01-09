'use strict'
//slide
const images = [
    {'id': '1', 'url': './img/slide1.jpg'},
    {'id': '2', 'url': './img/slide2.jpg'},
    {'id': '3', 'url': './img/slide3.jpg'},
    {'id': '4', 'url': './img/slide4.jpg'},
    {'id': '5', 'url': './img/slide5.jpg'},
]

const containerItems = document.querySelector('.container-items')

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `<div class='item'>
            <img src='${image.url}'
        </div>`
    })
}

loadImages(images, containerItems)

let items = document.querySelectorAll('.item')

const previous = () =>{
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}


const next = () =>{
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}
document.querySelector('#previous').addEventListener('click', next)

document.querySelector('#next').addEventListener('click', previous)

//scroll
function scoll() {
    const internLink = document.querySelectorAll('.menu .a[href^="#"]')
    console.log(internLink)
}

scroll()
//numeros
function setNumbers(){
const numbers = document.querySelectorAll('.estrutura-numeros')

numbers.forEach((number) =>{
    const total = +number.innerText
    const plus = Math.floor(total / 10)
    let start = 0
    const timer = setInterval(()=>{
        start = start + plus
        number.innerText = start
        if(start > total){
            clearInterval(timer)
            number.innerText = total
        }
    }, 100 * Math.random())
})
}
setNumbers()

//menu mobile

const menu = document.querySelector(".menu")
const menuHamburguer = document.querySelector('#menu-hamburguer')
menuHamburguer.addEventListener("click", menuMobile)

function menuMobile(event){
    menu.classList.toggle("active")
}