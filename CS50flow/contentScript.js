const itemCount = document.querySelectorAll("body > div > div.row.mt-1 > div > ul > li > a > span.label").length;
function printPack() {

// HTML tags holder
let message="";

// Links holder
let links = [
	'https://cs50.harvard.edu/x/2021/weeks/0/',
	'https://cs50.harvard.edu/x/2021/weeks/1/',
	'https://cs50.harvard.edu/x/2021/weeks/2/',
	'https://cs50.harvard.edu/x/2021/weeks/3/',
	'https://cs50.harvard.edu/x/2021/weeks/4/',
	'https://cs50.harvard.edu/x/2021/weeks/5/',
	'https://cs50.harvard.edu/x/2021/weeks/6/',
	'https://cs50.harvard.edu/x/2021/weeks/7/',
	'https://cs50.harvard.edu/x/2021/weeks/8/',
	'https://cs50.harvard.edu/x/2021/weeks/9/',
	'https://cs50.harvard.edu/x/2021/weeks/10/',
	'https://cs50.harvard.edu/x/2021/project/'
];

// Loop counter and html ready tag holders.
const liSelectorPre = "body > div.container > div.row.mt-1 > div > ul > li:nth-child(";
const labelEnd = ") > a > span.label";
let perCount = 0, lii =""; 

for (perCount=1; perCount < itemCount+1; perCount++) {
	
	lii = liSelectorPre + perCount;
	paragraph = document.querySelector("body > div > div.row.mt-1 > div > ul > li:nth-child(" + (perCount) + ") > div > p");
	let label = document.querySelector(lii + labelEnd).textContent;

	// HTML tags holder start here
	message+= "<div class='wrapper-item";

	if (document.querySelector(lii + ")").className == "active") {
		message +=" completed'><h1>" + label + "</h1>";
	}
	else {
		message +="'><h1>" + label + "</h1>";
		
		let buttonPack = '<a href="' + links[perCount-1] + '" target="_blank" class="boxx">Visit: '+ label +'</a>';
		if(paragraph) {
			
			message += paragraph.innerHTML + "<br>" + buttonPack;
		}
		else{
			message += "Build a final project!" + "<br>" + buttonPack;
		} 
	}

	// last tags adding here;
	message += "</div>";
}
  
// all tags and in-worlds here for combining like a HTML file.
let htmlPack = '<div class="gallery-wrapper"><div class="gallery">' + message + 
'</div></div><div class="controls"><button class="move-btn left">&larr; BEFORE</button><button class="move-btn right">NEXT &rarr;</button></div>';
  	
  	// and sending to function calller;
    return htmlPack
}

const init = function(){
  //console.log(document.body.firstChild)
  const injectElement = document.createElement('div');
  injectElement.className = 'container-flow';
  injectElement.innerHTML = printPack();
  document.body.insertBefore(injectElement, document.body.firstChild);
}
init();


/* ### SCROLL AREA ### */

var gallery = document.querySelector('.gallery');
var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');

// one page jumping per click
var itemWidth = 700; //PX  as set and same in css
var totalWidth = itemWidth * (itemCount-1);

var scrollRate = itemWidth;
var left = 0;

// convert to click
leftBtn.addEventListener('click', moveRight);
rightBtn.addEventListener('click', moveLeft);

function moveLeft() {
	
	if (left > -totalWidth) {
		left -= scrollRate; // itemWidth
	}
	else {
		left = -totalWidth;
	}
	gallery.style.left = left + 'px';
}

function moveRight() {

	if (left < -itemWidth) {
		left += scrollRate;
	} else {
		left = 0;
	}
	gallery.style.left = left + 'px';
}