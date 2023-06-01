// true와 false로 나타냄

// ture와 false는 변수로 사용할 수 없다

console.log(true); // true

console.log(false); // false


// 자료형 boolean() 함수로 변환시

// String 자료형
var booleanVar1 = Boolean("String"); // true
console.log(booleanVar1)

var booleanVar1_ = Boolean(""); // false
console.log(booleanVar1_)

// Null 자료형
var booleanVar2 = Boolean(null); // false
console.log(booleanVar2)

// number 자료형
var booleanVar3 = Boolean(4); //true
console.log(booleanVar3)

var booleanVar3_ = Boolean(0); // false
console.log(booleanVar3_)

// boolean 자료형
var booleanVar4 = Boolean(true); //true
console.log(booleanVar4)

var booleanVar4_ = Boolean(false); // false
console.log(booleanVar4_)