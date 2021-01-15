/*Mark and John are trying to compare their BMI (Body 
mass index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter):

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information
about wheter Mark has a bigger BMI than John
Print a string to the console containing the 
variabñe from step 3. Something like "Is mark's BMI
higher than john's? true"
*/

var markMass = 54;
var markHeight = 1.89;
var johnMass = 69;
var johnHeight = 1.54;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var higherBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + higherBMI);


/*LET'S USE IF ELSE STATEMENTS INSTEAD*/
var markMass = 54;
var markHeight = 1.89;
var johnMass = 69;
var johnHeight = 1.54;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log('Marks BMI is higher than John\'s: ' + markBMI);
} else{
    console.log('John\'s BMI is higher: ' + johnBMI);
}



