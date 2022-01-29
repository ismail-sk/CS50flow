const itemCount = document.querySelectorAll("body > div > div.row.mt-1 > div > ul > li > a > span.label").length;
function printPack() {

// HTML tags holder
let message="";

// Links holder
let links = [
	'https://cs50.harvard.edu/x/2022/weeks/0/',
	'https://cs50.harvard.edu/x/2022/weeks/1/',
	'https://cs50.harvard.edu/x/2022/weeks/2/',
	'https://cs50.harvard.edu/x/2022/weeks/3/',
	'https://cs50.harvard.edu/x/2022/weeks/4/',
	'https://cs50.harvard.edu/x/2022/weeks/5/',
	'https://cs50.harvard.edu/x/2022/weeks/6/',
	'https://cs50.harvard.edu/x/2022/weeks/7/',
	'https://cs50.harvard.edu/x/2022/weeks/8/',
	'https://cs50.harvard.edu/x/2022/weeks/9/',
	'https://cs50.harvard.edu/x/2022/weeks/10/',
	'https://cs50.harvard.edu/x/2022/project/'
];

// Loop counter and html ready tag holders.
const SelectorPre = "body > div.container > div.row.mt-1 > div > ul > li:nth-child(";
let perCount = 0, lii,label,weekItems, wItem; 

for (perCount=1; perCount < itemCount+1; perCount++) {
	
	lii = SelectorPre + perCount; //container
	label = document.querySelector(lii + ") > a > span.label").textContent;

	// HTML tags holder start here
	message+= "<div class='wrapper-item";

	// checking elements contain "active" -- document.querySelector("body > div.container > div.row.mt-1 > div > ul > li:nth-child(1)").className --
	if (document.querySelector(lii + ")").className == "active") {
		// if is contain; add "complated" class
		message +=" completed'><h1>" + label + "</h1>";
	}
	else {
		// if not: add week name for header
		message +="'><h1>" + label + "</h1>";
		
		// Build first button for main dir/path of week 
		let buttonPack = '<p class="linkboxx"><a href="' + links[perCount-1] + '" target="_blank">Visit: '+ label +'</a></p>';
		
		// find explain of week's contained text
		let paragraph = document.querySelector(lii + ") > div > p"); // example: document.querySelector("body > div.container > div.row.mt-1 > div > ul > li:nth-child(2) > div > p")

		// check avabilty of text (in cs50x; only final week is not have explain text/paragraph)
		if(paragraph) {
			message += paragraph.innerHTML + "<br>" + buttonPack;

			// read labels of homeworks/psat/labs.
			weekItems = lii + ") > div > div.problem-progress";

			for (let weekInCounter =0; weekInCounter < document.querySelectorAll(weekItems).length; weekInCounter++) {

				// cleaning the label texts
				wItem = document.querySelectorAll(weekItems)[weekInCounter].firstChild.nodeValue.split(' - ')[0].replace("Sentimental / ","").trim();
				//for test: console.log(wItem, typeof(wItem), wItem.length, typeof(weekItems));

				let aaa = String(lii+") > div > div:nth-child("+ (weekInCounter+2) +") > div > div");

				// choise color of lab/pset buttons
				if (document.querySelector(aaa).classList.contains("progress-complete")) {
					message += "<p class='boxx comp";
				}
				else {
					message += "<p class='boxx";
				}
				
				let litem = "";
				if(wItem.includes("Lab ")) {
					let labLink = links[perCount-1].replace("weeks","labs");
					litem = '<a href="' + labLink + '" target="_blank">'+ wItem +'</a>';
					
				}
				else{
					let psetLink = links[perCount-1].replace("weeks","psets");
					litem = '<a href="' + psetLink + '" target="_blank">'+ wItem +'</a>';
				}
				let isIncBef = wItem + " or";
				let isIncAft = "or " + wItem;

				//for test: console.log(paragraph.innerHTML.includes(isIncBef),paragraph.innerHTML.includes(isIncAft));

				if (paragraph.innerHTML.includes(isIncBef) || paragraph.innerHTML.includes(isIncAft)) {
					message += " altto'>" + litem + "</p>";
					if(paragraph.innerHTML.includes(isIncBef)) {
						message += "<p class='altto'> OR </p>";
					}
					else if(paragraph.innerHTML.includes(isIncAft)) {
						message += "<br>";
					}
				}
				else {
					message += "'>" + litem + "</p>";
				}
			}
		}
		else{
			message += "Build a final project!" + "<br>" + buttonPack;
		} 
	}

	// last tags adding here;
	message += "</div>";
}
  
// all tags and in-worlds here for combining like part of a HTML file.
let htmlPack = '<div class="gallery-wrapper"><div class="gallery">' + message + 
'</div></div><div class="controls"><button class="move-btn left">&larr; BEFORE</button><button class="move-btn right">NEXT &rarr;</button></div>';
  	
  	// and sending to function calller;
    return htmlPack
}

const init = function(){
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
