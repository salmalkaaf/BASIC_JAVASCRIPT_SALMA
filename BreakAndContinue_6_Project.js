/*
Explanation: Let's break down the distance the snail covers each day:
Day 1: 7-2=5
Day 2: 5+7-2=10
Day 3: 10+7-2=15
Day 4: 15+7-2=20
Day 5: 20+7-2=25
Day 6: 25+7=32
So, on Day 6 the snail will reach 32 feet and get out of the well at day,
 without slipping back that night.*/

var depth = 31
var day = 0;
for(let climb = 0; climb <= depth;) {
    day+=1;
    climb += 7;
    if (climb >= depth){
        break;
    }
    climb-=2
}
console.log(day);