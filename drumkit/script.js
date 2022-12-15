'use strict'

const sound ={
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const createDiv = (text) =>{
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = text
    div.id = text
    document.querySelector('#container').appendChild(div)
}

const showSound = (sound) =>{
    Object.keys(sound).forEach(createDiv)
}

const playSound = (letter) =>{
    const audio = new Audio(`./sound/${sound[letter]}`)
    audio.play()
} 

const addEffect = (letter) => document.getElementById(letter).classList.toggle('active')

const removeEffect = (letter) => {
    const div = document.getElementById(letter)
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removeActive)
}

const activeDiv = (event) =>{
    /*let letter = ''
    if(event.type == 'click'){
        letter = event.target.id
    } else{
        letter = event.key.toUpperCase()
    }*/
    const letter = event.type == 'click' ? event.target.id : event.key.toUpperCase()
    const permitedLetter = sound.hasOwnProperty(letter)
    if(permitedLetter){
        addEffect(letter)
        playSound(letter) 
        removeEffect(letter)
    }
}
showSound(sound)

document.querySelector('#container').addEventListener('click', activeDiv)

window.addEventListener('keydown', activeDiv)