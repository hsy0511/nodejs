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

url에 뒤에 id가 쿼리 스트링인데 id가 어디있는지 확인 하기위해 console.log를 통해 찾는다.

변수 url에 id가 입력 받은 것을 볼 수 있다.

이제 id에 따라서 다른 정보를 만들기 위해서 코드를 변경해준다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/1aec753f-6571-4ef8-b88a-e9961fa0ab91)

var url = require('url')을 추가했다. 

require가 요구하다는 뜻인데 여기서는 url이라는 변수에서 url이라는 모듈을 사용할 것이다 라는 뜻이다.

###### ※ 모듈 : node js에서 비슷한 기능을 모아둔 것

url 변수가 겹치면 안되기 때문에 다른 하나의 url은 _url로 바꿀 것이다.

그리고 var queryData = url.parse(_url, true).query;를 추가했다. 

쿼리 데이터 변수는 쿼리 스트링을 추출한다는 뜻이다.

쿼리 스트링을 확인하기 위해 쿼리 데이터에 console.log를 한다.

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

1. html 코드에서 바꾸고 싶은 코드는 <title>WEB1 - HTML</title>과 h2 HTML /h2 이다.

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
![image](https://github.com/hsy0511/nodejs/assets/104752580/6fd64eee-dc69-4c13-ad25-ca14de914eb2)

- 비교연산자 : 왼쪽 항과 오른쪽 항을 비교했을 때 맞으면 true 틀리면 false를 나타내는 연산자이다.

```javascript
console.log(1==1); // true
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/b6375488-ecae-43ac-ba34-f5f9de1554af)


```javascript
console.log(1==2); // false
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/5eacde3c-dc1b-4597-a5dd-ea0e54d1958c)

```javascript
console.log(1!==2); // true
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/b6375488-ecae-43ac-ba34-f5f9de1554af)

```javascript
console.log(1>2); //false
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/5eacde3c-dc1b-4597-a5dd-ea0e54d1958c)

```javascript
console.log(1>=2); //false
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/5eacde3c-dc1b-4597-a5dd-ea0e54d1958c)

```javascript
console.log(1<=2); // ture
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/b6375488-ecae-43ac-ba34-f5f9de1554af)

```javascript
console.log(1<=2); // ture
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/b6375488-ecae-43ac-ba34-f5f9de1554af)

```javascript
console.log(1===2); // false 자료형까지 같아야함
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/5eacde3c-dc1b-4597-a5dd-ea0e54d1958c)

```javascript
console.log(1===1); // true 자료형까지 같아야함
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/b6375488-ecae-43ac-ba34-f5f9de1554af)

## 제 18강 javascrpt - 제어문
제어문은 프로그램의 순차적인 흐름을 제어해야 할 때 사용하는 실행문입니다.

쉽게 예를 들면 밑에 A,B,C1,D를 출력하는 페이지와 A,B,C2,D를 출력하는 페이지가 있는데 여기서 한페이지에서 어쩔 때는 C1이 나오게 한고 어쩔 때는 C2가 나오게끔 해주는 것이 제어문이라고 할 수 있습니다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/4aa2f02d-81b5-46d0-a057-39803f7afeb2)

제어문은 조건문과 반복문 등으로 나뉩니다.

## 제 19강 javascript - 조건문

![image](https://github.com/hsy0511/nodejs/assets/104752580/716ff14a-f8fa-4a95-bfa4-95366a199b42)

- 조건문 기본구조

1. if문 기본구조
```javascript
if(true){
    console.log('C1'); 
}
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/e69cf6a6-24c0-4688-9223-8a826594aa14)

2. if else문 기본구조
```javascript
if(true){
    console.log('C1'); 
}else{
    console.log('C2');
}
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/6ef754d6-366f-46fb-975e-97de426ca503)

3. if else if문 기본구조
```javascript
if(true){
    console.log('C1'); 

}else if(false){
    console.log('C2');

}else{
    console.log('C3')
}
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/ea53fdd2-a1a9-49d4-a1a0-c7f6702bf8ee)

- 조건 값을 넣었을 때 조건문

1. if문
```javascript
var num = 3;

if(num>2){
    console.log('맞습니다!')
}
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/37f0cf40-1ed0-4454-a3ce-107589143129)

2. if else문
```javascript
var num_ = 5;

