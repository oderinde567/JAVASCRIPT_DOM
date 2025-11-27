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