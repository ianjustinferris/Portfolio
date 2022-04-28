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


hideOhNice()
function hideOhNice () {
   ohNiceEl.style.display = 'none'
}

setTimeout(timeBomb,5500)

setTimeout(wiggle,5000)

setTimeout(timeBombInit,3000)

// function chaosMode () {

//     triangleEl.classList.add("animate__animated", "animate__slideOutRight", "triangleChaos")

// }

function wiggle () {

    mainEl.classList.add("animate__animated", "animate__rubberBand")
    console.log('wiggle ran')
   
}



function timeBombInit () {
    
    setTimeout(hideOhNice,2000)
    ohNiceEl.style.display ='block'
    ohNiceEl.classList.add("ohNiceShow","animate__animated","animate__fadeIn" )
    console.log("i ran")
    console.log(ohNiceEl)
}


function timeBomb () {

triangleEl.classList.add("triangleChaos")

innerTriangleEl.classList.add("innerTriangleChaos")

circleEl.style.display= 'none'

squareEl.classList.add("squareChaos", "container-fluid")


}


