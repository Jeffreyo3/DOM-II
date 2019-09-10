// Your code goes here

// Mouseover
const navA = document.querySelectorAll('nav a');

navA.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.transform = 'scale(1.5)';
        setTimeout(function () {
            event.target.style.transform = 'scale(1.0)';
        }, 500);
    }, false)
});

// Keydown
const body = document.querySelector('body');

body.addEventListener('keydown', () => alert('Oops! Try Clicking A Link!'));

// Wheel
const img = document.querySelectorAll('img');

img.forEach((pic) => {
    let scale = 1
    pic.addEventListener('wheel', zoom);
    function zoom(event) {
          event.preventDefault();
        
          scale += event.deltaY * -0.0001;
        
          // Restrict scale
          scale = Math.min(Math.max(.85, scale), 1.15);
        
          // Apply scale transform
          pic.style.transform = `scale(${scale})`;
    };
});


// Drag-Drop
const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('dragend', toText);
function toText() {
    this.style.display = 'none';
    headerImg.setAttribute('string', 'Bus in the sand');
    let noHeadImg = document.createElement('h1');
    noHeadImg.textContent = 'Bus in the sand';
    noHeadImg.style.display = 'flex';
    noHeadImg.style.justifyContent = 'center';
    const newHead = document.querySelector('.intro');
    newHead.prepend(noHeadImg);
};


// Load

window.addEventListener('load', () => {
    alert('The bus is fueled up and ready to go!');
});


// Focus

const myWindow = window.open("", "", "width=200, height=200");
myWindow.document.write("<p>Use a Pop-up blocker, Silly!</p>");
myWindow.focus();


// Resize
const hTwo = document.querySelectorAll('h2');

window.addEventListener('resize', function(){
hTwo.forEach((newStyle) => {
    newStyle.style.backgroundColor = 'lightblue';
    newStyle.style.paddingLeft = '4%';
    newStyle.style.paddingTop = '2%';
    newStyle.style.borderRadius = '4px';
});
});

// Scroll
const mainHead = document.querySelector('.main-navigation');
const bottomContent = document.querySelectorAll('.destination');

function navFadeOnScroll() {
    document.body.style.backgroundImage = "url('./img/big-ben.jpg')";
    mainHead.style.opacity = ".5";
    bottomContent.forEach((bg) => {
        bg.style.backgroundColor = 'white';
        bg.style.opacity = '.8';
        bg.style.padding = '2%';
        bg.style.borderRadius = '5px';
        bg.style.margin = '1%';
        bg.style.fontWeight = 'bold';
    });
};

document.addEventListener("scroll", navFadeOnScroll);

// Click
const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', () => console.log('You clicked me ^.^'));

// DblClick

logo.addEventListener('dblclick', () => {
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});


// Stop Propogation

const advAwaits = document.querySelector(".prop")

advAwaits.addEventListener("click", (event)=>{
    event.stopPropagation()
    event.target.style.border = "2px solid black"
})


// Stop Nav Items from default action
navA.forEach((navA) => {navA.addEventListener('click', function (event) {
    event.preventDefault()
});
});