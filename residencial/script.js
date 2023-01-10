'use strict'
//slide
const images = [
    {'id': '1', 'url': './img/slide1.jpg'},
    {'id': '2', 'url': './img/slide2.jpg'},
    {'id': '3', 'url': './img/slide3.jpg'},
    {'id': '4', 'url': './img/slide4.jpg'},
]

const containerItems = document.querySelector('.container-items')

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `<div class='item'>
            <img alt="imagem" src='${image.url}'
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
    const internLink = document.querySelectorAll('a[href^="#"]')
    
    function scrollToSection(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute("href")
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
        })
    }

    internLink.forEach((link) =>{
        link.addEventListener('click', scrollToSection)
    })


//scrollAnimado
const sections = document.querySelectorAll('.scroll')
const halfWindow = window.innerHeight * 0.6

function animatedScroll(){
    sections.forEach((section =>{
        const sectionTop = section.getBoundingClientRect().top-halfWindow
        if(sectionTop < 0){
        section.classList.add('activeScroll')
        }
    }))
}

window.addEventListener('scroll', animatedScroll)

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
    }, 300 * Math.random())
})
}

function mutation(event){
    if(event[0].target.classList.contains('activeScroll')){
        observer.disconnect()
        setNumbers()
    }
}
const observeTarget = document.querySelector(".estrutura")
const observer = new MutationObserver(mutation)

observer.observe(observeTarget, {attributes: true})

//menu mobile

const menu = document.querySelector(".menu")
const menuHamburguer = document.querySelector('#menu-hamburguer')
menuHamburguer.addEventListener("click", menuMobile)


function menuMobile(event){
    menu.classList.toggle("active")
}
