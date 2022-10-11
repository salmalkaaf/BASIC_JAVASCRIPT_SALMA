//cara 1 else if
/*
var pilihan = 5;
if (pilihan==1){
    console.log("Light");}

else if(pilihan==2){
    console.log("Dark");}

else if (pilihan==3) {
    console.log("Nocturne");}

else if (pilihan==4){
    console.log("Terminal"); }

else {
    console.log("Indigo");    
}
*/

//cara 2 switch case
/*
var pilihan = 2
switch (pilihan){

    case 1:
    console.log("Light")
    break

    case 2:
    console.log("Dark")
    break

    case 3:
    console.log("Nocturne")
    break

    case 4:
    console.log("Terminal")
    break
    
    case 5:
    console.log("Indigo")
}
*/

//cara 3 Ternary one line
var pilihan = 1;
console.log(pilihan==1?"Light":(pilihan==2?"Dark":(pilihan==3?"Nocturne":(pilihan==4?"Terminal":"Indigo"))));
