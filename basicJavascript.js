/* Javascript is a lightweight, crossplatform, object oriented programming language.
It can be used:
    1. In the client side: only used in the browser
    2. Server side: with node on the server */


/********************************************************************************************/
    /*------------------------------VARIABLES------------------------------*/
/********************************************************************************************/
var firstName = "Lucia Perez";
var age = 24;
//you can use prompt to get information from the user
var job = prompt('What is your job? ');
//you can concatenate with the pus sign
console.log(firstname + ' is a ' + age + ' year old ' + job);



/********************************************************************************************/
    /*--------------------------PRIMITIVE DATA TYPES------------------------------*/
/********************************************************************************************/
var numberType = 12;
var stringType = 'with single quotes';
var stringType2 = "with double quotes";
var booleanType = true; //or false
var undefinedType; //it does not have a value yet
var nullType; // it doesn't exist!


/********************************************************************************************/
    /*---------------------VARIABLE MUTATION AND TYPE COERCION--------------------------*/
/********************************************************************************************/
//type coercion means that js automatically converts types from one another
var age = 2;
var name = 'lucy';
console.log(name + ' is ' + age + ' years old.');
//two different data types printed in one sentence

//variable mutation means that js can change the value of a variable
var job = prompt("what's your job? ");
//job will change as many times as the value is inserted


/********************************************************************************************/
    /*-------------------------------MATH OPERATORS----------------------------------*/
/********************************************************************************************/
var age = 24;
var now = 2021;
var birthYear = now - age;
console.log(age + 15);
console.log(now / 2);
console.log(2 * 4);


/********************************************************************************************/
    /*--------------------------LOGICAL OPERATORS------------------------------*/
/********************************************************************************************/
var ageLucia = 24;
var ageAbel = 5;
var older = ageLucia < ageAbel; // false
var older2 = ageLucia > ageAbel; //true
// you can also use >= <= 


/********************************************************************************************/
    /*--------------------------typeof OPERATOR------------------------------*/
/********************************************************************************************/
//it tells us the data type of a value
console.log(typeof older); //Boolean


/********************************************************************************************/
    /*--------------------------OPERATOR PRECEDENCE------------------------------*/
/********************************************************************************************/
var now = 2021;
var yearMary = 2001;
var fullAge;

var isFullAge = now - yearMary >= fullAge;
//js executes math operations first then logical operator
// () has the biggest precedence 
//when in doubt check table 


/********************************************************************************************/
    /*--------------------------IF/ELSE STATEMENTS------------------------------*/
/********************************************************************************************/
var firstName = 'John';
var civilStatus = 'single';

    if (civilStatus === 'married') {
        console.log(firstName + ' is married!');
    } else {
        console.log(firstName + ' will hopefully marry soon');
    }


/********************************************************************************************/
    /*----------------------------BOOLEAN LOGIC--------------------------------*/
/********************************************************************************************/
var firstName = 'Jose';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + 'Is a young man');
} else{
    console.log(firstName + ' is a man.');
}
//AND (&&) -> true if ALL are true
//OR  (||) -> true if ONE is true
//NOT (!)  -> inverts true/false values
console.log(age >= 20); //->false
console.log(age < 30); //->true
console.log(!(age < 30)); //->false
console.log(age >= 20 && age < 30);//->false
console.log(age >= 20 || age < 30);//->true


/********************************************************************************************/
    /*--------------------------TERNARY OPERATOR------------------------------*/
/********************************************************************************************/
//It allows us to write an if/else statement all in one line
var fisrtName= 'lucia';
var age = 16;
//first we write the condition and finish it with a question mark ?
//then we write the output and finish it with a colon : 
//the colon means else and after it we write the other output
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/********************************************************************************************/
    /*--------------------------SWITCH STATEMENTS------------------------------*/
/********************************************************************************************/
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log('teaches kids how to code');
        break;
    case 'driver':
        console.log('drives a taxi');
        break;
    case 'designer':
        console.log('makes cute websites');
        break;
    default :
        console.log('does something else');
        //doesn't need a break because it's the last one
}


/********************************************************************************************/
    /*--------------------------TRUTHY AND FALSY VALUES------------------------------*/
/********************************************************************************************/
//falsy values: undefined, null, 0, '', NaN
//truthy values: not falsy values
var height;
if (height) {
    console.log('Variblae defined');
} else {
    console.log('variable has not been defined');
}


/********************************************************************************************/
    /*--------------------------EQUALITY OPERATORS------------------------------*/
/********************************************************************************************/
//=== equal in value and type
//== equal in value, the data type can vary


/********************************************************************************************/
    /*--------------------------------FUNCTIONS------------------------------------*/
