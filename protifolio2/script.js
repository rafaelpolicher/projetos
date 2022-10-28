function scrollSuave(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')


function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    

/*    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
*/

        const topo = section.offsetTop    
        window.scrollTo({
        top: topo,
        behavior: 'smooth'
    })
}

linksInternos.forEach((link)=>{
    link.addEventListener('click', scrollToSection)
})
}
scrollSuave()


function initAniScroll(){
const sections = document.querySelectorAll('.js-scroll')
const windowMetade = window.innerHeight * 0.7

function animaScroll(){
  sections.forEach((section)=>{
      const sectionTop = section.getBoundingClientRect().top - windowMetade
      if(sectionTop < 0){
          section.classList.add('ativo')
      }
  })
}
animaScroll()
window.addEventListener('scroll', animaScroll)
}
initAniScroll()



const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

function activeTab(index){
    tabContent.forEach((section)=>{
        section.classList.remove('ativo')
    })
   tabContent[index].classList.add('ativo') 
}

tabMenu.forEach((itemMenu, index)=>{
    itemMenu.addEventListener('click', function(){
        activeTab(index)
    })
})