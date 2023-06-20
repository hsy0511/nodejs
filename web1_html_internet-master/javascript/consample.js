// if else if문 많이 사용
// 이런식으로 사용하여 다른 코드와 응용했을 때 성능이 올라감. 

var a = 3;
var b = 7;

if(a<3){
    console.log('정답')
}else if(a==b){
    console.log('2트 성공')
}else if(a>b){
    console.log('3트 성공')
}else if(a>=b){
    console.log('4트 성공')
}else if(a===b){
    console.log('5트 성공')
}else if(a!==3){
    console.log('6트 성공')
}else if(b!==7){
    console.log('7트 성공')
}else{
    console.log('이걸 못맞추네 에휴')
}

