/*    JavaScript 6th Edition
 *    Nerd Out! shop
 *    Variables and functions
 *    Author: Mark Rone
 *    Date:   9.11.17

 *    Filename: shopJava.js
 */

function loadDoctorWho() {
  loadAdiposeSquishy();
  loadSonicScrewdriver();
  loadCookieJar();
  loadTardisThrow();
  loadWeepingAngels();
  loadTardisTeaPot();
}

function loadAdiposeSquishy() {
  document.getElementById("item1Picture").src = "images/doctor_who_adipose_stress_toy.jpg"; 
  document.getElementById("item1Title").innerHTML = "Adipose Squishy";
  document.getElementById("item1Price").innerHTML = "$24.99";
  document.getElementById("item1Text").innerHTML = "Gosh, we wish those Adipose pills had actually worked without the pesky side effect of death. We could have fit a lot more of us in those elevators at Dragon*Con. Sadly, we're just going to have to hit the gym and attempt spin class. If copy stops being written, you'll know why.";
  document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
}

function loadSonicScrewdriver() {
  document.getElementById("item2Picture").src = "images/doctor_who_sonic_screwdriver.jpg"; 
  document.getElementById("item2Title").innerHTML = "Sonic Screwdriver";
  document.getElementById("item2Price").innerHTML = "$99.99";
  document.getElementById("item2Text").innerHTML = "When our friends at The Wand Company wanted to make a TV remote based on David Tennant's sonic screwdriver, they did something cool: they called him up. And then he did something cooler: he lent them his screen-used prop so they could 3D scan it and make it into a remote control for all Whovians to enjoy.";
  document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
}

function loadCookieJar() {
  document.getElementById("item3Picture").src = "images/doctor_who_tardis_talking_cookie_jar.jpg"; 
  document.getElementById("item3Title").innerHTML = "Tardis Cookie Jar";
  document.getElementById("item3Price").innerHTML = "$14.99";
  document.getElementById("item3Text").innerHTML = "We don't know about you, but we miss the days when we lived alone. Back then, we could have a jar full of cookies and know exactly how many were left. Simple mathematics. 51 Oreos in a package, minus 2 before work, minus 2 when we got home, minus 2 after dinnner with a glass of cold milk. We knew that package of Oreos would last approximately 8.5 days. But now that we're saddled with significant others, roommates, and/or geeklings, the math gets complicated. With so many variables, it's nearly impossible to solve for x (x being the number of cookies currently in the jar, duh). We can usually assume x is equal to or greater than one, because most humans won't eat the last cookie, but even that constant isn't so constant around some people.";
  document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
}

function loadTardisThrow() {
  document.getElementById("item4Picture").src = "images/doctor_who_tardis_throw.jpg"; 
  document.getElementById("item4Title").innerHTML = "Tardis Throw";
  document.getElementById("item4Price").innerHTML = "$29.99";
  document.getElementById("item4Text").innerHTML = "How do we let the Doctor know we're ready to be his next companion? We're drinking out of our TARDIS mug, brewing tea in our TARDIS teapot, wearing our TARDIS t-shirt and TARDIS hat, and wrapped up in the TARDIS Throw. Surely the Doctor will notice that we are the most dedicated Whovians ever and come pick us up for some wild adventures, right? Right?";
  document.getElementById("item4Rating").innerHTML = '&#9733; &#9733; &#9734; &#9734; &#9734';
}