if(num_>5){
    console.log('맞습니다!')
}else{
    console.log('틀렸습니다!!')
}

```
![image](https://github.com/hsy0511/nodejs/assets/104752580/0cc3f1bb-54d1-408e-bc53-cd57fd5749ff)

3 if else if문
```javascript
var num__ = 3;

if(num__ < 2){
    console.log('맞습니다!')
}else if(num__ = 3){
    console.log('2번째에 맞췄습니다!!')
}else{
    console.log('틀렸습니다!!!')
}

```
![image](https://github.com/hsy0511/nodejs/assets/104752580/8162f9c0-419e-4565-bcb8-2d4c53908317)

## 제 20강 nodejs - 콘솔에서의 입력값
프로그램를 출력하는 과정에서 input을 입력 값이라고 하는데 그 입력 값에는 parameter와 argument가 있다.

- parater는 입력되는 정보에 형식
- argument는 parameter에 맞게 십제로 입력된 값

![image](https://github.com/hsy0511/nodejs/assets/104752580/f6e53119-d801-4f04-89b6-915e1b7d766e)

일단 콘솔에서 입력받기 위한 코드를 사용한다.

```javascript
var args = process.argv;
console.log(args);
```

여기서 process.argv가 입력갑을 입력 할 수 있다는 것이다.

egoing이라는 입력값을 넣어서 실행해보았다.

```
PS C:\Users\MOA\Desktop\web1_html_internet-master\javascript>   node input.js egoing
```

결과 값이 배열로 나타났다.
```
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\MOA\\Desktop\\web1_html_internet-master\\javascript\\input.js',
  'egoing'
]
```
 

첫번째 배열에는 nodejs 런타임이 어디에 위치하는지 알려주는 정보이다.

두번째 배열은 실행 시킨 파일에 위치를 알려주는 값이다.

세번째는 입력한 입력값이다.

그리고 k880이라는 입력값을 추가했다.

```
PS C:\Users\MOA\Desktop\web1_html_internet-master\javascript>   node input.js egoing k880

[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\MOA\\Desktop\\web1_html_internet-master\\javascript\\input.js',
  'egoing',
  'k880'
]
```

이 배열에서 egoing을 나타 내고 싶으면 console.log 값에 배열에 2번째 값을 나타내야한다.

nodejs에서는 배열이 0번째 부터 나타내기 때문이다.

그래서 바꿔서 코드를 실행 시키면 egoing이 나오는 것을 볼 수 있다.
```javascript
var args = process.argv;
console.log(args[2]);
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/01070f9a-ebf0-4596-9f2e-5cd082875fa5)

그리고 이제 if문에서 콘솔 창에 1을 넣으면 true 값이 나와서 C1이 출력되고 2를 넣으면 false가 값이 나와서 C2가 출력되는 코드를 만들 것이다.

```javascript
if(args[2] === '1'){
    console.log('C1'); 
}else{
    console.log('C2');
}
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/28af9abf-1abe-4f93-ac1f-b4d2e98b52f8)

콘솔에 입력하는 1은 String 자료형이기 때문에 if(args[2] === '1')을 사용하면 자료형까지 완전히 같기 때문에 true가 되서 C1이 출력된다.

그리고 if(args[2] === '1')에서 1이 1이 아닌 다른 값이 들어가게 되면 false가 되기 때문에 C2가 나오게 된다.

이것을 통해서 nodejs에서는 입력값이 달라질 때마다 조건이 달라지는 것을 활용해서 하나에 프로그램이 여러가지 동작을 할 수 있는 것이다.
## 제 21강 app제작 - not found
존재하지 않는 디렉터리 주소에 들어가게 되면 오류 메세지를 사용자에게 전송하는 기능을 만들 것이다.
```javascript
 var pathname = url.parse(_url, true).pathname;
