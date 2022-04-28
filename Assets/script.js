var projectsBtn = document.getElementById("projectsBtn")

var contactBtn = document.getElementById("contactBtn")

var resumeBtn = document.getElementById("resumeBtn")

var aboutBtn = document.getElementById("aboutBtn")

var triangleEl = document.querySelector(".triangle")

var innerTriangleEl = document.querySelector(".innerTriangle")

var circleEl = document.querySelector(".circle")

var squareEl = document.querySelector(".square")

var ohNiceEl = document.querySelector(".ohNice")

var mainEl = document.querySelector(".main")

var circleChaosEl

var homeBtnEl = document.getElementById('homeBtn')


homeBtnEl.addEventListener('mouseover',moonSet)

function moonSet () {
    circleChaosEl.classList.add("animate__animated","animate__bounceOutDown")
}


setTimeout(timeBomb,5500)

setTimeout(wiggle,5000)


function wiggle () {

    mainEl.classList.add("animate__animated", "animate__rubberBand")
    console.log('wiggle ran')
   
}


function timeBomb () {


let div = document.createElement('div')

div.classList.add("circleChaos", "col-12")

mainEl.appendChild(div)

var circleChaosEl = document.querySelector(".circleChaos")
console.log(circleChaosEl)
let div2 = document.createElement('article')

div2.classList.add("squareChaos", "col-12")

mainEl.appendChild(div2)

triangleEl.classList.add("triangleChaos")

innerTriangleEl.classList.add("innerTriangleChaos")

circleEl.style.display = 'none'

squareEl.classList.add("squareChaos", "container-fluid")

console.log('timeBomb ran')

return circleChaosEl

}


setTimeout(console.log(circleChaosEl),7000)