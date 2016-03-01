var name = prompt("What's your name?");
var name2 = prompt("What's a name of your friend?");
var name3 = prompt("Type in a name for Corral");
var teacher = prompt("What's your favorite teacher's last name?", "Ex. Davis, Claughton, Blanchard");

var noun1 = prompt("Name a location");
var noun2 = prompt("Name an other location");
var noun3 = prompt("Name a location in the last location");

var verb1 = prompt("Enter a action.", "Ex: Bagged, Stabbed, Took, Swam");
var verb2 = prompt("Type in a thing to do in your 2nd location. Past tense", "End in -ing");
var verb3 = prompt("Name something you do everyday", "Word ending in -ing");

var adj1 = prompt("Name a describing word describing the place you are at in location 1", "Ex. Dark, scary, happy, dead");
var adj2 = prompt("Name a describing word describing the place you are at in location 2", "Ex. Dark, scary, happy, dead");
var adj3 = prompt("Name a describing word describing the place you are at in location 3", "Ex. Dark, scary, happy, dead");
    
var adv1 = prompt("Name a word that ends in -ly", "Ex. Quickly, slowly");
var adv2 = prompt("Name a word that ends in -ly", "Ex. Quickly, slowly");
var adv3 = prompt("Name a word that ends in -ly", "Ex. Quickly, slowly");

var prep1 = prompt("Type either on, with, next to.");
var prep2 = prompt("Type either on, with, next to.");
var prep3 = prompt("Type either on, with, next to.");

document.write("One day, " + name + " woke up confused.");
document.write(name2 + " asked, what's wrong " + name + "?");
document.write(name + " replied, It's Mr." + teacher + "'s birthday and I don't know what to do. ");
document.write("At school they wait outside, in the Data parking lot, for Mr." + teacher + ". Finally Mr. " + teacher + " walked out to his car then " + name2 + " and " + name3 + " Corral " + verb1 + " Mr. " + teacher + " to the " + noun1 + ".");
document.write("After going to " + noun1 + " they all went to " + noun2 + ". In " + noun2 + " they all went to " + noun3 + " inside of " + noun2 + ".");
document.write("Once they were in " + noun2 + " they " + verb2 + " With Mr. " + teacher + ". By the end of the hour they were " + verb3 + " like it was any other day. ");
document.write("Mr. " + teacher + " said, wow guys this was an awesome day in the " + adj1 + " " + noun1 + " then " + adv1 + " eating all the food in the " + adj2 + noun2 + " then going to the " + adj3 + noun3 + ". You guys are the best at " + verb1 + prep1 + " in a tight time period. Also " + verb3 + " " + prep2 + "the puppy from across the street! Then we finally " + verb2 + " " + prep3 + " the corral reef in the " + noun3 + ". The best part was when we " + adv2 + " ran from the puppy too and when we " + adv3 + " twerked on tuesday!"  );