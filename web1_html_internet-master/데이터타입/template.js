// 줄바꿈
var name = 'hello';
var hw = name + '\n world!!';
console.log(hw);
// template Literal 줄바꿈
var hw = name + `
 world!!`;
console.log(hw);
// template Literal 표현식 삽입
var a = 1000;
var b = 2000;
var c = 20000;
var d = `나는 ${c}원을 가지고 있다.
사과 하나에 ${a}원 이고 배 하나에 ${b}원이다.
사과 2개와 배 5개를 구매해서 ${(a*2) + (b*5)}원을 사용했다.
남은 돈은 ${20000 - ((a*2) + (b*5))}원이다.`
console.log(d);
