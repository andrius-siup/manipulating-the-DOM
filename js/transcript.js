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