```
위 코드를 사용하여 실제 쿼리 스트링을 보여준다.
![image](https://github.com/hsy0511/nodejs/assets/104752580/e55e42ad-c43c-4a8c-aca8-ddc329349ccf)

![image](https://github.com/hsy0511/nodejs/assets/104752580/15422468-6423-44ff-815c-689b687fc5f4)

즉 실제 쿼리스트링 값은 /인것을 확인할 수 있다.

이제 pathnoame을 사용하여 존재하지 않은 디렉터리 주소 페이지에 들어가면 오류 메세지를 전송하는 기능을 구현해 볼 갓이다.

조건문을 사용하여 ture이면 페이지를 나타내고 false면 오류 메세지가 나오게 한다.
```javascript
  if(pathname === '/'){

    fs.readFile
    (
      `data/${queryData.id}`, 'utf-8', function(err, data)
      {
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
          response.writeHead(200);
          response.end(template);
        });
  }else{
    response.writeHead(404);
    response.end('Notfound'); 
  }
```
위에서 pathname이 /라고 확인했기 때문에 사용하고 있는 디텍터리 페이지에서는 ture를 반환하여 페이지를 나타낸다.

하지만 /fa처럼 다른 디렉터리 페이지면 404라는 오류로 인식하여 not found 메세지를 나타낸다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/e742800d-c6de-4c14-a11b-9dbcd60af32b)

![image](https://github.com/hsy0511/nodejs/assets/104752580/84e8dc23-04ff-42ee-94ca-000ac5e19c35)

## 제 22강 app 제작 - 홈페이지 구현
홈 구현을 안했기 때문에 지금 페이지에서 홈화면이 undefind라고 뜹니다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/c03e5a24-3d70-4f46-97f3-8f5cd2c00b3d)

이제 홈화면에 조건문을 사용하여 본문 작성할 것이다.

```javascript
 if(queryData.id === undefined){
        fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, data){
            var title = 'Welcome';
            var data = 'Hello nodejs';
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
            response.writeHead(200);
            response.end(template);
          });        
      }else{
        fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, data){
          var title = queryData.id;
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
          response.writeHead(200);
          response.end(template);
        });        
      }
        
   }else{
     response.writeHead(404);
      response.end('Notfound'); 
   }
```
title 변수를 Welcome으로 지정하고, data 변수를 hello nodejs라고 지정한다.

그리고 조건문에 쿼리데이터가 언파인드면 true로 Welcome과 hello nodejs를 나타내는 페이지가 나타나게 한다.

하지만 언파인드가 아닌 false 다른 페이지를 실행하게 한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/a666c768-9f1c-4f16-b4a3-d52bf488a1cc)

## 제 23강 javascript - 배열
배열은 여러 개의 데이터를 저장하기 위해서 사용한다.

배열을 생성할 때는 대괄호([])를 사용한다.

배열 안에는 어떤 데이터 타입이든 들어올 수 있다.

```javascript
var arr = ['A','B','C','D'];
console.log(arr)
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/4906cdb9-27af-456b-a602-92abdf111d1a)

이때 배열중에 B만 뽑아 오고 싶다면 arr[1]을 하면 된다.

배열에 순서는 0부터 시작한다.

```javascript
var arr = ['A','B','C','D'];
console.log(arr[1])
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/4dff391c-9d80-4415-9a9b-50fcbc603a6f)

여기서 B를 L로 바꾸고 싶다면 arr[1] = 'L'이라고 하면 된다.

```javascript
var arr = ['A','B','C','D'];
arr[1] = 'L';
console.log(arr)
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/f141743c-8a62-4796-a6e7-583f6386a66c)

배열의 크기를 확인하고 싶으면 arr.length를 하면 된다.

```javascript
var arr = ['A','L','C','D'];
console.log(arr.length)
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/245916d5-6d40-4b24-ab71-496e9e58faa1)

배열에 끝에 데이터를 추가하고 싶으면 arr.push(데이터)를 사용하면 된다.

```javascript
var arr = ['A','L','C','D'];
arr.push('E');
console.log(arr)
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/ab0cac84-3771-49f2-abd3-944d953308c7)

배열에 끝에 데이터를 삭제하고 싶으면 arr.pop()를 사용하면 된다.

```javascript
var arr = ['A','B','C','D'];
arr.pop();
console.log(arr)
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/15cc3d21-ef87-4dd7-acc2-69fe7294807e)

배열에 앞에 데이터를 삭제하고 싶으면 arr.shift(데이터)를 사용하면 된다.


```javascript
var arr = ['A','B','C','D'];
arr.shift();
console.log(arr)
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/3e1358d1-ab2e-42e5-ace6-6392f2edd92d)

