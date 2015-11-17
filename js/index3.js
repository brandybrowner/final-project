$(document).ready(function() {

    
	$("#fortune").click(function() {

		$( "#fortune" ).hide();

		var cards = [
			{
				"card": {
					arcana:"The Fool", 
					meaning:"Innocence, naivety, spontaneity, starting out",
					src: "images/0_Fool.jpg"
				}
			},
			{
				"card": {
					arcana: "The Magician",
					meaning: "Action",
					src: "images/1_Magician.jpg"
				}
			},
			{
				"card": {
					arcana: "The High Priestess",
					meaning: "Mystery",
					src:"images/2_High_Priestess.jpg"
				}
			},
			{
				"card": {
					arcana: " The Empress",
					meaning: "The mother",
					src: "images/3_Empress.jpg"
				}
			},
			{
				"card": {
					arcana: "The Emperor",
					meaning: "The father",
					src: "images/4_Emperor.jpg"
				}
			},
			{
				"card": {
					arcana: "The Hierophant",
					meaning: "Mentor",
					src: "images/5_hierophant.jpg"
				}
			},
			{
				"card": {
					arcana: "The Lovers",
					meaning: "Union",
					src: "images/6_Lovers.jpg"
				}
			},
			{
				"card": {
					arcana: "The Chariot",
					meaning: "Strong will",
					src: "images/7_Chariot.jpg"
				}
			},
			{
				"card": {
					arcana: "Strength",
					meaning: "Patience",
					src: "images/8_Strength.jpg"
				}
			},
			{
				"card": {
					arcana: "The Hermit",
					meaning: "Solitude",
					src: "images/9_Hermit.jpg"
				}
			},
			{
				"card": {
					arcana: " Wheel of Fortune",
					meaning: "Destiny",
					src: "images/10_Wheel_of_Fortune.jpg"
				}
			},
			{
				"card": {
					arcana: "Justice",
					meaning: "Decisions, karma",
					src:  "images/11_Justice.jpg"
				}
			},
			{
				"card": {
					arcana: "The Hanged Man",
					meaning: "Sacrifice",
					src: "images/12_Hanged_Man.jpg"
				}
			},
			{
				"card": {
					arcana: "Death",
					meaning: "Necessary Ending",
					src: "images/13_Death.jpg"
				}
			},	
			{
				"card": {
					arcana: "Temperance",
					meaning: "Healing",
					src: "images/14_Temperance.jpg"
				}
			},
			{
				"card": {
					arcana: "The Devil",
					meaning: "Negativity",
					src: "images/15_Devil.jpg"
				}
			},
			{
				"card": {
					arcana: "The Tower",
					meaning: "Unexpected upheval",
					src: "images/16_Tower.jpg"
				}
			},
			{
				"card": {
					arcana: "The Star",
					meaning: "Hope",
					src: "images/17_Star.jpg"
				}
			},
			{
				"card": {
					arcana: "The Moon",
					meaning: "Lack of direction",
					src: "images/18_Moon.jpg"
				}
			},
			{
				"card": {
					arcana: "The Sun",
					meaning: "New vitality",
					src: "images/19_Sun.jpg"
				}
			},
			{
				"card": {
					arcana: "Judgement",
					meaning: "Rebirth",
					src: "images/20_Judgement.jpg"
				}
			},
			{
				"card": {
					arcana: "The World",
					meaning: "Completion, Wholeness, Contentment",
					src: "images/21_World.jpg"
				}
			},
		];

		// original math
		// var num = Math.floor(Math.random() * cards.length);
		// var roll = cards.splice(num, 1);
		// var ans1 = (cards[num]);

		// card 1
		var num = (Math.floor(Math.random() * cards.length));
		var ans1 = cards[num].card.src;
		var ans1a = cards[num].card.arcana;
		var ans1b = cards[num].card.meaning;
		// shows you what the card will be

		// console.log(cards[num]);

		// card 2
		// removes num from cards array
		var roll = cards.splice(num,1);
		// shows new array
		// console.log(cards)
		var num2 = (Math.floor(Math.random() * cards.length));
		var ans2 = cards[num2].card.src;
		var ans2a = cards[num2].card.arcana;
		var ans2b = cards[num2].card.meaning;

		// card 3
		// removes num2 from cards array
		var roll2 = cards.splice(num2,1);
		// console.log(cards);
		var num3 = (Math.floor(Math.random() * cards.length));
		var ans3 = cards[num3].card.src;
		var ans3a = cards[num3].card.arcana;
		var ans3b = cards[num3].card.meaning;

	
		var c1 = document.getElementById("card_1").src = ans1;
		var c2 = document.getElementById("card_2").src = ans2;
		var c3 = document.getElementById("card_3").src = ans3;


		var c4 = $("#card_4").append(ans1a);
		var c5 = $("#card_5").append(ans2a);
		var c6 = $("#card_6").append(ans3a);

		var c7 = $("#card_7").append(ans1b);
		var c8 = $("#card_8").append(ans2b);
		var c9 = $("#card_9").append(ans3b);

	});

	
	$.stellar();

});


 