/********************************************************************************************/
//a function is a piece of code that we can run a bunch of times

function calculateAge(birthYear) {
    return 2021 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1940);
var ageSarah = calculateAge(1996);

console.log(ageJohn, ageMike, ageSarah);

//now let's make a function that calculates years until retirement
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years');
}
yearsUntilRetirement(1990, 'John');


/********************************************************************************************/
    /*----------------------FUNCTION STATEMENTS AND EXPRESSIONS-------------------------*/
/********************************************************************************************/
//function declaration / statement
function whatDoYouDo(job, firstName){ }
//function expression
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches people how to code';
            //don't need the break keyword because return finishes the function
        case 'driver':
            return firstName + ' drives a taxi';
        case 'designer':
            return firstName + ' makes clothes';
        default:
            return firstName + ' does something else';
    } 
}



/********************************************************************************************/
    /*----------------------------------ARRAYS-----------------------------------*/
/********************************************************************************************/
//Colections of variables that can even have different data types
var names = ['Lucia', 'John', 'Sophie'];
var years = new Array(1990, 1996, 1958);
//arrays are zero base, they start from 0

console.log(names[0]); //-> Lucia
console.log(names.length); //-> 3

//we can also mutate the data
names[1] = 'Steph';
console.log(names);//-> Steph, John, Sophie

names[5] = 'Mary';
console.log(names);//-> Steph, John, Sophie, empty, Mary

//different data types
var john = ['john', 25, 'teacher', false];

//To add an element at the end of the array use the push function
john.push('abel');//->John, 25, teacher, false, abel

//To add at the beginning to the array use the unshift method
john.unshift('blue');

//to remove the element from the end use pop function
john.pop();

//to remove the first element use shift
john.shift();

//to know the position of an argument use indexOf()
john.indexOf(1990);
//if it doesnt find a position it returns -1, this also used to know if a value exists


/********************************************************************************************/
    /*-----------------------------OBJECTS AND PROPERTIES-------------------------------*/
/********************************************************************************************/
//KEY VALUE PAIRs, no particular order, we obtain the values by their name
var lucia = {
    firstName: 'Lucia',
    lastName: 'Perez',
    birthYear: 1996,
    family: ['Luisa', 'Alvaro', 'Abel'],
    isMarried: false
};
 //to obtain a value use a dot and the name of the key
 console.log(lucia.firstName);//-> Lucia

 //you can also use brackets to retrieve an element from the object
 console.log(lucia['lastName']);//-> Perez

 //you can asign a variable to one of the pairs
 var x = 'birthYear';
 console.log(lucia[x]); //->1996

 //to mutate data in the object
 lucia.isMarried = true;

 //another way to create objects
 var jane = new Object();
 jane.name = 'Jane';
 jane.brithYear = 1999;
 jane['lastname'] = 'Perez';
 console.log(jane);//-> Jane, 1996, Perez


/********************************************************************************************/
    /*-----------------------------OBJECTS AND METHODS-------------------------------*/
/********************************************************************************************/
//we can attach functions to objects and create methods
var lucia = {
    firstName: 'Lucia',
    lastName: 'Perez',
    birthYear: 1996,
    family: ['Luisa', 'Alvaro', 'Abel'],
    isMarried: false,
    calcAge: function() {
        this.age = 2021 - this.birthYear;
    }
};


/********************************************************************************************/
    /*-----------------------------LOOPS AND ITERATIONS-------------------------------*/
/********************************************************************************************/
//control structures for repetitive tasks

//the for loop, initial value, a condition, a counter
for (var i = 0; i < 11; i++) {
    console.log(i);
}

//let's say we have an array
var abel = ['Abel', 'Garcia', 2015, 'Spiderman', true];
//and we need to display this values in the screen
for (var i = 0; i < abel.length; i++) {
    console.log(abel[i]);
}


//the while loop
var i = 0;
while (i < abel.length) {
    console.log(abel[i]);
    i++;
}

//continue and break statements
//break->to break out of a loop
var teni = ['teni', 'jose', 2019, 'burrito', true];
for (var i = 0; i < teni.length; i++) {
    //we want to log something different than string elements 
    if (typeof teni[i] !== 'string') break;
    console.log(teni[i]);
}
//-> teni, jose... then it breaks

//continue-> to quit the current iteration of the loop and continue with the next one
var paula = ['paula', 'sofia', 2005, 'anime', true];
for (var i = 0; i < paula.length; i++) {
    //we want to log string elements 
    if (typeof paula[i] !== 'string') continue;
    console.log(paula[i]);
}

//looping backwards

for (var i = paula.length - 1; i >= 0; i--) {
    console.log(paula[i]); 
}













