/*
John and Mark both play basketball in different teams.
In the latest 3 games, John's team scored 89, 120 and
103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which team wins in average (highest ave score), and
print the winner to the console. Also include the average score
in the output.
3. Then change the scores to show different winners. Don't forget
to take into account there might be a draw (same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and
105 points. Like before, log the average to the console. Hint: you will need 
the && operator to take the decision. 
5. Like before, change the scores to generate different winners, keeping 
in mind there might be draws.
*/

var johnScore = (89 + 120 + 103) / 3;
var MikeScore = (120 + 89 + 103) / 3;
var maryScore = (89 + 103 + 120) / 3;

if (MikeScore > maryScore && MikeScore > johnScore) {
    console.log('Mike\'s team is the winner with an average score of '+ MikeScore + ' points!');
} else if (johnScore == MikeScore || johnScore == maryScore || maryScore == MikeScore){
    console.log('There was a draw!!');
}else if (maryScore > MikeScore && maryScore > johnScore) {
    console.log('Mary\'s team is the winner with an average score of ' + maryScore + ' points!');
} else {
    console.log('John\'s team is the winner with an average score of ' + johnScore + ' points!');
}