/* PBJ Converted By Nat(e) 
 * https://repl.it/@BleM3n/pbj-conversion-natejs 
 */

/* Get Your Tools */
//Go into the kitchen were you eat
goTo(kitchen);
//Go to the dinning table
goTo(dinningTable);
//grab a chair with both your hands
get(chair);
// Bring the chair to the cupboard.Were the plates & cups are 
bring(chair, counter1); //put (chair, counter) 
//place the chair in front of the cupboard. Make sure the back of the chair where you put your back on isn’t near the counter.
put(chairFacingLeft); 
// Climb on top of the chair with both your hands.
climbUp(chair);
// Once on top of the chair climb on to the counter.
climbUp(counter1);
// Open the cabinet door. There should be a shiny door knob.
open(cupBoard);
//Look for a plate
locate(plate);
// Once you’ve found the plate, grab it
put(plate);
// Place the plate on the counter. Do not step on it!
put(plate, counter1);
//Close the CupBoard door
close(cupBoard);
// Get off the counter onto the chair.
climbDown(counter1);
// Get off the chair
climbDown(chair);
// Pick up the plate on the counter with both hands
get(plate);
// Move the plate to the table
bring(plate, dinningTable);
// Walk to the silverware drawer at the counter.
goTo(counter1);
// Open the drawer with a handle
open(drawer);
//Look for the butter knife
locate(butterKnife);
//Grab the butter knife
put(butterKnife);
//Place the butterknife to the table next to the Plate
bring(butterKnife, dinningTable);

/* Get Your Ingredients */
// Go to the counter where the chair is
goTo(counter1);
// Grab the only chair that is not at the table(the one you used to get the plate) with both hands
put(chair);
// Move the chair in front of the pantry
bring(chair, counter2);
// Again make sure the back on the chair isn’t in front of the counter
put(chairFacingLeft);
// Climb onto the chair
climbUp(chair);
//Get on to the counter
climbUp(counter2);
// Open the pantry door with the door knob
open(pantryDoor);
// Look to see a jar with (Insert Color)paper around it. The top will be the same color. The will also be brown in the jar
locate(peanutButterJar);
// Grab the jar with both hands
put(peanutButterJar);
// Place the jar on the counter
place(peanutButterJar, counter2);
//Close the PantryDoor
close(pantryDoor);
// Get off the counter onto the chair
climbDown(counter2);
// Get off the chair
climbDown(chair);
// Pick up the chair with both hands
put(chair);
// Move the chair back to its original spot
bring(chair, dinningTable);
// Place it there
put(chairFacingForward);
//Go back to the counter to grab the peanut butter jar
goTo(counter2);
// Pick up the jar with both hands
put(peanutButterJar);
// Bring the jar with both hands on to the table
bring(peanutButterJar, dinningTable);
// Place the jar on the table
put(peanutButterJar);
// Go to the big white box also, known as the fridge.
goTo(refrigerator);
// Open the top door with the hand, not the bottom one.
open(fridge);
// Once you open it hold it with one hand cause it will close
hold(fridgeDoor);
// Then look for a jar with purple stuff inside it.If you cannot see it look at the inside of the door.
locate(jellyJar);
// Once you find the jar pick it up with both hands
put(jellyJar);
// Close the fridge door.
close(fridgeDoor);
// Move the jar and place it on to the table right next to the plate and the Peanut butter
bring(jellyJar, dinningTable);
// Go to the counter
goTo(counter3);
// Look for a bag with brown and white stuff.
locate(breadBag);
// Grab the bag with both hand
put(breadBag);
// Bring the bag to the table
bring(breadBag, dinningTable);
// Place the bag on the table
put(breadBag);

/* Make the Sandwich */
// Open the bread bag with both your handsOpen
open(breadBag);
// Take two pieces of bread out of the bag. One hand with one piece of bread, another with the other
put(breadSlice 1);
// Place the pieces of bread on the plate
placeOver(breadSlice, plate);
// hold the peanut butter jar with the hand you don’t write with
hold(peanutButterJar);
// Use the hand you write with to grab the top
put(peanutButterJarCap);
// Twist the top/cap hard to your left with your (I’ll just say right) hand, aka the hand you use to write with
twistLeft(peanutButterJarCap);
// Place the cap on the table.
put(peanutButterJarCap);
// Pick up the butter knife on the table with your right hand
put(butterKnife);
// Use the butter knife to scoop the peanut butter
scoop(peanutButter);
// Place the peanut butter jar down
put(peanutButterJar);
// Get a slice of bread 
hold(breadSlice1);
// Spread the peanut butter on one of the bread
spread(peanutButter, breadSlice1);
// You will run out of butter to spread on the knife so repeat lines 10-14 until the bread is covered in peanut butter
repeat(117 125 127 131 133);
// Put down the butter knife when your done
put(butterKnife);
// Then grab the Peanut Butter jar
put(peanutButterJar);
// Also grab the lid
put(peanutButterJarCap);
// Put the lid back on the peanut butter jar
placeOver(peanutButterJarCap, peanutButterJar);
twistRight(peanutButterJarCap);
// Once peanut butter is spread completely on one piece of bread put the peanut butter jar down
put(peanutButterJar);
// The knife as well 
put(butterKnife);
//Pick up the Jelly jar with your left hand
hold(jellyJar);
// Open the Jelly jar
twistLeft(jellyJarCap);
// Pick up the butter knife with your right hand
put(butterKnife);
// Use the butter knife to scoop the jelly
scoop(jelly);
// Place the jelly jar down
put(jellyJar);
// Grab the slice of bread 
put(breadSlice2);
//Spread the jelly on the bread that DOES NOT have peanut butter on it
spread(jelly, breadSlice2);
// You might run out of jelly on the knife so repeat lines 16-20
repeat(149 153 155 157 159 161);
// Once completely spreaded put the butter knife down
put(butterKnife);
// Pick up the Jelly Jar
put(jellyJar);
// Pick up the cap
put(jellyJarCap);
// Close it back up by putting the lid back one
placeOver(jellyJarCap, jellyJar);
twistRight(jellyJarCap);
// Once Done put down the jelly jar
put(jellyJar);
// Then put down the butter Butter Knife
put(butterKnife);
// take a bread of your choosing (The peanut butter spread bread or the jelly spreaded bread)however will just say the jelly spreaded bread. Pick up the bread with one hand
put(breadSlice2);
// place it on top of the peanut butter bread. However in doing so make sure the jelly is facing the peanut butter
placeOver(breadSlice2FacingDown, breadSlice1);
// Eat the sandwich and enjoy!
eat(peanutButterJellySandwich);