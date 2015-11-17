$(document).ready(function() {

    
	$("#fortune").click(function() {

		$( "#fortune" ).hide();

		var cards = [
			{
				arcana:"The Fool", 
				meaning:"innocence, naivety, spontaneity, starting out",
				src: "images/0_Fool.jpg"
			},
			{
				arcana: "The Magician",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/1_Magician.jpg"
			},
			{
				arcana: "The High Priestess",
				meaning: "innocence, naivety, spontaneity, starting out",
				src:"images/2_High_Priestess.jpg"
			},
			{
				arcana: " The Empress",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/3_Empress.jpg"
			},
			{
				arcana: "The Emperor",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/4_Emperor.jpg"
			},
			{
				arcana: "The Hierophant",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/5_hierophant.jpg"
			},
			{
				arcana: "The Lovers",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/6_Lovers.jpg"
			},
			{
				arcana: "The Chariot",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/7_Chariot.jpg"
			},
			{
				arcana: "Strength",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/8_Strength.jpg",
			},
			{
				arcana: "The Hermit",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/9_Hermit.jpg"
			},
			{
				arcana: " Wheel of Fortune",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/10_Wheel_of_Fortune.jpg"
			},
			{
				arcana: "Justice",
				meaning: "innocence, naivety, spontaneity, starting out",
				src:  "images/11_Justice.jpg"
			},
			{
				arcana: "The Hanged Man",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/12_Hanged_Man.jpg"
			},
			{
				arcana: "Death",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/13_Death.jpg"
			},
			{
				arcana: "Temperance",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/14_Temperance.jpg"
			},
			{
				arcana: "The Devil",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/15_Devil.jpg"
			},
			{
				arcana: "The Tower",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/16_Tower.jpg"
			},
			{
				arcana: "The Star",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/17_Star.jpg"
			},
			{
				arcana: "The Moon",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/18_Moon.jpg"
			},
			{
				arcana: "The Sun",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/19_Sun.jpg"
			},
			{
				arcana: "Judgement",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/20_Judgement.jpg"
			},
			{
				arcana: "The World",
				meaning: "innocence, naivety, spontaneity, starting out",
				src: "images/21_World.jpg"
			},
		];

		// original math
		// var num = Math.floor(Math.random() * cards.length);
		// var roll = cards.splice(num, 1);
		// var ans1 = (cards[num]);

		// card 1
		var num = (Math.floor(Math.random() * cards.length));
		var ans1 = cards[num.src];
		// shows you what the card will be

		// console.log(cards[num]);

		// card 2
		// removes num from cards array
		var roll = cards.splice(num,1);
		// shows new array
		// console.log(cards)
		var num2 = (Math.floor(Math.random() * cards.length));
		var ans2 = (cards[num2.src]);

		// card 3
		// removes num2 from cards array
		var roll2 = cards.splice(num2,1);
		// console.log(cards);
		var num3 = (Math.floor(Math.random() * cards.length));
		var ans3 = (cards[num3.src]);

	
		// var c1 = document.getElementById("card_1").src = ans1.src;
		// var c2 = document.getElementById("card_2").src = ans2.src;
		// var c3 = document.getElementById("card_3").src = ans3.src;

		// console.log(document.getElementById("card_1").src = ans1);
		// console.log(document.getElementById("card_2").src = ans2);
		// console.log(document.getElementById("card_3").src = ans3);
		console.log(cards[0]src);

	});

	
	$.stellar();



	// var  = {arcana:"The Fool", model:"innocence, naivety, spontaneity, starting out"};

	// var arcana1 =$("#card_4").append( "<p>You have chosen: </p>" ).src = ans1;



});


 
