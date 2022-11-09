/*
Many tall buildings, including hotels, skip the number 13 when 
numbering floors -- often going from floor 12 to floor 14. It 
is thought that the number 13 is unlucky.
Write a program that will number 15 rooms starting from 1,
 skipping the number 13. Output to the console each room number in 
Quiz separate line.
*/
var countOfRooms = 15;
for (i=1; i<=16; i++) {
    if (i==13)
    continue;
    console.log(i);
    }
