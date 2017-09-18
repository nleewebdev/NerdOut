/*    JavaScript 6th Edition
 *    Nerd Out! shop
 *    Variables and functions
 *    Author: Mark Rone
 *    Date:   9.18.17

 *    Filename: shopJava.js
 */

 var doctorWhoPictures = ["images/doctor_who_adipose_stress_toy.jpg", "images/doctor_who_sonic_screwdriver.jpg", "images/doctor_who_tardis_talking_cookie_jar.jpg", 
						  "images/doctor_who_tardis_throw.jpg", "images/doctor_who_weeping_angels_bookends.jpg", "images/doctor_who_tardis_tea_pot.jpg"]
 var doctorWhoTitles = ["Adipose Squishy", "Sonic Screwdriver", "Tardis Cookie Jar", "Tardis Throw", "Weeping Angels Bookends", "Tardis Tea Pot"]
 var doctorWhoPrices = ["$24.99", "$99.99", "$14.99", "$29.99", "$49.99", "$29.99"]
 var doctorWhoText = ["Gosh, we wish those Adipose pills had actually worked without the pesky side effect of death. We could have fit a lot more of us in those elevators at Dragon*Con. Sadly, we're just going to have to hit the gym and attempt spin class. If copy stops being written, you'll know why.",
					  "When our friends at The Wand Company wanted to make a TV remote based on David Tennant's sonic screwdriver, they did something cool: they called him up. And then he did something cooler: he lent them his screen-used prop so they could 3D scan it and make it into a remote control for all Whovians to enjoy.",
					  "We don't know about you, but we miss the days when we lived alone. Back then, we could have a jar full of cookies and know exactly how many were left. Simple mathematics. 51 Oreos in a package, minus 2 before work, minus 2 when we got home, minus 2 after dinnner with a glass of cold milk. We knew that package of Oreos would last approximately 8.5 days. But now that we're saddled with significant others, roommates, and/or geeklings, the math gets complicated. With so many variables, it's nearly impossible to solve for x (x being the number of cookies currently in the jar, duh). We can usually assume x is equal to or greater than one, because most humans won't eat the last cookie, but even that constant isn't so constant around some people.",
					  "How do we let the Doctor know we're ready to be his next companion? We're drinking out of our TARDIS mug, brewing tea in our TARDIS teapot, wearing our TARDIS t-shirt and TARDIS hat, and wrapped up in the TARDIS Throw. Surely the Doctor will notice that we are the most dedicated Whovians ever and come pick us up for some wild adventures, right? Right?",
					  "The infamous weeping angels appear to be statues when, in fact, they are horrifying creatures that feed on temporal energy. They feed by sending those they touch backwards in time, sometimes by hundreds of years, separating you from the ones you love forever. They are fast - insanely fast, though you'll literally never see them coming. If you look at them, they become quantum-locked. N00b level defence, maintain eye-contact forever. Don't blink. Pro-level defence, get two angels to look at each other.",
					  "Is your teatime a little dull? Don't you wish you could be sipping tea aboard the TARDIS? We do... but we'll add that we hope that it's not choppy on the timestream because we don't want to scald ourselves. Nothing's worse than the combination of hot tea and astral turbulence."]
 
 var starwarsPictures = ["images/starwars_xwing_star_fighter_model_kit.jpg", "images/starwars_black_srs_guard.jpg", "images/starwars_r2d2_fig_white.jpg",
                         "images/starwars_rogue_one_plushes.jpg", "images/starwars_atat_model_kit.jpg", "images/starwars_lightsabers_v2_combo.jpg"]
 var starwarsTitles = ["X-Wing Starfighter Model Kit", "Star Wars: The Black Series - Guard Action Figure 4 Pack", "Star Wars 40th Anniversary R2-D2 Figure",
                       "Star Wars: Rogue One Plushes", "Star Wars AT-AT 1/144 Model Kit", "Star Wars Force FX Lightsabers"]
 var starwarsPrices = ["$27.99", "$89.99", "$22.99", "$7.99", "$47.99", "$199.99"]
 var starwarsText = ["Don't underestimate the destructive force of some small, one-manned fighters. You think these little suckers can't hold their own? Think again! With the power of the Force on their side, these classic Rebel starfighters can take down entire moons! Wait, that's no moon...",
					 "With this set you get to witness the evolution of the Guard throughout the Star Wars franchise. You get a member of the blue Senate Guard of the prequel, the red Imperial Royal Guard from the original trilogy, from Legends the black-clad, Force-sensitive Emperor's Shadow Guard (complete with lightsaber pike), and the new, red Elite Praetorian Guard from Star Wars: The Last Jedi, the personal guard of Snoke, Supreme Leader of the First Order.",
					 "For a little droid, Artoo sure is resilient. Load him up with secret plans for the rebellion? No problem. Consider it done. Need help to find a Jedi master in the swamp? He can do it powered down. Serving drinks on Jabba's ship? Just call him BAR2-D2. What we're trying to say is that R2 can get the job done, no matter what the job is. We can't help but love the lil' guy after everything we've been through together.",
					 "A lot of the galaxies' problems could probably be solved with a hug or two. Death Star? What about the Cuddle Star? That is an Empire we can support! We can't just dictate things, though. We have to lead by example and show the people that hugs are the key to ending conflicts. ",
					 "When these bad boys walked on the screen during Star Wars: Episode V - The Empire Strikes Back, you knew it was about to go down. Nowadays, we know that if you sweep the legs you probably stand a better chance, but even after we found their weakness they still took out that power generator, no problem. Maybe you can fix that little problem when you build your own Imperial Walker, though.", 
					 "From the first time you saw the flash of light and that hum, way back in 1977, in Obi-Wan Kenobi's bungalow, you knew you wanted one. At first, you weren't quite sure what they were, but they were powerful and wonderful. And even now, after over 30 years, you still want one. The time has come, friends, to join the ranks of the Jedi (or Sith). Time to arm yourself with one of the most beloved weapons of all time: the Star Wars Force FX Lightsaber!"]
 
 var marvelPictures = ["images/marvel_captain_america_play_arts_kai.jpg", "images/marvel_deadpool_beanie.jpg", "images/marvel_pop_gotg2_vinyl_fig.jpg", 
					   "images/marvel_shield_hydra_ring.jpg", "images/marvel_hammer_of_legend_mjolnir.jpg", "images/marvel_iron_man_ornament.jpg"]
 var marvelTitles = ["Captain America: Play Arts Kai Variant", "Marvel Deadpool Beanie", "POP Guardians of the Galaxy 2 Vinyl Figure", 
                     "S.H.I.E.L.D. Hydra Ring", "Hammer of Legend: Mjölnir", "Hallmark Resin Marvel Iron Man Ornament"]
 var marvelPrices = ["$99.99", "$7.99", "$7.99", "$244.99", "$149.99", "$7.99"]
 var marvelText = ["For such a well-rounded hero, this version of Captain America is awfully angular. His armor in this Play Arts Kai reimagining almost looks like it's made from origami. We hope for his sake it isn't. ",
				   "No matter how spicy you order them, tacos and chimichangas can only keep you so warm. Eventually your belly will be happily digesting said spicy food and the rest of your body will be jealously wishing for more warmth. ",
				   "We don't know about you, but we think raccoons already have enough biological advantages. It's bad enough that they have five little toes on those front paws. We're very glad that the racoons we come in contact with don't show up factory-equipped with rocket skates and guns. It'd be much harder to keep them out of our trash that way. ", 
				   "The Strategic Homeland Intervention Enforcement and Logistics Division (S.H.I.E.L.D.) is no stranger to keeping secrets, but some of their agents may be hiding one secret too many. A big, evil, cut off one head, two more will take its place type of secret. Yup, Hydra has infiltrated S.H.I.E.L.D. - and it's hiding inside this S.H.I.E.L.D. ring too!", 
				   "Pentz is referring to the pendants found at archaeological digs, not actual-size hammers. But actual-size hammers ALSO offer protection, even moreso than a little pendant. Swing this puppy, and we promise you'll feel protected. Weighing almost 4 lbs. this creation from Museum Replicas features a genuine hand-stained wood shaft studded with brass rivets, a handle with a contoured suede-wrap grip, and even a Norse motif on the end cap. But that's not what you're here for. You're here for the gorgeous hammerhead with the Norse motif forged from one solid piece of metal. It makes us want to say, We're not worthy!",
				   "Unite the Avengers on your tree! This 3-inch resin Iron Man ornament features the classic red-and-yellow suit, standing at the ready to deflect any attack the Marvel Universe might try to make on your holiday. Hang him up on your tree using the included coordinating ribbon hanging loop, and you'll have a very merry Marvel Christmas!"]
 
 var dcComicsPictures = ["images/dc_Harley_Quinn_Mallet.jpg", "images/dc_Batman_Mirror.jpg", "images/dc_wonder_woman_stash_bag.jpg", 
						 "images/dc_glantern_light_buckle.jpg", "images/sc_flash_captain_cold_unmasked_pop_vinyl_fig.jpg", "images/dc_teen_titans_day_kids_tee_mb.jpg"]
 var dcComicsTitles = ["Harley Quinn Mallet", "Batman Mirror", "Wonder Woman Stash Bag", "Green Lantern Light Up Buckle", 
					   "Flash TV Pop! Vinyl Figure - Captain Cold Unmasked EE Exclusive", "Teen Titans Go! Perfect Day Kids' T-Shirt"]
 var dcComicsPrices = ["$29.99", "$29.99", "$4.99", "$29.99", "$11.99", "$14.99"]
 var dcComicsText = ["Mario in Donkey Kong. Thor. Harley Quinn. What do these three have in common? That's right. When you ask them to put the hammer down, they put the hammer down. Or, in Harley's case, the mallet.",
					 "You are vengeance, you are the night, you are... probably in serious need of a comb right about now. After all, you've been out all night fighting crime on the streets of Gotham, but you're expected to show up on time and presentable to an 8am board meeting at Wayne Enterprises, and you'll have to do it all again tonight. Who has time to blow dry when you've got a megacorporation to run during the day and streets to clean up at night?",
					 "You know how when you try to sneak a theater-sized box of candy that you procured at your local grocery store for a buck into the movies so you don't have to go into debt for your snack bought at the theater itself, it rattles and makes all sorts of racket and gives you away? Well, we've found the perfect use for this Wonder Woman Stash Bag. We're packing ours full of Skittles for seeing Wonder Woman on the big screen.",
					 "Imagine if the buckle on your belt wasn't just a large, eye-catching, and particularly attractive accessory - but instead it was an intergalactic peacekeeping weapon. A weapon limited only by your imagination. A weapon powered by the force of your will... or a micro-USB cable. ",
					 "Captain Cold can give Flash a run for his money. For someone with no superpowers, he certainly gives the guy who does have superpowers a lot of trouble. He's like Batman - except he doesn't have a lot of money, and he doesn't have nearly as many gadgets, and he doesn't have a sidekick named Robin.... Okay, he isn't like Batman, but he is still pretty awesome... for a villain we mean.",
					 "In between all the hustle and bustle of kicking the butts of bad guys, sometimes you just need a chill day. It's hard to get much more chill than eating, sleeping, and playing video games. Come to think of it, whether you're beating up bad guys on the regular or not, that is just an all-around-perfect day."]
 
 var starTrekPictures = ["images/star_trek_communicator.jpg", "images/star_trek_uss_enterprise_coasters.jpg", "images/star_trek_bluetooth_com_badge.jpg", 
						 "images/star_trek_varsity_jackets_all.jpg", "images/star_trek_mugs.jpg", "images/star_trek_movie_phaser.jpg"]
 var starTrekTitles = ["Star Trek: TOS Bluetooth® Communicator", "Star Trek U.S.S. Enterprise NCC-1701 Coasters Set of 6", "Star Trek TNG Bluetooth® ComBadge - Exclusive", 
					   "Star Trek The Next Generation Varsity Hoodie", "Exclusive Star Trek Next Gen Mugs", ""]
 var starTrekPrices = ["$149.99", "$19.99", "$63.99", "$55.99", "$2.99", "$7.99"]
 var starTrekText = ["Admit it: you've wanted this from the first time you saw a flip phone back in the '90s. Why did it take 20 years before we could deliver it to you? Look, it's technology from the FUTURE. These things take time to get right, okay? ",
					 "We love the Enterprise. She's such a majestic ship, tearing through space at warp speed like it's nothing. Beneath that shiny, unruffled surface, everybody's favorite Constitution Class vessel is incredibly complicated. ",
					 "We've had a screen-accurate prop replica ST:TNG badge in our closet for a while. The only thing it was missing was the ability to emit the classic communicator chirp sound effect when we pressed it. ",
					 "Counselor Troi has been known, for most of her career actually, to wear not-the-standard Starfleet uniform, so we're branching out in our offerings, too. These varsity jackets are a nice change of pace from the standard Starfleet issue. This uniform is made for cooler climates and more relaxed atmospheres (social, that is, and not planetary).",
					 "Aboard the U.S.S. Enterprise all of your needs are taken care of by the computer, and so you can order just about anything you want to drink from the replicator. There is a price to pay for this, though: the paradox of too many choices; the paralysis that comes with infinite possibility. The reason Jean-Luc Picard always orders "tea, Earl Grey, hot" is the same reason why some CEOs have a closet full of just one outfit: it saves valuable time and brain space to not make a choice and just stick with something you know you'll like. Time and brainspace you need as the captain of Starfleet's flagship.",
					 "Congratulations on your graduation from the Academy! To commemorate your achievement, and prepare you for your assignment on board the U.S.S. Enterprise NCC-1701, you have been issued an official Starfleet phaser pistol. This new model is comprised of two parts: a removable Type 1 "cricket" phaser and a Type 2 pistol grip."]
 
 function loadDoctorWho() {
	//Run loop here
    loadDoctorWhoRatings();
 }

 function loadDoctorWhoRatings() {
	document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
	document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
	document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
	document.getElementById("item4Rating").innerHTML = '&#9733; &#9733; &#9734; &#9734; &#9734';
	document.getElementById("item5Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
	document.getElementById("item6Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
 }

function loadStarWars(){
	//Run loop here
	loadStarWarsRatings();
}

function loadStarWarsRatings(){
  document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9734; &#9734; &#9734';
  document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
  document.getElementById("item4Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item5Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item6Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
}

function loadmarvel(){
	//Run loop here
	loadmarvelRatings();
}

function loadmarvelRatings(){
  document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9734; &#9734; &#9734';
  document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
  document.getElementById("item4Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item5Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item6Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
}

function loadDCComics(){
	//Run loop here
	loadDCComicsRatings();
}

function loadDCComicsRatings(){
  document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9734; &#9734; &#9734';
  document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
  document.getElementById("item4Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item5Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item6Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
}

function loadStarTrek(){
	//Run loop here
	loadStarTrekRatings();
}

function loadStarTrekRatings(){
  document.getElementById("item1Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item2Rating").innerHTML = '&#9733; &#9733; &#9734; &#9734; &#9734';
  document.getElementById("item3Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734';
  document.getElementById("item4Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item5Rating").innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733';
  document.getElementById("item6Rating").innerHTML = '&#9733; &#9733; &#9733; &#9734; &#9734';
}