// returns single element
var article = document.getElementById('home-page');

// Returns a list of elements
var sections = document.getElementsByTagName('section');

var leads = document.getElementsByClassName('lead');

// Look at the first class lead
var lead = leads[0];
lead.textContent;

// Flexible way of finding elements in the DOM. Returns first elements found
var article = document.querySelector('#home-page');
var section = document.querySelector('section');
var lead = document.querySelector('.lead');

var article = document.getElementById('home-page');

article.children;
article.parentElement;
article.nextElementSibling;
article.firstElementChild;
article.lastElementChild;

let section = article.firstElementChild;

/*
 * Creating new elements
 */

 // creating new li that goes to the nav
 var li = document.createElement('li');

 // Give it a class name
 li.classList.add('last');

 // Change its css
 li.style.backgroundColor = 'pink';

 // Create an anchor link to go in the new li
 var a = document.createElement('a');

 a = textContent = "Four";
 a.style.color = 'white';

 // Insert an anchor link to the li
 li.appendChild(a);

 /* 
    Modifying the DOM
  
  */

  // Finding the ul element
  var uls = document.getElementsByTagName('ul');

  var ul = uls[0];

  // Insert the new li element into of the list
  ul.appendChild(li);

  // move it up to the top of the list
  var firstLi = ul.getElementsByTagName('li');
  ul.insertBefore(li, firstLi);

  firstLi.classList.remove('active');