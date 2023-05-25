# nodejs
강의 : 생활코딩 

url : https://www.youtube.com/playlist?list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm

## 제 1강 수업소개 nodejs란 무엇인가?
node js는 javascript를 이용해서 웹 브라우저가 아닌 컴퓨터 자체를 제어하는것이다.

## 제 2강 수업의 목적
우리의 웹사이트에 방문하는 사용자에게 컨텐츠에 대한 읽기만 하는게 아닌 생성 수정 삭제를 웹을 통해서 사용할 수 있게 하여 사용자들 직접 자신의 콘텐츠를 웹을 통해서 올릴 수 있게 하기 위해서 만든다.

## 제 3강 node js 설치 및 실행(window)
- 구글에서 nodejs.org를 검색하여 들어간다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/c49427a7-97a2-4811-a1fb-196d3bd5a623)

- nodejs 홈페이지에서 download for windows (x64)에서 18.160.0 LTS를 클릭하여 다운로드를 받는다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/43860ecf-34a7-4180-a1b9-979eaec6d0cd)

- 다운로드 파일을 실해하여 모두 next를 한 뒤 install하여 다운로드 한다.
- 다운로드가 완료되면 설치 확인을 위해 cmd 창을 연다.
- cmd 창을 켜서 nodejs -v를 입력하여 설치가 완료되었는지 확인한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/67e01f11-4b7c-4c57-a75e-fff6153c8eb1)

- 설치가 완료된 것을 확인하였으면 nodejs가 잘 실행되는지 확인하기 위해 cmd창에 node를 입력한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/f6af03b7-d785-4256-b004-d1c56c9370d8)

- node 입력 후 console.log(1+1);를 했을 때 2가 나오면 실행이 제대로 된 것이다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/d34f11a9-e3be-4d08-b163-bcbf1f2e30ea)

- nodejs 실행을 중지하려면 .exit를 입력하여 실행 중지를 한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/95db016e-fa36-4777-9db3-db4bd35612c0)

- 설치, 실행 확인이 끝나면 바탕화면에 새폴더를 만든다.
- 새폴더를 자신이 사용할 프로그램에서 열어준다.(my program : vscode)
- 새폴더에 js 파일을 만들어 console.log를 입력한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/4b14dd29-06da-4d89-b26d-a409fb91b071)

- js 파일을 실행하기 위해서 cmd 창을 연다.
- cmd 창에서 cd js파일경로를 입력한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/550d4b28-075f-4515-bdbd-e9c171f0b40b)

- js파일에 있는 폴더에 들어왔다.
- 폴더에 들어왔으면 cmd 창에서 node 파일명을 입력하여 실행시킨다.(2가 나오면 실행 성공)

![image](https://github.com/hsy0511/nodejs/assets/104752580/11c44c32-f74b-498b-a9cc-062ff42bf169)

- 설치 및 실행 완료

## 제 4강 공부방법
우리가 필요한 javascript의 문법을 적당히 배우고 javascript를 이용하여 nodejs가 가지고 있는 우리한테 필요한 기능을 배우고 애플리케이션을 하나씩 만든다. 

## 제 5강 nodejs로 웹서버 만들기

https://opentutorials.org/module/3549/21032 사이트에 들어간다.

- 참고에 있는 링크를 들어간다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/e186b099-190a-4952-a962-cb4d6771468a)

- 링크에서 code를 눌러 zip 파일을 다운로드 받는다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/6fa526e6-4473-4561-a664-6ce6696cf6e8)

- 압축을 풀고 프로그램에서 폴더를 연다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/45fd9a0f-7ac0-4cd5-8eff-f55e5a56f21b)

- 폴더에 js 파일을 추가하고 처음 들어갔던 사이트에 있던 소스코드 2번째를 추가한 js 파일에 복사하여 입력한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/93c73293-9d62-4c94-9eb4-f5a10f48ca36)

- 콘솔창에 node js파일명을 입력하여 실행한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/a0179c42-bf85-45ef-92cf-3b6bd53b673b)

- 크롬에서 http:localhost:3000을 입력하면 웹서버가 만들어진 것을 확인할 수 있다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/ac290446-5f43-4680-a9d7-e4c38c803431)

- 웹서버 생성완료
## 제 6강 javascript 문법 - number
number는 숫자 데이터 타입이다.

숫자 데이터 타입은 그냥 아무런 표시없이 사용할 수 있다.
- 더하기 연산자
```javascript
console.log(1+1);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/9bb4890c-73e6-49d8-a067-02c09c101f2b)

- 빼기 연산자
```javascript
console.log(4-1);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/68caffdb-bd1a-4fa7-91d1-2067b4348a19)

- 곱하기 연산자
```javascript
console.log(2*2);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/c700066c-ef7f-4dd9-b4cd-09a6686a55b1)

- 나누기 연산자
```javascript
console.log(10/2);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/25e92fa4-7ba3-4c03-90d2-e5903bdaea23)

## 제 7강 javascript 문법 - String
String은 문자 데이터 타입이다.

문자 데이터 타입을 사용할 때는 ''와 ""를 사용하는데 '로 시작하면 '로 끝내야하고 "로 시작하면 "로 끝내야한다.
- 문자열 출력
```javascript
console.log('hello world!!')
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/55b5848e-33c9-4d84-ab80-ac4ebcfeec87)

- 결합연산자
```javascript
console.log('1'+'1');
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/8e6d3899-c817-4798-b87e-f7bb34919a9e)

- 글자 수 세기
```javascript
console.log('hello world!!'.length);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/89b2fcf9-54fb-412a-b8e1-ec7927f280b1)

## 제 8강 javascript 문법 - 변수의 형식
변수는 valiable을 줄여서 var 형태로 사용한다.
- 변수선언 및 출력
```javascript
var a = 1;
console.log(a);
var h = 'hello world';
console.log(h);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/30355c62-adbf-4ce9-877e-ad6de4e9b4f2)

## 제 9강 javascript 문법 - 변수의 활용
변수를 사용하여 문자열을 바꿀 수 있다.
- 문자열 연결하기
```javascript
var name = 'hello';
var hw = name + ' world!!';
console.log(hw);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/70fde42c-429c-4d82-b796-ff7cc87949cc)

## 제 10강 javascript 문법 - Template Literal(내장된 표현식을 허용하는 문자열 데이터)
문자열을 줄 바꿈할 때 \n을 사용하는데 \n을 대신에서 사용할 수 있음.

사용 방법은 문자열 시작과 끝을 ``로 사용한다.
- 일반 줄 바꿈
```javascript
var name = 'hello';
var hw = name + '\n world!!';
console.log(hw);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/3fe8dcec-f44c-44eb-ad97-70744e8fd086)

- template literal 줄 바꿈
```javascript
var hw = name + `
 world!!`;
console.log(hw);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/3bed640c-a93f-41e3-93d4-0c4f58e657a7)

그리고 template literal을 사용할 때 표현식 삽입이라는걸 할 수 있다.

표현식 삽입은 ${} 형태로 사용하고, ${} 사이에 변수나 연산 등을 삽입할 수 있다. 
- 표현식 삽입
```javascript
var a = 1000;
var b = 2000;
var c = 20000;
var d = `나는 ${c}원을 가지고 있다.
사과 하나에 ${a}원 이고 배 하나에 ${b}원이다.
사과 2개와 배 5개를 구매해서 ${(a*2) + (b*5)}원을 사용했다.
남은 돈은 ${20000 - ((a*2) + (b*5))}원이다.`
console.log(d);
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/97d08b21-c7b5-4b99-97ef-7364576592a1)
