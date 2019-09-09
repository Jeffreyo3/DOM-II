// Your code goes here

// Mouseover
const navi = document.querySelectorAll('nav a');

navi.forEach((link) => {
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
    }})


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
}




// Scroll
const container = document.getElementsByClassName(['container home']);