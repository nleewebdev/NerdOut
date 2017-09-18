/*    JavaScript 6th Edition
 *    Nerd Out! shop
 *    Variables and functions
 *    Author: Eric Mynatt
 *    Date:   9.12.17

 *    Filename servicesJava.js
 */
 
 function loadServices() {
	 loadDiscRepair();
	 loadConsoleRepair();
	 loadTradeIns();
 }
 
 function loadDiscRepair() {
   document.getElementById("item1Picture").src = "images/disc_repair.jpg"; 
   document.getElementById("item1Title").innerHTML = "Disc Repair";
   document.getElementById("item1Price").innerHTML = "$4.99";
   document.getElementById("item1Text").innerHTML = "We can most often repair any disc. It may not take all the scratches out, but will fill them in so the disc will play!";
   document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
	 
 }
 function loadConsoleRepair() {
   document.getElementById("item2Picture").src = "images/console_repair.jpg"; 
   document.getElementById("item2Title").innerHTML = "Console Repair";
   document.getElementById("item2Price").innerHTML = "$24.99";
   document.getElementById("item2Text").innerHTML = "We can usually repair most consoles. In most cases it is dirt on the laser eye lens. With our patented method we can extend the life of your console.";
   document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
	 
 }
 function loadTradeIns() {
   document.getElementById("item3Picture").src = "images/trade_ins.jpg"; 
   document.getElementById("item3Title").innerHTML = "Game Trade-ins";
   document.getElementById("item3Price").innerHTML = "check value at register";
   document.getElementById("item3Text").innerHTML = "We give top dollar for game trade ins! Why keep those old games when you can get new ones!";
   document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
	 
 }