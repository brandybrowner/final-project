/*
	Vertigo.js
	Simple vertical and horizontal parallax with no jQuery or Stellar.js
	Ed Aponte 11.04.2015
	
*/


var parallaxY = document.getElementsByClassName("parallaxY"); // get an array of all elements with class parallaxY
var speedY = []; // declare a speedY array that will be used to store data-speeds for each class parallaxY

var parallaxX = document.getElementsByClassName("parallaxX"); // get an array of all elements with class parallaxX
var speedX = []; // declare a speedX array that will be used to store data-speeds for each class parallaxX

	
window.onscroll = function() { // window.onscroll will perform the below code whenever you scroll

	// Loop thru all classes parallaxY, get their corresponding data-speed value and apply the vertical offset to the background
	for ( var y = 0 ; y < parallaxY.length ; y++) {

		speedY[y] = parallaxY[y].getAttribute("data-speed");
		var yOffset = window.pageYOffset;
		parallaxY[y].style.backgroundPosition = "0px " + (yOffset / speedY[y]) + "px";

	}

	// Loop thru all classes parallaxX, get their corresponding data-speed value and apply the horizontal offset to the background
	for ( var x = 0 ; x < parallaxX.length ; x++) {

		speedX[x] = parallaxX[x].getAttribute("data-speed");
		var xOffset = window.pageXOffset;
		parallaxX[x].style.backgroundPosition = (xOffset / speedX[x]) + "px" + " 0px";

	}

}

