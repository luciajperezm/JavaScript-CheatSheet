/*This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10$ if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. this method should include a loop to iterate over all the paid bills and do the tip calculation 
4. as an output, create:
    a. a new array containing all tips
    b. an aray containing final paid amounts(bill + tip) hint: start with two empty arrays [] as properties then fiil them up in the loop*/
var allTips = [];
var finalPayment = [];
var bills = {
    billValue: [124, 48, 268, 180, 42],
    calcTip: function() {
        for (var i = 0; i < this.billValue.length; i++) {
            if (this.billValue[i] < 50){
                allTips.push(this.billValue[i] * 0.2);
                finalPayment.push((this.billValue[i] * 0.2) + this.billValue[i]);
            } else if (this.billValue[i] >= 50 && this.billValue[i] < 200) {
                allTips.push(this.billValue[i] * 0.15);
                finalPayment.push((this.billValue[i] * 0.15) + this.billValue[i]);
            } else {
                allTips.push(this.billValue[i] * 0.1);
                finalPayment.push((this.billValue[i] * 0.1) + this.billValue[i]);
            }
        }
    }
};   
bills.calcTip();
console.log(allTips);
console.log(finalPayment);
 /*
EXTRA: mark's family also went on a holiday, going to 4 different restaurants. the bills were $77, $475, $110 and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300
5. Implement the same functionality as before, this time using mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
Hint: loop over the array, and in each iteration store the current sum in a variable 
(starting from 0). After you have the sum of the array, divide it by the number of elements
in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. log to the console which family paid the highest tips on average
*/
var markTips = [];
var finalPaymentMark = [];
var mark = {
    MarkBills: [77, 475, 110, 45],
    calcTipMark: function() {
        for (var i = 0; i < this.MarkBills.length; i++) {
            if (this.MarkBills[i] < 100){
                markTips.push(this.MarkBills[i] * 0.2);
                finalPaymentMark.push((this.MarkBills[i] * 0.2) + this.MarkBills[i]);
            } else if (this.MarkBills[i] >= 100 && this.MarkBills[i] < 300) {
                markTips.push(this.MarkBills[i] * 0.10);
                finalPaymentMark.push((this.MarkBills[i] * 0.10) + this.MarkBills[i]);
            } else {
                markTips.push(this.MarkBills[i] * 0.25);
                finalPaymentMark.push((this.MarkBills[i] * 0.25) + this.MarkBills[i]);
            }
        }
    }
};
mark.calcTipMark();
console.log(markTips);
console.log(finalPaymentMark);

var averageTips = function(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
        
    }
    return sum / tips.length;
    /*for (var i = 0; i < tips.length; i++){
        return (tips.reduce((x, y) => x + y)/tips.length);
        
    }*/ //another way to do it
};

var averageMike = averageTips(markTips);
var averageJohn = averageTips(allTips);

if (averageJohn < averageMike) {
    console.log("Mark paid more in tips! " + averageMike);
} else {
    console.log("John paid more in tips " + averageJohn);
}
