/*
Let's remember the first challenge where mark and 
john compared their BMIs. let's now implement the same 
functionality with objects and methods.

1. for each of them, create an object with properties
for their full name, mass and height
2. Then, add a method to each object and calculate
the BMI. save the BMI to the object and also return
it from the method.
3. In the end, log to the console who has the highest
BMI, together with the full name and the respective BMI.
Don't forget they might have the same BMI

remember: BMI= mass/ (height * height) kg and m
*/
var mark = {
    fullName: 'Mark Smith',
    mass: 89,
    height: 1.82,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
mark.calcBmi();

var john = {
    fullName: 'John Wayne',
    mass: 89,
    height: 1.82,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
john.calcBmi();

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has the highest BMI: ' + john.bmi);
} else if (john.bmi < mark.bmi) {
    console.log(mark.fullName + ' has the highest BMI: ' + mark.bmi);
} else {
    console.log(mark.fullName + ' and ' + john.fullName + ' have the same BMI: '+ mark.bmi);
}
