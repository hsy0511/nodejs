// 함수의 입력

console.log(Math.round(1.6));

console.log(Math.round(1.4));

function sum(first, second){
    console.log(first+second)
}

sum(2,4);

// 함수의 출력

console.log(Math.round(1.6));

console.log(Math.round(1.4));

function sum(first, second){
    return first+second;
}

console.log(sum(2,4));

// 종료 return
function jk(a,b){
    console.log('r');
    return a+b
    console.log('v');
}

console.log(jk(2,3));