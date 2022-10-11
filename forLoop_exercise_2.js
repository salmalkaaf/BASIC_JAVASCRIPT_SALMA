//exercise

console.log("====exercise===");
var i= 1 ;
for (i=1; i<=5; i++) {
    for (j=1; j<=5;  j++)
    console.log(i);
}

//test
console.log("====challenge===");
var a = 10 ;
for ( a=10; a>=1; a--) {
    console.log(a);
}


//bintang top to bottom
console.log("====bintang 1===");
var star = "";

for(var b=5; b > 0; b--){
    for (var c = 0; c< b; c++){
        star +="*";
    }
    star+="\n"
}
console.log(star);

//bintang bottom to top
console.log("====bintang 2===");
var star2 = "";

for(var b2=0; b2 <= 5; b2++){
    for (var c2 = 0; c2< b2; c2++){
        star2 +="*";
    }
    star2+="\n"
}
console.log(star2);


//diamond
let p = 5;
  let diamond = "";

  for (let i = 1; i <= p; i++) {
    for (let j = p; j > i; j--) {
      diamond += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      diamond += "*";
    }
    diamond += "\n";
  }
  for (let i = 1; i <= p - 1; i++) {

    for (let j = 0; j < i; j++) {
      diamond += " ";
    }
    for (let k = (p - i) * 2 - 1; k > 0; k--) {
      diamond += "*";
    }
    diamond += "\n";
  }
  console.log(diamond);



//heart shape
console.log("===making heart shape=== \n");
var n = 6;

for (let i = n / 2; i < n; i += 2) {
  // print first spaces
  for (let j = 1; j < n - i; j += 2) {
    process.stdout.write(' ')
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    process.stdout.write('*')
  }
  // print second spaces
  for (let j = 1; j < n - i + 1; j++) {
    process.stdout.write(' ')
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    process.stdout.write('*')
  }
  console.log();
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    process.stdout.write(' ')
  }
  for (let j = 1; j < i * 2; j++) {
    process.stdout.write('*')
  }
  console.log();
}

//U LETTER
var k = 8;
var l = "";

for(let i = 1; i < k; i++) {
    for(let j = 0; j < k; j++) {
      if(i === 0 || i === k - 1) {
        l += "*";
      }
      else {
        if(j === 0 || j === k - 1) {
          l += "*";
        }
        else {
          l += " ";
        }
      }
    }
    l += "\n";
  }
  console.log(l);


