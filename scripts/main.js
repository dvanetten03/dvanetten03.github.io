var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/belgian-malinois-picture.jpeg') {
		myImage.setAttribute ('src', 'images/shih-tzu.jpg');
		} else {
		myImage.setAttribute ('src', 'images/belgian-malinois-picture.jpeg');
		}
	}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Belgian Malinois are cool, ' + myName;
	}
	
if(!localStorage.getItem('name')) {
	setUserName();
	} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Belgian Malinois are cool, ' + storedName;
	}
	
myButton.onclick = function() {
	setUserName();
}
