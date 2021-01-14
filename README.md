# JavaScript-CheatSheet

## basicJavascript.js
Data types, Variables, operators, if/else statements, boolean logic, ternary operators, switch statement, functions, arrays, objects and methods, loops and iterations. 

## Challenge 1 - Basic BMI Calculator
Mark and John are trying to compare their BMI (Body mass index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about wheter Mark has a bigger BMI than John. Print a string to the console containing the 
variable from step 3. Something like "Is mark's BMI higher than john's? true"

## Challenge 2 - if/else statement challenge
John and Mark both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which team wins in average (highest ave score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average to the console. Hint: you will need 
the && operator to take the decision. 

## Challenge 3 - functions Tip Calculator
John and his family went on a holiday and to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of
the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and $10 if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one of each bill)
2. Containing all three paid amounts (bill + tip)

## Challenge 4 - BMI Calculator with Objects and Methods
Mark and John are comparing their BMI's again, for each of them, create an object with properties for their full name, mass and height.
Then, add a method to each object and calculate the BMI. save the BMI to the object and also return it from the method.

In the end, log to the console who has the highest BMI, together with the full name and the respective BMI.


## Challenge 5 - Final Challenge from basicJavascript.js 
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.

John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10$ if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. this method should include a loop to iterate over all the paid bills and do the tip calculation 
4. as an output, create:
    a. a new array containing all tips
    b. an aray containing final paid amounts(bill + tip) hint: start with two empty arrays [] as properties then fiil them up in the loop

EXTRA: mark's family also went on a holiday, going to 4 different restaurants. the bills were $77, $375, $110 and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300.

5. Implement the same functionality as before, this time using mark's tipping rules.
6. Create a function (not a method) to calculate the average of a given array of tips. 
7. Calculate the average tip for each family.
8. log to the console which family paid the highest tips on average.


