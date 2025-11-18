/* Challenge: Working with ages
MVP
Create a variable that contains your age Add 10 to your age variable and log the output to the console Subtract 7 from your age variable and log the output to the console Multiple your age variable by 11 and log the output to the console
*/
const myAge = 45;
let myAddedAge = myAge + 10;
console.log('My age plus 10 is ' + myAddedAge);
let mySubtractedAge = myAge - 7;
console.log('My age minus 7 is ' + mySubtractedAge);
let myMultipliedAge = myAge * 11;
console.log('My age  multiplied by 11 is ' + myMultipliedAge);

/*Challenge: Calculating Moon Rotations
MVP
Create two variables The first for the number of earth days. (You can choose any number of days) One to hold the number of earth days it takes for the moon to rotate. Log the number of rotations of the moon given the number of earth days you specified
*/
let earthDays = 966;
const moonRotationDays = 29.53059;
let moonRotations = earthDays / moonRotationDays;
console.log(`The moon has rotated ${moonRotations} times in ${earthDays} earth days.`);

/*Challenge: Calculating Moon Orbits
MVP
Create another variable to store the number of earth days it takes for the moon to orbit the earth Log the number of orbits the moon can do, given the number of earth days */
const moonOrbitDays = 27.3;
let MoonOrbites = earthDays / moonOrbitDays;
console.log(`The moon has orbited ${MoonOrbites} times in ${earthDays} earth days.`);