배열에 앞에 데이터를 추가하고 싶으면 arr.unshift()를 사용하면 된다.

```javascript
var arr = ['A','B','C','D'];
arr.unshift('L');
console.log(arr)
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/7049049a-a74b-47e3-934a-839407649f09)

배열 위치를 정해서 추가, 삭제하고 싶은 경우에는 splice를 사용하면된다.

splice는 arr.splice(시작할 배열 데이터,삭제할 데이터 개수 (삭제 안할거면 0), 추가할 데이터들)로 사용할 수 있다.

```javascript
var arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4);  
console.log(arr)
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/9b5a03b1-b4d6-4e71-b1ac-1c97bdd41ea7)

```javascript
var arr = [1, 5, 7];
arr.splice(1, 2);           
console.log(arr)
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/ebf76a64-794a-4200-b97c-0fa06b5418f5)

## 제 24강 javascript - 반복문
자바스크립트에서 반복문은 크게 while, do while, for, for in, for of 5가지로 나뉜다.

- while

while문은 조건에 만족하지 않을 때 까지 반복 실행 시켜줍니다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/8688e7f2-0aa6-47d9-8c31-eacc804d4c0a)

#### 예제 
```javascript
var i = 1;

while (i < 10) { 
    console.log(i);
    i++; 
}
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/b787a632-51e9-436b-9dd0-3f2d54879cac)

i가 조건에 만족하지 않을 때 까지 반복 실행함.

이때 i++처럼 결과를 변경하는 조건식이 없으면 계속 반복문이 실행됨.

- do while

do while문은 while문과 다르게 반복문을 한번 실행한 뒤에 표현식을 검사합니다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/ae8fde1e-1a56-49c0-a846-017dcd750a84)

#### 예제
```javascript
var i = 1, j = 1;

while (i > 3) { 
    console.log("i : <br>");
    i++;

}
do { 
    console.log("j : <br>");
    j++;

} while (j > 3);
```
i가 조건에 만족하지 않을 때 까지 반복 실행함.

예제는 조건에 만족하지 않기 때문에 do를 한번 실행하여 값을 출력함 

![image](https://github.com/hsy0511/nodejs/assets/104752580/fe96f7bd-e8ee-478a-a82f-ca9192f01910)

- for

for문은 while 문과는 달리 자체적으로 초기식, 표현식, 증감식을 모두 포함하고 있는 반복문입니다.

while문 보다 간결하게 표현할 수 있음

![image](https://github.com/hsy0511/nodejs/assets/104752580/474edd26-3e25-4d38-8387-5a1187dc5a5f)

#### 예제
```javascript
for (var i = 1; i < 10; i++) {
    console.log(i);

}
```

표현식안에 변수 조건 증감식을 모두 포함하여 실행하는 것을 볼 수 있다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/a90cc669-bbff-4e63-929c-be443e1188b7)

- for in

for in 문은 해당 객체의 모든 열거할 수 있는 속성을 순회할 수 있도록 해줍니다.
###### ※ 순회 : 하나의 속성씩 방문하는 것

#### 예제
```javascript
var arr = [3, 4, 5];

for (var i in arr) { 
    console.log(i);

}

var obj = { name : "이순신", age : 20 };

for (var i in obj) {
    console.log(i);

}
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/3b7bf82a-47be-4493-a447-4a647f55d87c)

배열에 있는 3,4,5를 나타내는것이 아니라 배열에 인덱스 속성(번호)를 나타내는 것을 볼 수 있다.

그냥 표현식에서도 name과 age를 나타내는 것을 볼 수 있다.

- for of

for of 문은 반복할 수 있는 객체를 순회할 수 있도록 해줍니다.

자바스크립트에서 반복할 수 있는 객체에는 Array, Map, Set, arguments 등이 있다.

#### 예제
```javascript
var arr = [3, 4, 5];

for (var value of arr) {
    console.log(value);

}
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/9ff562c7-32d6-4725-b6c9-8b7869b2d505)

배열에 있는 객체인 3,4,5를 나타내는 것을 볼 수 있다.

## 제 25강 nodejs에서 파일목록 알아내기
- data 폴더

