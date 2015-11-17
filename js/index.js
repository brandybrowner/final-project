$(document).ready(function() {

    
	$("#fortune").click(function() {

		$( "#fortune" ).hide();

		var cards = ["images/0_Fool.jpg", "images/1_Magician.jpg", "images/2_High_Priestess.jpg", "images/3_Empress.jpg", "images/4_Emperor.jpg", "images/5_hierophant.jpg", "images/6_Lovers.jpg", "images/7_Chariot.jpg", "images/8_Strength.jpg", "images/9_Hermit.jpg", "images/10_Wheel_of_Fortune.jpg", "images/11_Justice.jpg", "images/12_Hanged_Man.jpg", "images/13_Death.jpg", "images/14_Temperance.jpg", "images/15_Devil.jpg", "images/16_Tower.jpg", "images/17_Star.jpg", "images/18_Moon.jpg", "images/19_Sun.jpg", "images/20_Judgement.jpg", "images/21_World.jpg"]

		// var cards = [
		// 	{
		// 		arcana:"The Fool", 
		// 		model:"innocence, naivety, spontaneity, starting out",
		// 		src: "images/0_Fool.jpg"
		// 	}
		// ];

		// original math
		// var num = Math.floor(Math.random() * cards.length);
		// var roll = cards.splice(num, 1);
		// var ans1 = (cards[num]);

		// card 1
		var num = (Math.floor(Math.random() * cards.length));
		var ans1 = cards[num];
		// shows you what the card will be

		// console.log(cards[num]);

		// card 2
		// removes num from cards array
		var roll = cards.splice(num,1);
		// shows new array
		// console.log(cards)
		var num2 = (Math.floor(Math.random() * cards.length));
		var ans2 = (cards[num2]);

		// card 3
		// removes num2 from cards array
		var roll2 = cards.splice(num2,1);
		// console.log(cards);
		var num3 = (Math.floor(Math.random() * cards.length));
		var ans3 = (cards[num3]);

	
		// var c1 = document.getElementById("card_1").src = ans1.src;
		// var c2 = document.getElementById("card_2").src = ans2.src;
		// var c3 = document.getElementById("card_3").src = ans3.src;

		var c1 = document.getElementById("card_1").src = ans1;
		var c2 = document.getElementById("card_2").src = ans2;
		var c3 = document.getElementById("card_3").src = ans3;

	});

	
	$.stellar();



	// var  = {arcana:"The Fool", model:"innocence, naivety, spontaneity, starting out"};

	// var arcana1 =$("#card_4").append( "<p>You have chosen: </p>" ).src = ans1;



});


 
