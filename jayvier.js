/* PBJ by Jayvier https://repl.it/@Jayvier4/PBandJ-Jayvier#script.js */
/*PB&J by Jayvier*/

/* Get Your Tools */
// Go to the cupBoard
goTo(cupBoard);
// Open cupboard 
open(cupBoard);
// Get plate 
get(plate);
// Go to counter 
goTo(counter);
// Put plate down on counter
put(plate);
// Go to drawer 
// Open drawer
open(drawer);
// Get butterknife
get(butterKnife);
// Go to counter 
// Put butterknife down on counter\
put(butterKnife);

/* Get Your Ingredients */
// Go to the pantry. 
goTo(pantry);
// Open pantry 
open(pantry);
// Get peanutButter jar
get(peauntButterJar);
// Go to counter 
goTo(counter);
put(peauntButterJar);
// Go to fridge 
goTo(fridge);
// Open fridge
open(fridge); 
// Get jelly jar
get(jellyJar);
hold(jellyJar);
close(fridge);
// Go to counter
goTo(counter); 
// Put jelly jar down on counter
put(jellyJar);
// Get breadBag
get(breadBag);
hold(breadBag);
// Open breadBag
open(breadBag);
// Put breadBag down on counter
put(breadBag);
// Grab two slices of bread
get(breadSlice 2);
// Put bread on plate
goTo(plate);
put(breadSlice 2);

/* Make the Sandwich */
// Get the peanut butter jar from the counter.
get(peauntButterJar);
// Open peanut butter jar
open(peauntButterJar);
// Put peanut butter jar lid on counter
get(butterKnife);
// Get butterknife
hold(butterKnife);
scoop(peauntButterJar);
// Put knife in peanut butter jar
put(peauntButterJar);
// Put peanut butter jar down
get(breadSlice);
// Get plate
spread(breadSlice);
// Spread peanut butter on bread
put(breadSlice);
put(butterKnife);
// Put knife down
get(jellyJar);
// Get jelly jar
open(jellyJar); 
// Open jelly jar
get(butterKnife);
hold(butterKnife);
// Put jelly Jar lid down
scoop(jellyJar); 
// Get knife 
put(jellyJar);
// Put knife in jelly jar
get(breadSlice)
// Put jelly jar down
 spread(breadSlice);
// Get plate
// Spread jelly on bread
put(butterKnife); 
// Put plate down
placeOver(breadSlice)
// Put knife down 
// Get the two pieces of bread 
// Combine the two pieces of bread