/*
const animais = document.getElementById(animais)

const gridSection = document.getElementsByClassName("grid-selection")

const primeiraUl= document.querySelector('li')

const linksInternos = document.querySelector('[href^="#"]')

const animaisImg = document.querySelectorAll('.animais img')

primeiraUl.classList.add('grid-section')

const gridSectionHtml = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')
*/


/*ARRAY-LIKE
HTMLcollection e nodeList sao array- like, se parecem uma array mas nao sao. o metodo foreach() por exemplo, existe apenas em NodeList
*/

const gridSection = document.querySelectorAll('.grid-selector')

gridSection.forEach(function(gridItem, index, array){
    gridItem.classList.add('azul')
    console.log(index)//index do item no array
    console.log(array)//array completo
})
/*
é possivel transformar array like em array. utilizando o metodo ARRAY.FROM(VARIAVEL )
*/