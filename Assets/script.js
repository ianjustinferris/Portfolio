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

var bodyEl = document.getElementsByTagName('body')

var aboutMeEl = document.querySelector('.aboutMe')

var p

homeBtnEl.addEventListener('mouseover',moonSet)

function moonSet () {
circleChaosEl.classList.add("animate__animated","animate__bounceOutDown")
setTimeout(lightsOut,600)
setTimeout(console.log(circleChaosEl),4000)
console.log('moonSet ran')
}

function lightsOut () {
    document.body.style.backgroundColor = "black";
    console.log('lightsOut ran')
}


// homeBtnEl.addEventListener('mouseout',moonRise)

// function moonRise () {
//  document.body.style.backgroundColor = "rgb(153, 173, 168)";
//     circleChaosEl.classList.add("circleChaos", "col-12","animate__animated","animate__bounceInUp")

//    console.log('moonRise ran')

// }




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

circleChaosEl = document.querySelector(".circleChaos")

console.log(circleChaosEl)

let div2 = document.createElement('article')

div2.classList.add("squareChaos", "col-12")

mainEl.appendChild(div2)

triangleEl.classList.add("triangleChaos")

innerTriangleEl.classList.add("innerTriangleChaos")

circleEl.style.display = 'none'

squareEl.classList.add("squareChaos", "container-fluid")

console.log('timeBomb ran')


}


setTimeout(console.log(circleChaosEl),7000)


//TO BE CONTINUED>>>>>>>


// const animationArray = ['animate__slideInDown','animate__slideInRight','animate__slideInLeft','animate__slideInUp']

// const about = 'Aspiring Full Stack Developer with a background in engineering and construction. Interested in solving everyday problems with creative and intuitive user interfaces.'

// const aboutArray = about.split('') 

// console.log(aboutArray)

// for (let i=0;i<aboutArray.length;i++){
  
//   p = document.createElement('p');
//   p.className = ('text','aboutMeText','animate__animated','animate__bounceOutDown');
//   p.innerHTML=aboutArray[i];
//   aboutMeEl.appendChild(p)

// }