![image](https://github.com/hsy0511/nodejs/assets/104752580/5fdcc996-2273-4b1b-a164-81823e22dfc2)

readdir() 함수를 이용해 폴더를 읽어오면서 목록태그를 더 편리하게 사용할 수 있다.

```javascript
var testFolder = './data';
var fs = require('fs');
fs.readdir(testFolder, function(err, filelist){
    console.log(filelist);
})
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/4c2755e5-92ad-4e88-9e5b-6530dd49b845)

readdir() 함수를 사용하여 data 폴더에 있는 파일들을 읽어온다.

콘솔값을 봤을 때 css, html, javascript를 data 폴더에서 읽어낸 것을 볼 수 있다.

## 제 26강 app 제작 - 글목록 출력하기
위에서 했던 폴더를 읽어오는 readdir 함수를 사용해서 글목록을 출력할 것이다.

원래 있던 목록태그를 살펴본다.

```javascript
 <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
</ul>
```

목록이 HTML, CSS, JavaScript가 있는 것을 볼 수 있다. 

이제 HTML, CSS, Javascript가 있는 폴더를 읽어온다.
```javascript
fs.readdir('./data', function(err, filelist){

console.log(filelist);

}
```
![image](https://github.com/hsy0511/nodejs/assets/104752580/5304236a-43bb-4ce3-832e-403d9a8fc6fb)

data 폴더를 읽어드려 HTML, CSS, JavaScript를 읽어온 것을 볼 수 있다.

이제 3개의 목록을 반복 시켜 더 간단하게 만들어보자

```javascript
fs.readdir('./data', function(err, filelist){

var list = '<ul>';
var i = 0;
while(i < filelist){
list = list + `<li>< a href = "/?id=${filelist[i]}">${filelist[i]}</li>`
i = i + 1;          

}

list = list +'</ul>';
```

list 변수에 ul 태그를 넣고, i의 값은 0으로 지정해준다.

그리고 while문을 시작하여 i가 filelist 만큼 반복 시켜준다.

list의 값을 다시 list + `<li>< a href = "/?id=${filelist[i]}">${filelist[i]}</li>`를 더한 값으로 지정한다.

filelist의 i번째 인덱스를 나타낸다.

filelist의 값이 3이니까 반복이 끝나면 0~2까지 반복 되었을 것이다. 

인덱스 번호는 0부터 시작이므로 0이 HTML, 1이 CSS 2가 JavaScript가 되므로 목록을 잘 지정해 준 것을 볼 수  있다.

마지막으로 list를 </ul> 태그와 더하여 목록태그를 닫는 것까지 완성하면 글 목록을 출력할 수 있다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/62953f2b-918a-4aaa-87a9-00f967f43b75)
![image](https://github.com/hsy0511/nodejs/assets/104752580/3ce05a15-df82-4a37-89a5-0e5a6aa5d429)
![image](https://github.com/hsy0511/nodejs/assets/104752580/1a146f67-4606-4134-bb48-865849d18c4f)

## 제 27강 javascript - 함수의 기본 문법
함수를 사용하는 목적은 코드에서 유용하게 사용되고 더 가독성이 좋게 사용하기 위함이다.

```javascript
function f123(){
    console.log(1);
    console.log(2);
    console.log(3);
}
```

함수의 기본문법은 이렇게 사용된다. 

```
function 함수이름(파라미터){
함수에서 실행할 코드 
}
```

함수 호출방법은 함수이름과 파라미터를 같이 사용하면 된다.

```javascript
f123();
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/33251e31-00e8-43ac-a29b-8294b1355cc4)

## 제 28강 javascript - 함수의 입력
함수를 만들 때 입력값을 만들어 더 사용성 있게 사용할 수 있다.

먼저 자바스크립트에서 제공하는 math.round() 함수를 확인 해보자 
```javascript

console.log(Math.round(1.6));

console.log(Math.round(1.4));
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/548203bc-eecb-4a5d-8d29-066f03cc6e72)

round는 반올림을 해주는 함수이다..

round 함수 입력값에 1.6이 들어가면 2가 나오는 것을 볼 수 있고, 1.4가 들어가면 1이 되는 것을 볼 수 있다. 

이제 우리가 함수에 입력값을 넣어 만들어 보자

```javascript
sum(2,4);
```

이 sum() 함수를 실행하면 두 숫자를 더하는 함수를 만들 것이다.

```javascrip
function sum(first){
    console.log(first)
    
sum(2,4);
}
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/511c1302-d37b-42a2-b878-daa01aaeeec6)

일단 첫번째로 함수의 파라미터(매개변수) 값을 first로 지정해준다.

```javascript
function sum(first, second){
    console.log(second)
  
sum(2,4);
}
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/54a172d4-4981-455c-b878-425b055d9d89)

두번째로는 함수의 파라미터의 second라는 파라미터 값을 추가해서 지정한다.

이제 파라미터 값들을 더해준다.

```javascript
function sum(first, second){
    console.log(first+second)
}

sum(2,4);
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/b62f8f8f-2051-440e-9587-073eb4ae52cc)

이때 sum(2,4)에서 2,4는 Argument(인수)이다. 
###### ※  Argument(인수) : 함수 혹은 메서드를 호출할 때, 전달 혹은 입력되는 실제 값

## 제 29강 javascript - 함수의 출력
우리가 배운 함수는 console.log를 함수안에 사용하기 때문에 다방면적으로 사용이 불가하다.

```javascript
function sum(first, second){
    console.log(first+second)
}

sum(2,4);
```

이 함수는 sum(2,4);만 써도 함수안에 console.log가 있기 때문에 콘솔창에 나타나지만 

math.round(1.6) 함수는 console없이 사용하면 나타나지 않는다.

하지만 sum(2,4) 함수는 파일에서 실행하거나 이메일에서 실행하는 등 다방면적으로 사용이 불가능하다.

그런데 math.round() 함수는 다방면에서 사용이 가능하다.

이제 우리도 sum(2,4)을 다방면적으로 사용할 수 있게 하려면 함수 안에 console.log가 아닌 return을 사용하면 된다.

```javascript
function sum(first, second){
    return first+second
}

sum(2,4);
```
이렇게 실행 시키면 아무것도 나타나지 않는다. return을 사용했기 때문이고 나타내기 위해서는 console.log를 사용해야 한다.

```javascript
function sum(first, second){
    return first+second
}

console.log(sum(2,4));
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/de42bf77-f366-4435-9eeb-9cfb378b86ea)

그리고 리턴은 다른 의미도 있다.

```javascript
function jk(a,b){
    console.log('r');
    return a+b
    console.log('v');
}

console.log(jk(2,3));
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/6dc984df-16fa-45f7-8dbb-6d505f7bdb32)

