//var cards = ["images/0_Fool.jpg", "images/1_Magician.jpg", "images/2_High_Priestess.jpg", "images/3_Empress.jpg", "images/4_Emperor.jpg", "images/5_hierophant.jpg", "images/6_Lovers.jpg", "images/7_Chariot.jpg"; "images/8_Strength.jpg", "images/9_Hermit.jpg", "images/10_Wheel_of_Fortune.jpg", "images/11_Justice.jpg", "images/12_Hanged_Man.jpg", "images/13_Death.jpg", "images/14_Temperance.jpg", "images/15_Devil", "images/16_Tower.jpg", "images/17_Star", "images/18_Moon.jpg", "images/19_Sun.jpg", "images/20_Judgement.jpg", "images/21_World.jpg"]

//var cards = ['0_Fool.jpg', '1_Magician.jpg', "2_High_Priestess.jpg", "3_Empress.jpg", "4_Emperor.jpg", "5_hierophant.jpg", "6_Lovers.jpg", "7_Chariot.jpg"; "8_Strength.jpg", "9_Hermit.jpg", "10_Wheel_of_Fortune.jpg", "11_Justice.jpg", "12_Hanged_Man.jpg", "13_Death.jpg", "14_Temperance.jpg", "15_Devil", "16_Tower.jpg", "17_Star", "18_Moon.jpg", "19_Sun.jpg", "20_Judgement.jpg", "21_World.jpg"];
var cards = ["images/0fool.jpg", "images/1Magician.jpg"]
var array = [0,1,2,3,4,5,6,7,8];
var num = Math.floor(Math.random() * cards.length);
var roll = cards.splice(num, 1);
console.log(cards[num]);