function loadWeepingAngels() {
  document.getElementById("item5Picture").src = "images/doctor_who_weeping_angels_bookends.jpg"; 
  document.getElementById("item5Title").innerHTML = "Weeping Angels Bookends";
  document.getElementById("item5Price").innerHTML = "$49.99";
  document.getElementById("item5Text").innerHTML = "The infamous weeping angels appear to be statues when, in fact, they are horrifying creatures that feed on temporal energy. They feed by sending those they touch backwards in time, sometimes by hundreds of years, separating you from the ones you love forever. They are fast - insanely fast, though you'll literally never see them coming. If you look at them, they become quantum-locked. N00b level defence, maintain eye-contact forever. Don't blink. Pro-level defence, get two angels to look at each other.";
  document.getElementById("item5Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
}

function loadTardisTeaPot() {
  document.getElementById("item6Picture").src = "images/doctor_who_tardis_tea_pot.jpg"; 
  document.getElementById("item6Title").innerHTML = "Tardis Tea Pot";
  document.getElementById("item6Price").innerHTML = "$29.99";
  document.getElementById("item6Text").innerHTML = "Is your teatime a little dull? Don't you wish you could be sipping tea aboard the TARDIS? We do... but we'll add that we hope that it's not choppy on the timestream because we don't want to scald ourselves. Nothing's worse than the combination of hot tea and astral turbulence.";
  document.getElementById("item6Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
}

function loadStarWars(){
	loadXWindModelKit();
	loadGuardActionFigure4Pack();
	loadR2D2Figure();
	loadRogueOnePlushes();
	loadAtAtModelKit();
	loadLightSabers();
}

function loadXWindModelKit(){
  document.getElementById("item1Picture").src = "images/starwars_xwing_star_fighter_model_kit.jpg"; 
  document.getElementById("item1Title").innerHTML = "X-Wing Starfighter Model Kit";
  document.getElementById("item1Price").innerHTML = "$27.99";
  document.getElementById("item1Text").innerHTML = "Don't underestimate the destructive force of some small, one-manned fighters. You think these little suckers can't hold their own? Think again! With the power of the Force on their side, these classic Rebel starfighters can take down entire moons! Wait, that's no moon...";
  document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
}

function loadGuardActionFigure4Pack(){
  document.getElementById("item2Picture").src = "images/starwars_black_srs_guard.jpg"; 
  document.getElementById("item2Title").innerHTML = "Star Wars: The Black Series - Guard Action Figure 4 Pack";
  document.getElementById("item2Price").innerHTML = "$89.99";
  document.getElementById("item2Text").innerHTML = "With this set you get to witness the evolution of the Guard throughout the Star Wars franchise. You get a member of the blue Senate Guard of the prequel, the red Imperial Royal Guard from the original trilogy, from Legends the black-clad, Force-sensitive Emperor's Shadow Guard (complete with lightsaber pike), and the new, red Elite Praetorian Guard from Star Wars: The Last Jedi, the personal guard of Snoke, Supreme Leader of the First Order.";
  document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9734; &#9734; &#9734';
}

function loadR2D2Figure(){
  document.getElementById("item3Picture").src = "images/starwars_r2d2_fig_white.jpg"; 
  document.getElementById("item3Title").innerHTML = "Star Wars 40th Anniversary R2-D2 Figure";
  document.getElementById("item3Price").innerHTML = "$22.99";
  document.getElementById("item3Text").innerHTML = "For a little droid, Artoo sure is resilient. Load him up with secret plans for the rebellion? No problem. Consider it done. Need help to find a Jedi master in the swamp? He can do it powered down. Serving drinks on Jabba's ship? Just call him BAR2-D2. What we're trying to say is that R2 can get the job done, no matter what the job is. We can't help but love the lil' guy after everything we've been through together.";
  document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
}

function loadRogueOnePlushes(){
  document.getElementById("item4Picture").src = "images/starwars_rogue_one_plushes.jpg"; 
  document.getElementById("item4Title").innerHTML = "Star Wars: Rogue One Plushes";
  document.getElementById("item4Price").innerHTML = "$7.99";
  document.getElementById("item4Text").innerHTML = "A lot of the galaxies' problems could probably be solved with a hug or two. Death Star? What about the Cuddle Star? That is an Empire we can support! We can't just dictate things, though. We have to lead by example and show the people that hugs are the key to ending conflicts. ";
  document.getElementById("item4Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
}

function loadAtAtModelKit(){
  document.getElementById("item5Picture").src = "images/starwars_atat_model_kit.jpg"; 
  document.getElementById("item5Title").innerHTML = "Star Wars AT-AT 1/144 Model Kit";
  document.getElementById("item5Price").innerHTML = "$47.99";
  document.getElementById("item5Text").innerHTML = "When these bad boys walked on the screen during Star Wars: Episode V - The Empire Strikes Back, you knew it was about to go down. Nowadays, we know that if you sweep the legs you probably stand a better chance, but even after we found their weakness they still took out that power generator, no problem. Maybe you can fix that little problem when you build your own Imperial Walker, though.";
  document.getElementById("item5Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
}

function loadLightSabers(){
  document.getElementById("item6Picture").src = "images/starwars_lightsabers_v2_combo.jpg"; 
  document.getElementById("item6Title").innerHTML = "Star Wars Force FX Lightsabers";
  document.getElementById("item6Price").innerHTML = "$199.99";
  document.getElementById("item6Text").innerHTML = "From the first time you saw the flash of light and that hum, way back in 1977, in Obi-Wan Kenobi's bungalow, you knew you wanted one. At first, you weren't quite sure what they were, but they were powerful and wonderful. And even now, after over 30 years, you still want one. The time has come, friends, to join the ranks of the Jedi (or Sith). Time to arm yourself with one of the most beloved weapons of all time: the Star Wars Force FX Lightsaber!";
  document.getElementById("item6Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
}

function loadMarvel(){
  loadCaptainAmericaArt();
  loadDeadpoolBeanie();
  loadGuardianOfTheGalaxy();
  loadSHIELDRing();
  loadThorsHammer();
  loadIronManOrnament();
}

function loadCaptainAmericaArt(){
  document.getElementById("item1Picture").src = "images/marvel_captain_america_play_arts_kai.jpg"; 
  document.getElementById("item1Title").innerHTML = "Captain America: Play Arts Kai Variant";
  document.getElementById("item1Price").innerHTML = "$99.99";
  document.getElementById("item1Text").innerHTML = "For such a well-rounded hero, this version of Captain America is awfully angular. His armor in this Play Arts Kai reimagining almost looks like it's made from origami. We hope for his sake it isn't. ";
  document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
}

function loadDeadpoolBeanie(){
  document.getElementById("item2Picture").src = "images/marvel_deadpool_beanie.jpg"; 
  document.getElementById("item2Title").innerHTML = "Marvel Deadpool Beanie";
  document.getElementById("item2Price").innerHTML = "$7.99";
  document.getElementById("item2Text").innerHTML = "No matter how spicy you order them, tacos and chimichangas can only keep you so warm. Eventually your belly will be happily digesting said spicy food and the rest of your body will be jealously wishing for more warmth. ";
  document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9734; &#9734; &#9734';
}

function loadGuardianOfTheGalaxy(){
  document.getElementById("item3Picture").src = "images/marvel_pop_gotg2_vinyl_fig.jpg"; 
  document.getElementById("item3Title").innerHTML = "POP Guardians of the Galaxy 2 Vinyl Figure";
  document.getElementById("item3Price").innerHTML = "$7.99";
  document.getElementById("item3Text").innerHTML = "We don't know about you, but we think raccoons already have enough biological advantages. It's bad enough that they have five little toes on those front paws. We're very glad that the racoons we come in contact with don't show up factory-equipped with rocket skates and guns. It'd be much harder to keep them out of our trash that way. ";
  document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
}

function loadSHIELDRing(){
  document.getElementById("item4Picture").src = "images/marvel_shield_hydra_ring.jpg"; 
  document.getElementById("item4Title").innerHTML = "S.H.I.E.L.D. Hydra Ring";
  document.getElementById("item4Price").innerHTML = "$244.99";
  document.getElementById("item4Text").innerHTML = "The Strategic Homeland Intervention Enforcement and Logistics Division (S.H.I.E.L.D.) is no stranger to keeping secrets, but some of their agents may be hiding one secret too many. A big, evil, cut off one head, two more will take its place type of secret. Yup, Hydra has infiltrated S.H.I.E.L.D. - and it's hiding inside this S.H.I.E.L.D. ring too!";
  document.getElementById("item4Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
}

function loadThorsHammer(){
  document.getElementById("item5Picture").src = "images/marvel_hammer_of_legend_mjolnir.jpg"; 
  document.getElementById("item5Title").innerHTML = "Hammer of Legend: Mjölnir";
  document.getElementById("item5Price").innerHTML = "$149.99";
  document.getElementById("item5Text").innerHTML = "Pentz is referring to the pendants found at archaeological digs, not actual-size hammers. But actual-size hammers ALSO offer protection, even moreso than a little pendant. Swing this puppy, and we promise you'll feel protected. Weighing almost 4 lbs. this creation from Museum Replicas features a genuine hand-stained wood shaft studded with brass rivets, a handle with a contoured suede-wrap grip, and even a Norse motif on the end cap. But that's not what you're here for. You're here for the gorgeous hammerhead with the Norse motif forged from one solid piece of metal. It makes us want to say, We're not worthy!";
  document.getElementById("item5Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
}

function loadIronManOrnament(){
  document.getElementById("item6Picture").src = "images/marvel_iron_man_ornament.jpg"; 
  document.getElementById("item6Title").innerHTML = "Hallmark Resin Marvel Iron Man Ornament";
  document.getElementById("item6Price").innerHTML = "$7.99";
  document.getElementById("item6Text").innerHTML = "Unite the Avengers on your tree! This 3-inch resin Iron Man ornament features the classic red-and-yellow suit, standing at the ready to deflect any attack the Marvel Universe might try to make on your holiday. Hang him up on your tree using the included coordinating ribbon hanging loop, and you'll have a very merry Marvel Christmas!";
  document.getElementById("item6Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
}