예제에서 함수를 실행시켰을 때 리턴 이후에 console이 실행이 안되는 것을 볼 수 있다.

즉, return에 의미는 함수를 반환하는 동시에 그 함수는 return을 만나면 함수가 종료된다는 뜻을 가지고 있다.

## 제 30강 app 제작 - 함수를 이용하여 정리하기
함수를 사용하여 중복되는 데이터를 정리할 것이다.

```javascript
 var template =  `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
```

이 코드가 중복되기 때문에 함수를 이용하여 간결하게 정리할 것이다.

```javascript
function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
}
```

templateHTML 이라는 함수를 만들어서 똑같은 내용을 리턴한다.

매개변수는 title과 list를 사용하여 변수들을 전달한다.

그리고 template이 있던 자리에는 함수를 호출한다.

```javascript
var template = templateHTML(title, list, `<h2>${title}</h2>${data}`);
```

함수를 통해 더욱 간결하게 코드가 완성되었다.

다른 중복되는 코드도 비슷하게 만든다.
```javascript
var list = 
var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list+'</ul>';
```

이 코드도 중복되기 때문에 함수를 이용하여 정리해 준다.

```javascript
function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list+'</ul>';
  return list;
}
```

templateList 라는 함수를 만들어서 똑같은 내용을 리턴한다.

매개변수는 filelist를 사용하여 변수을 전달한다.

그리고 list가 있던 자리에는 함수를 호출한다.

```javascript
var list = templateList(filelist);
```

함수를 통해서 간결하게 만든 코드가 잘 적용 되었는지 웹페이지를 실행하여 확인한다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/88fc61d8-7208-4aab-aadf-8976e2177893)
![image](https://github.com/hsy0511/nodejs/assets/104752580/4d5e4022-8e65-4528-86c7-25192fc3b5a1)
![image](https://github.com/hsy0511/nodejs/assets/104752580/1c354e0f-371a-4ce1-bca1-978acdfbd617)
![image](https://github.com/hsy0511/nodejs/assets/104752580/7f364586-9063-4370-9e76-f91c82455a02)

### 함수 사용 전

```javascript
var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
 
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var data = 'Hello, Node.js';
          var list = '<ul>';
          var i = 0;
          while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i = i + 1;
          }
          list = list+'</ul>';
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${data}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        })
 
 
 
      } else {
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var data = 'Hello, Node.js';
          var list = '<ul>';
          var i = 0;
          while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i = i + 1;
          }
          list = list+'</ul>';
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
            var title = queryData.id;
            var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              <h2>${title}</h2>
              <p>${data}</p>
            </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
          });
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
 
 
 
});
app.listen(3000);
```

### 함수 사용 후

```javascript
var http = require('http');
var fs = require('fs');
var url = require('url');
 
