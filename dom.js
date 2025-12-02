// * DOM =** Document Object Model

/*
    *-> When the browser loads an HTML file,it converts it into atree javascript objects
    *-> Each HTML tag becomes a node (usually an `Element` node).
    *->The root of this tree is the `document` object.
    *->The root of this tree is the `document` object.
*/

// console.log(document.title);
// console.log(document.body);

const title = document.getElementById("title");
console.log(title);

// * getElementsByClassName
const boxes = document.getElementsByClassName('box');
console.log(boxes.length);
// console.log(boxes[0]);

//* getElementsByTagName

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length);

// * Get all element
const allElements = document.getElementsByTagName("*");
// console.log(allElements);

// * can be called on specific element
const div = document.querySelector('div');
const divParagraph = div.getElementsByTagName('p');
console.log(divParagraph.length);

// *** querySelector (Modern and Most Used)
// Returns FIRST matching element or null
const intro = document.querySelector('.intro');
// console.log(intro);
const container = document.querySelector('.container');
// console.log(container);
const firstItem = document.querySelector('.item');
// console.log(fistItem);

// CSS selectors - very powerfull!
const activeItem = document.querySelector('.item.active');
// console.log(activeItem);

// * Child selector
const firstLi = document.querySelector('ul > li');
const containerP = document.querySelector('.container > p');
// console.log(containerP);

// ** Pseudo-selectors
const firstChild = document.querySelector('li:first-child');
// console.log(firstChild);
const lastChild = document.querySelector('li:last-child');
// console.log(lastChild);
const nthChild = document.querySelector('li:nth-child');
console.log(nthChild);

// ** DOM Events

/* DOM (Document Object Model) Events are actions or occurrences that happen in the browser, which you can respond to with JavaScript  */


/* 
    * -> Mouse Events: click, dblclick, mouseover, mouseout, mousemove
    * -> Keyboard Events: keydown, keyup, keypress
    * -> Form Events: submit, change, focus, blur, input
    * -> Window Events: load, resize, scroll, unload

*/

const input = document.getElementById('input');
const btn = document.getElementById('btn');

// btn.addEventListener('click', (e) => console.log('Click'));
// btn.addEventListener('dblclick', (e) => console.log('double click'));
// btn.addEventListener('mousedown', (e) => console.log('mouse button down'));
// btn.addEventListener('mouseup', (e) => console.log('mouse button up'));
// btn.addEventListener('mouseenter', (e) => console.log('mouse enter'));
// btn.addEventListener('mouseleave', (e) => console.log('mouse leave'));
// btn.addEventListener('mouseover', (e) => console.log('mouse over'));
// btn.addEventListener('mouseout', (e) => console.log('mouse out'));
// btn.addEventListener('mousemove', (e) => console.log('mouse moving'));

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         console.log("Form submitted")
// });

const box = document.getElementById("colorBox");
box.addEventListener("mouseover", function(event){
        // Log event properties.
        // console.log("Event type: ", event.type);
        // console.log("event.target:", event.target);
        // console.log("event.currentTarget: ", event.currentTarget);


// * coordinates of the mouse pointer relative to the browser's viewpoint (the visible part of the window)
        
// console.log("clientX, clientY: ", event.clientX, event.clientY);

// * coordinates of the muse pointer relative to the document/page(includes: scrolling).
// console.log("pageX, pageY:", event.pageX, event.pageY);
// * Ccoordinates of the mouse pointer relative to the padding edge of the box element itself. This is crucial for the calculation
// console.log("offsetX, offset:", event.offsetX, event.offsetY);

// * coordinates of the mouse pointer relative to the physical screen of the user's monitor.
console.log("screenX, screenY:", event.screenX, event.screenY);


});             
