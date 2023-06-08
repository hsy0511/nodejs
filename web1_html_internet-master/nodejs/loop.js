// while문

var i = 1;

while (i < 10) { 
    console.log(i);
    i++; 

}

// do while문

var i = 1, j = 1;

while (i > 3) { 
    console.log("i : <br>");
    i++;

}
do { 
    console.log("j : <br>");
    j++;

} while (j > 3);

// for문
for (var i = 1; i < 10; i++) {
    console.log(i);

}

// for in

var arr = [3, 4, 5];

for (var i in arr) { 
    console.log(i);

}

var obj = { name : "이순신", age : 20 };

for (var i in obj) {

    console.log(i);

}
// for of

var arr = [3, 4, 5];

for (var value of arr) {
    console.log(value);

}

var arr = new Set([1, 1, 2, 2, 3, 3]);

for (var value of arr) {
    console.log(value);
    
}