function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
}
function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list+'</ul>';
  return list;
}
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var data = 'Hello, Node.js';
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2>${data}`);
          response.writeHead(200);
          response.end(template);
        })
      } else {
        fs.readdir('./data', function(error, filelist){
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(title, list, `<h2>${title}</h2>${data}`);
            response.writeHead(200);
            response.end(template);
          });
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
 
 
 
});
app.listen(3000);
```

## 제 31강 동기와 비동기
- 동기

서버에서 요청을 보냈을 때 응답이 돌아와야 다음 동작을 수행할 수 있다. 

즉, A작업이 모두 진행 될때까지 B작업은 대기해야한다.

- 비동기

서버에서 요청을 보냈을 때 응답 상태와 상관없이 다음 동작을 수행 할 수 있다.

즉, A작업이 시작하면 동시에 B작업이 실행된다. A작업은 결과값이 나오는대로 출력된다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/88537b34-dd0e-4a84-abf6-e2a74cc71863)

- sample.txt
```
B
```

- 예제(동기)

```javascript
var fs = require('fs');
 
console.log('A');

var result = fs.readFileSync('sample.txt', 'utf8');

console.log(result);

console.log('C');
```

![image](https://github.com/hsy0511/nodejs/assets/104752580/181eda85-9fc3-488f-9067-04364836aefa)

동기적으로 파일의 내용을 불러올 때는 순서대로 출력된다.

즉, 동기적으로 사용할 때는 동시 작업이 불가능하다.

-예제(비동기)

```javascript
var fs = require('fs');

console.log('A');

fs.readFile('sample.txt', 'utf8', function(err,result){

    console.log(result);

});

console.log('C');
```

비동기적으로 파일의 내용을 불러올 때는 먼저 실행이 가능하다. 

즉, 비동기적으로 사용할 때는 동시 작업이 가능하다.

## 제 32강 javascript - callback
일단 callback 함수에 개념을 알아보면 파라미터로 전달받은 함수를 말합니다.

즉, 파라미터로 콜백함수를 전달받고 함수 내부에서 필요할 때 콜백함수를 호출할 수 있습니다.

- 예제 1 (익명함수)

```javascript
var a = function (){
    console.log('A');
}
```

함수명을 선언하지 않고 함수를 만들면 그것은 익명함수가 된다.

그리고 익명함수는 변수명메 저장된 값이된다. 

- 예제 2 (callback)

```javascript
var a = function(){
    console.log('A');
}
a 라는 변수에 익명함수를 만들어 값을 저장해줍니다.

function slowfunc(callback){
    callback;
}
slowfunc라는 함수를 만든 후 매개변수를 callback으로 지정합니다.
 
slowfunc(a);
slowfunc 함수의 입력받는 값을 a로 지정합니다.

```

![image](https://github.com/hsy0511/nodejs/assets/104752580/9c185b07-0726-430b-907d-5c14f388c9e1)

slowfunc 함수에서 입력받는 값을 변수 a의 값으로 만들었던 익명 함수가 반환됩니다.

![image](https://github.com/hsy0511/nodejs/assets/104752580/3dc614aa-8b92-42cb-aa50-6133d2b4ddf7)

## 제 33강 Node.js의 패키지 매니저와 PM2

