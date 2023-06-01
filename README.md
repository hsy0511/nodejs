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
## 제 11강 url의 이해 
![image](https://github.com/hsy0511/nodejs/assets/104752580/e2798d43-2a5b-4f73-a749-12db3960d1d1)

우리가 사용하는 main.js 파일은 페이지를 바꿀 때 마다 파일이 달라지는 정적인 웹 페이지이다.

정적인 웹 페이지는 100개의 페이지를 만드려면 100개의 파일을 만들어야 한다.

하지만 node js는 동적인 웹 페이지이므로 한 파일에서 여러개의 페이지를 만들어서 보내줄 수 있다. 

![image](https://github.com/hsy0511/nodejs/assets/104752580/7cd9cd49-03e5-4ebc-b5e1-29bb8889c588)

동적인 웹 페이지의 예시 이다.

다른 페이지인데 똑같은 파일에서 받는 것을 볼 수 있다.

파일은 같지만 뒤에있는 t의 값이 달라진다. 

t 값이 다른 이유는 veiwtopic.php 애플리케이션(응용프로그램)이 웹 브라우저에게 서로 다른 페이지를 만들어서 보내는 것이기 때문이다.

이제 url을 이해해보자
![image](https://github.com/hsy0511/nodejs/assets/104752580/30784bb8-ca7d-422a-9b64-6c64aacf8ce0)

protocol(통신규칙) : 사용자가 서버에 접속할 때 어떤 방식으로 통신 할 것인가에 대한 방법

http(Hypertext Transfer Protocol) : 웹브라우저와 웹서버가 데이터를 주고 받기위한 통신 규칙

host(domain) : 인터넷의 접속되어 있는 컴퓨터

opentutorials.org : 인터넷의 접속되어 있는 컴퓨터 주소

port : 한대의 컴퓨터 안에 여러대의 서버가 있을 수 있는데 클라이언트가 접속했을 때 
그 중에 어떤 서버와 통신 할지 애매하다. 그럴 때 접속할 때 3000이라고 하면 3000번 
포트에 연결되어 있는 서버와 통신하게 된다.

웹서버 기본 포트 값은 80이다. http를 사용하고 포트를 안쓰면 80포트 서버랑 연결된다.

path : 컴퓨터 안에 있는 디렉토리 안에 파일

query string : 쿼리 스트링의 값을 변경하면 우리가 웹서버에게 데이터를 전달할 수 있다. (즉, 사용자가 입력 데이터를 전달하는 방법)

쿼리 스트링의 시작은 ?로 시작하기로 약속되어 있고 값과 값은 &를 쓰기로 약속 되어 있고 
값의 이름과 값은 =로 구분하기로 약속되어 있다.

예제에서 볼 때는 html에 12 페이지를 읽고 싶다는 것이다.

## 제 12강 url을 통해서 입력된 값 사용하기
- query string 따라서 다른 정보를 보여주는 방법
![image](https://github.com/hsy0511/nodejs/assets/104752580/f772d590-9d33-43fa-80d1-b2aef0d9712d)

url에 뒤에 id가 쿼리 스트링인데 id가 어디있는지 확인 하기위해 consol.log를 통해 찾는다.

변수 url에 id가 입력 받은 것을 볼 수 있다.

이제 id에 따라서 다른 정보를 만들기 위해서 코드를 변경해준다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/1aec753f-6571-4ef8-b88a-e9961fa0ab91)

var url = require('url')을 추가했다. 

require가 요구하다는 뜻인데 여기서는 url이라는 변수에서 url이라는 모듈을 사용할 것이다 라는 뜻이다.

###### ※ 모듈 : node js에서 비슷한 기능을 모아둔 것

url 변수가 겹치면 안되기 때문에 다른 하나의 url은 _url로 바꿀 것이다.

그리고 var queryData = url.parse(_url, true).query;를 추가했다. 

쿼리 데이터 변수는 쿼리 스트링을 추출한다는 뜻이다.

쿼리 스트링을 확인하기 위해 쿼리 데이터에 consol.log를 한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/308b51cb-734e-4ba8-b576-ea319643d509)

id : html이 추출된 것을 볼 수 있다. 그러면 id 즉, 쿼리 스트링을 입력하기 위해서는 queryData.id를 해야한다는 것이다.

확인을 위해서 queryData.id를 로그해보자.

![image](https://github.com/hsy0511/nodejs/assets/104752580/9133a8f3-158c-4b68-ac6d-0781b7dba48e)

html이 나온것을 확인할 수 있다.

그러면 이제 파일들을 읽어주는 코드인 response.end(fs.readFileSync(__dirname + _ural); 코드를 지우고

response.end(queryData.id); 코드로 변경하여 id를 읽어 쿼리 스트링 값을 입력받아 사용할 수 있는 것을 볼 수 있다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/7db954d2-6160-427a-a52f-1d3c6c870075)

## 제 13강 app 제작 - 동적인 웹페이지 만들기
동적인 웹 페이지를 만들기 위해서 template이라는 변수를 만들고 변수 안에 1.html에 코드 전체를 복사해온다.

그리고 파일들을 읽어주는 코드를 response.end(queryData.id);에서 response.end(template);으로 변경해준다.

```javascript
response.end(template);
```

1.html 코드 에서 바꾸고 싶은 코드는 <title>WEB1 - HTML</title>과 <h2>HTML</h2> 이다.

```javascript
var title = queryData.id 
```

위 코드를 추가하여 타이틀 변수는 쿼리스트 값을 입력 받아 나타낼 수 있게 했다.

```javascript
var template = `
    <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  <ol>
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.css">CSS</a></li>
    <li><a href="3.javascript">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
  <img src="coding.jpg" width="100%">
  </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
  </p>
</body>
</html>
    `;
```

${tile}을 통해서 변경하고 싶은 코드에 title 변수를 넣어줬다.

```javascript
  <ol>
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
  </ol>
```

위 코드도 바뀐 것을 볼 수 있다.

이렇게 바꾸고 main.js을 실행하면 동적인 웹페이지로 변경된 것을 볼 수 있다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/b5d1ef29-d093-4792-97d2-f86aa359b473)
![image](https://github.com/hsy0511/nodejs/assets/104752580/a815c2b2-1fe3-4a33-a541-862b022af0a4)
![image](https://github.com/hsy0511/nodejs/assets/104752580/021c3574-ad8d-4721-8562-2d2b55cf919a)
![image](https://github.com/hsy0511/nodejs/assets/104752580/dcd45146-182e-442b-ae57-d026762fe422)

## 제 14강 node js의 파일읽기 기능
```javascript
var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function(err, data){
    console.log(data);
})
```
fs 변수에서 fs 모듈을 사용할 수 있다.

fs.readFile이라는 함수를 사용해서 sample.txt 파일을 utf-8 형태로 읽어 드릴 수 있다.

function(err, data)에서 err는 에러가 발생했을 경우에 err을 나타낸다는 코드이다.

data는 콜백 함수이므로 실행할 때 사용하는 코드이다.
## 제 15강 app 제작 - 파일을 이용해 본문 구현
- 파일 읽기 기능을 통해서 본문 구현하기

html, css, javascript의 본문을 다른 폴더에 파일로 저장한다. 

![image](https://github.com/hsy0511/nodejs/assets/104752580/73ed0687-e835-493d-8ff7-0e030f18e92b)

그리고 main.js 파일에서 파일 읽기 기능을 사용하여 본문 파일들을 읽어 드린다.

```javascript
fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, data){
    var template = `
      <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
     <h1><a href="/">WEB</a></h1>
     <ul>
     <li><a href="/?id=HTML">HTML</a></li>
     <li><a href="/?id=CSS">CSS</a></li>
     <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${data}</p>
    </body>
    </html>
    `;
    response.end(template);
  })
```

data 폴더 안에서 쿼리 스트링을 utf-8 형태로 읽어 드린다.

그리고 본문에 ${data}를 넣어서 쿼리 스트링 마다 본문이 다르게 나오게 한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/85591d37-f1c5-40e6-a02a-abc6f9073621)
![image](https://github.com/hsy0511/nodejs/assets/104752580/c89ab869-5271-424d-aa61-81952b52c1aa)
![image](https://github.com/hsy0511/nodejs/assets/104752580/15c5426a-4e7b-41e4-a3d3-cf03abe3e3dc)

## 제 16강 javascript - Boolean
- Boolean 데이터 타입은 ture와 false로만 값이 나뉜다.
- true와 false를 변수로 사용할 수 없다.

```javascript
console.log(true); // true
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/ebdbac83-436a-40ad-b5d9-b909d2676583)

```javascript
console.log(false); // false
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/94b8446b-6681-4c21-8a2c-831c1ce3b6e7)

- 자료형 데이터를 boolean() 함수로 변환시

1. String 자료형
```javascript
var booleanVar1 = Boolean("String"); // true
console.log(booleanVar1)
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/ebdbac83-436a-40ad-b5d9-b909d2676583)

```javascript
var booleanVar1_ = Boolean(""); // false
console.log(booleanVar1_)
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/94b8446b-6681-4c21-8a2c-831c1ce3b6e7)

2. Null 자료형
```javascript
var booleanVar2 = Boolean(null); // false
console.log(booleanVar2)
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/94b8446b-6681-4c21-8a2c-831c1ce3b6e7)

3. number 자료형
```javascript
var booleanVar3 = Boolean(4); //true
console.log(booleanVar3)
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/ebdbac83-436a-40ad-b5d9-b909d2676583)

```javascript
var booleanVar3_ = Boolean(0); // false
console.log(booleanVar3_)
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/94b8446b-6681-4c21-8a2c-831c1ce3b6e7)

4. Boolean 자료형
```javascript
var booleanVar4 = Boolean(true); //true
console.log(booleanVar4)
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/ebdbac83-436a-40ad-b5d9-b909d2676583)

```javascript
var booleanVar4_ = Boolean(false); // false
console.log(booleanVar4_)
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/94b8446b-6681-4c21-8a2c-831c1ce3b6e7)

## 제 17강 javascript - 비교연산자
- 이항 연산자 : 왼쪽 항과 오른쪽 항을 연산한다. (사칙연산)

```javascript
console.log(1+1);
```
