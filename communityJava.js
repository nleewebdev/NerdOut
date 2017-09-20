/*    JavaScript 6th Edition
 *    Nerd Out! community area
 *    Variables and functions
 *    Author: Matthew Brunner
 *    Date:   9/18/2017

 *    Filename communityJava.js
 */
var items = [];
	items.push({
		title: "Pac-Man Plushies",
		price: "$19.99",
		description: "Comfy Pac-Man pillows my Grandma made.",
		rating: '&#9733; &#9733; &#9733; &#9733; &#9734',
		source: "./images/craft1.jpg"
	});
	items.push({
		title: "FF7 Cloud Pillows",
		price: "$29.99",
		description: "Super DETAILED Cloud, complete with Buster Sword.",
		rating: '&#9733; &#9733; &#9733; &#9733; &#9733',
		source: "./images/craft2.jpg"
	});
	items.push({
		title: "Hearthstone PaperWeights",
		price: "$7.99",
		description: "Keep your work held down with these 3-D printed Hearthstones!",
		rating: '&#9733; &#9733; &#9733; &#9734; &#9734',
		source: "./images/craft3.jpg"
	});
	items.push({
		title: "Yoda Coaster",
		price: "$4.99",
		description: "My girlfriend makes these coasters for my friends and I. Great for keeping coffee rings off my desk in style!",
		rating: '&#9733; &#9733; &#9733; &#9734; &#9734',
		source: "./images/craft4.jpg"
	});
	items.push({
		title: "Mario Utencil Holder",
		price: "$59.99",
		description: "Arts and crafts holder for any lover of Mario. (made-to-order)",
		rating: '&#9733; &#9733; &#9733; &#9733; &#9734',
		source: "./images/craft5.jpg"
	});
	items.push({
		title: "Pokemon Ornaments",
		price: "$9.99",
		description: "Dont let your christmas tree be lame this year. Not only can we make these, we handle requests as well!",
		rating: '&#9733; &#9733; &#9733; &#9733; &#9733',
		source: "./images/craft6.jpg"
	});

function setModal(itemNumber){
    document.getElementById("modalImg").src = items[itemNumber].source;
    document.getElementById("modalTitle").innerHTML = items[itemNumber].title;
    document.getElementById("modalDescription").innerHTML = items[itemNumber].description;
    document.getElementById("modalPrice").innerHTML = items[itemNumber].price;
    document.getElementById("modalRating").innerHTML = items[itemNumber].rating;
}

function changeImage(image_id) {
    document.getElementById("mainSlide1").src = "./images/" + image_id + ".jpg";
}

 function loadItems() {
	 loadItem1();
	 loadItem2();
	 loadItem3();
	 loadItem4();
	 loadItem5();
	 loadItem6();
 }
 
 function loadItem1() { 
   document.getElementById("item1Price").innerHTML = "$19.99";
   document.getElementById("item1Text").innerHTML = "Comfy Pac-Man pillows my Grandma made.";
   document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
   document.getElementById('mainSlide1').src = "./images/crafts/" + image_id + ".jpg";
	 
 }
 function loadItem2() {
   document.getElementById("item2Price").innerHTML = "$29.99";
   document.getElementById("item2Text").innerHTML = "Super DETAILED Cloud, complete with Buster Sword.";
   document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
   document.getElementById('mainSlide1').src = "./images/crafts/" + image_id + ".jpg";
	 
 }
 function loadItem3() {
   document.getElementById("item3Price").innerHTML = "7.99";
   document.getElementById("item3Text").innerHTML = "Keep your work held down with these 3-D printed Hearthstones!";
   document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
   document.getElementById("mainSlide1").src = "./images/crafts/" + image_id + ".jpg";
	 
 }
 function loadItem4() {
   document.getElementById("item4Price").innerHTML = "4.99";
   document.getElementById("item4Text").innerHTML = "My girlfriend makes these coasters for my friends and I. Great for keeping coffee rings off my desk in style!";
   document.getElementById("item4Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
   document.getElementById("mainSlide1").src = "./images/crafts/" + image_id + ".jpg";
	 
 }
 function loadItem5() {
   document.getElementById("item5Price").innerHTML = "59.99";
   document.getElementById("item5Text").innerHTML = "Arts and crafts holder for any lover of Mario. (made-to-order)";
   document.getElementById("item5Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
   document.getElementById("mainSlide1").src = "./images/crafts/" + image_id + ".jpg";
	 
 }
 function loadItem6() {
   document.getElementById("item6Price").innerHTML = "9.99";
   document.getElementById("item6Text").innerHTML = "Dont let your christmas tree be lame this year. Not only can we make these, we handle requests as well!";
   document.getElementById("item6Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
   document.getElementById("mainSlide1").src = "./images/crafts/" + image_id + ".jpg";
	 
 }