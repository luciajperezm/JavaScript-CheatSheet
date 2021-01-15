/*
John and his family went on a holiday and to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of
the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and $10 if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one of each bill)
2. Containing all three paid amounts (bill + tip)
to calculate 20% of a value, multiply it wit 0.2
*/
function calculateTip(bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill >= 50 && bill < 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}

var threeTips = [calculateTip(124), calculateTip(48), calculateTip(268)];
console.log(threeTips);

var threeAmounts = [threeTips[0]+124, threeTips[1]+48, threeTips[2]+268]
console.log(threeAmounts);