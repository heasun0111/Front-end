## Front-end
프론트엔드 스터디 공부 내용 정리
### [React / React Native 내용 정리](https://github.com/heasun0111/Front-end/blob/main/React.md)
### [Network 내용 정리](https://github.com/heasun0111/Front-end/blob/main/network.md)


</br>

**파스칼 표기법** : 첫 단어를 대문자로 시작하는 표기법 </br>
ex) BackgroundColor, TypeName, PowerPoint

**고차 함수** </br>
고차 함수는 함수를 인자로 받거나 또는 함수를 반환함으로써 작동하는 함수를 말합니다.

**Object**</br>
Object 클래스는 JavaScript의 데이터 유형 중 하나를 나타낸다.
다양한 키 모음 및 더 복잡한 엔티티들을 저장하는 데 사용됩니다.
객체는 Object() 생성자 또는 객체 초기자 / 리터럴 구문을 통해 생성할 수 있습니다.
객체는 사용자(user), 주문(order) 등과 같이 실제 존재하는 개체(entity)를 표현하고자 할 때 생성됩니다.

**this** </br>
user.sayHi()의 내부 코드에서 객체 user에 저장된 이름(name)을 이용해 인사말을 만드는 경우가 이런 경우에 속합니다.

메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있습니다.
이때 '점 앞’의 this는 객체를 나타냅니다. 정확히는 메서드를 호출할 때 사용된 객체를 나타내죠

```
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
    alert(this.name);
  }

};

user.sayHi(); // John
```
</br>

**Array.prototype.map**</br>
map() 메소드는 입력으로 들어온 배열 내 모든 엘리먼트를 인자로 제공받는 콜백 함수를 호출함으로써 새로운 배열을 만들어냅니다. map() 메소드는 콜백 함수에서 모든 반환된 값을 가져올 것입니다. 그리고 그 값들을 이용한 새로운 배열 하나를 만들어냅니다.
```
const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);
console.log(arr2);
```
</br>

**프로토타입(prototype)** </br>
상속되는 속성과 메소드들은 각 객체가 아니라 객체의 생성자의 prototype이라는 속성에 정의되어 있습니다.
모든 객체들이 메소드와 속성들을 상속받기 위한 템플릿으로써 프로토타입 객체(prototype object)를 가진다는 의미입니다
JavaScript에서는 객체 인스턴스와 프로토타입 간에 연결이 구성되며 이 연결을 따라 프로토타입 체인을 타고 올라가며 속성과 메소드를 탐색합니다.

prototype 속성도 하나의 객체이며 프로토타입 체인을 통해 상속하고자 하는 속성과 메소드를 담아두는 버킷으로 주로 사용되는 객체

**프로토타입 체인(prototype chain)** </br>
 - 프로토타입이 상위 프로토타입까지 연결되는 구조를 말한다.
 - 즉, 하위 프로토타입은 상위 프로토타입의 속성과 메소드를 공유 받는다.

 - 모든 객체(String, Array 등등)는 위에서 설명한 프로토타입 기반 방식으로 정의, 생성된다.
 - 모든 객체들은 Object 함수의 프로토타입인 Object.prototype을 시작으로 복제된다.

**함수** </br>
자바스크립트는 함수를 특별한 종류의 값으로 취급합니다.

<함수 표현식>
```
function sayHi() {   // (1) 함수 생성
  alert( "Hello" );
}

let func = sayHi;    // (2) 함수 복사

func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.
```

함수 표현식으로 정의한 함수는 함수가 선언되기 전에 접근하는 게 불가능합니다.

함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다. 하지만 블록 밖에서는 함수에 접근하지 못합니다.

•	함수는 값입니다. 따라서 함수도 값처럼 할당, 복사, 선언할 수 있습니다.
•	“함수 선언(문)” 방식으로 함수를 생성하면, 함수가 독립된 구문 형태로 존재하게 됩니다.
•	“함수 표현식” 방식으로 함수를 생성하면, 함수가 표현식의 일부로 존재하게 됩니다.
•	함수 선언문은 코드 블록이 실행되기도 전에 처리됩니다. 따라서 블록 내 어디서든 활용 가능합니다.
•	함수 표현식은 실행 흐름이 표현식에 다다랐을 때 만들어집니다.


**콜백 함수** </br>
함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출(called back)"하는 것이 콜백 함수의 개념입니다.

**화살표 함수**
인자 arg1..argN를 받는 함수 func이 만들어집니다. 함수 func는 화살표(=>) 우측의 표현식(expression)을 평가하고, 평가 결과를 반환합니다.
```
let func = (arg1, arg2, ...argN) => expression
```

```
let func = (arg1, arg2, ...argN) => expression

let func = function(arg1, arg2, ...argN) {
  return expression;
};
```

**Constructor** </br>
constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.
인스턴스 객체를 초기화할 때 수행할 초기화 코드를 정의할 수 있습니다.


**엄격 모드** </br>
하위 호환성 문제로 변경사항 대부분은 ES5의 기본 모드에선 활성화되지 않도록 설계되었습니다. 대신 use strict라는 특별한 지시자를 사용해 엄격 모드(strict mode)를 활성화했을 때만 이 변경사항이 활성화되게 해놓았습니다.
지시자 "use strict", 혹은 'use strict'는 단순한 문자열처럼 생겼습니다. 하지만 이 지시자가 스크립트 최상단에 오면 스크립트 전체가 “모던한” 방식으로 동작합니다.

**변수타입** </br>

**Boolean**
true와 false 둘 중 하나의 값을 갖는 논리적인 요소

**Number**
-(253 -1) ~ 253 -1 사이의 숫자값 하나

**BigInt**
Number의 범위를 넘어서는 큰 정수도 안전하게 저장/ 연산

**String**
String 타입은 텍스트 데이터

**Null**
빈 값을 뜻하는 null타입이다
->타입은 존재하지만, 값은 없다

**Undefined**
값도 없고, 타입도 지정되지 않은 상태

**Symbol**
유일하고 변경 불가능한 기본값

자바스크립트에서는 Undefined를 제외하고는 모두 객체이다.
</br>

**null 이랑 undefined의 차이**</br>
undefined 은 변수를 선언하고 값을 할당하지 않은 상태, null 은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다. 즉, undefined는 자료형이 없는 상태이다.

**Null**
빈 값을 뜻하는 null타입이다
->타입은 존재하지만, 값은 없다

**Undefined**
값도 없고, 타입도 지정되지 않은 상태

**클로저**</br>
JS는 함수의 중첩(함수 안에 함수를 정의하는것)을 허용하고, 내부함수가 외부 함수 안에서 정의된 모든 변수와 함수들을 완전하게 접근 할 수 있도록 승인해줍니다.(그리고 외부함수가 접근할수 있는 모든 다른 변수와 함수들까지)
그러나 외부 함수는 내부 함수 안에서 정의된 변수와 함수들에 접근 할 수 없습니다. 이는 내부 함수의 변수에 대한 일종의 캡슐화를 제공합니다. 또한, 내부함수는 외부함수의 범위에 접근할 수 있기 때문에, 내부 함수가 외부 함수의 수명을 초과하여 생존하는 경우, 외부함수에서 선언된 변수나 함수는 외부함수의 실행 기간보다 오래갑니다. 클로저는 내부 함수가 어떻게든 외부 함수 범위 밖의 모든 범위에서 사용 가능해지면 생성됩니다.

**정규 표현식(정규식 연산)**</br>
정규 표현식 리터럴. 다음과 같이 슬래시로 패턴을 감싸서 작성합니다.
const re = /ab+c/
정규 표현식 패턴은 /abc/처럼 단순한 문자로 구성하거나, /ab+c/와 /Chapter (\d+)\.\d*/처럼 단순한 문자와 특수 문자의 조합으로 구성할 수도 있습니다.


**이벤트 루프란?** </br>
JS는 싱글 스레드 프로그래밍 언어
(=싱글 스레드 런타임/ =하나의 싱글 콜 스택)

블로킹 : 느린 동작이 스택에 남아있는 것

동기적으로 실행되는 네트워크 요청이 콜 스택을 블로킹하여 브라우저가 렌더링이나 다른 코드를 실행하지 못하고 그냥 멈춰버림
->해결책 : 비동기 콜백!!

비동기 : 어떤 코드를 실행하면 결국 콜백을 받고 이걸 나중에 실행

이벤트 루프 : 전체 시스템에서 아주 단순한 일을 하는 작은 파트
루프의 역할은 콜 스택과 테스크 큐를 주시하는 것

setTimeout 0은 스택이 비어있을 때 까지 기다리게 하기 위해서

콜백
-다른 함수가 부르는 함수
앞으로 큐에 쌓일 비동기식 콜백




**this가 호출하는 것들** </br>
this가 쓰이는 함수를 어떤 방식으로 실행하느냐에 따라서 그 역할이 구별된다
1. 일반 함수 실행 방식 (Regular Function Call)
```
var name = 'Julia';
function foo () {
console.log(this.name); // 'Julia'
}
foo();
```

위 코드에서 우리는 전역 변수로 name이란 변수를 만들고 'Julia'라는 값을 할당하였다. 이 변수는 전역 변수이기 때문에 전역 객체인 window에 속성으로 추가된다. 즉, 우리가 var name = 'Julia';라는 코드를 쓰면 window객체에 name이라는 key와 'Julia'라는 value가 추가된다.
 
그리고 우리는 foo라는 함수를 선언하였고 일반 함수 실행 방식으로 실행하였다. 이 때의 this는 window객체를 가리키므로 위 코드의 console.log(this.name);는 console.log(window.name);이라고 한 것과 동일하다. 그러므로 위 코드를 실행시키면 console창에는 'Julia'가 출력된다.


2. 도트 표기법 (Dot Notation)
```
	var age = 100;
	
	var ken = {
	age: 35,
	foo: function () {
	console.log(this.age); // 35
	}
	}
	ken.foo();
```

3. 명백한 바인딩 (Explicit Binding) / call, bind, apply
명백한 바인딩, 즉 this의 역할을 우리가 직접 명확하게 지정해준다는 뜻이다. 이는 function.prototype.call, function.prototype.bind, function.prototype.apply과 같은 메소드를 사용하여 할 수 있다.

```
var age = 100;
function foo() {
console.log(this.age);
}
var ken = {
age: 35,
log: foo
}
foo.call(ken, 1, 2, 3);
```
위 코드에서 우리는 foo 함수에 call 메소드를 사용하여 실행하였는 데, 인자로 각각 ken, 1, 2, 3을 주었다. 이 인자들 중에서 가장 첫 번째로 쓴 ken이 바로 this의 값으로 지정된다. 1, 2, 3은 this의 값과는 상관없이 순서대로 foo 함수가 된다. 그러므로 위 코드에서 this.age는 ken.age가 되어 35가 출력된다.


4. new 키워드를 사용한 함수 실행
```
function Foo () {
console.log(this.age); // undefined
this.age = 100; // 빈 객체에 속성 추가
console.log(this.age); // 100
}
new Foo();
```
위 코드에서 Foo 함수가 new 키워드와 함께 생성자 함수로 사용되는 즉시, 함수 내부의 this는 빈 객체가 되며, this.age = 100; 이라는 코드를 통해, 그 빈 객체에 age라는 속성을 추가하고 100이란 값을 할당하게 된다. 그러므로 4번째 줄에서 this.age는 100을 출력한다. 그리고 Foo 함수는 { age: 100 }이라는 객체를 리턴한다.

출처: https://im-developer.tistory.com/96


**Null 병합 연산자** </br>
value1 ?? value2 ⇒ value1이 존재하는 변수라면 그 값이 반환, 그렇지 않으면 value2
(value1 !== null && value1 !== undefined) ? value1 : value2; 와 동등한 코드(삼항연산자)


**optional chaining** </br>
연산자 (?.) 는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다.
?. 연산자는 . 체이닝 연산자와 유사하게 작동하지만, 만약 참조가 nullish (null 또는 undefined)이라면, 에러가 발생하는 것 대신에 표현식의 리턴 값은 undefined로 단락된다. 함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면, undefined를 리턴한다.

따라서 참조가 누락될 가능성이 있는 경우 연결된 속성으로 접근할 때 더 짧고 간단한 표현식이 생성된다. 어떤 속성이 필요한지에 대한 보증이 확실하지 않는 경우 객체의 내용을 탐색하는 동안 도움이 될 수 있다.


**객체지향프로그래밍** </br>
객체지향프로그래밍은 프로그래밍 할 때 프로그램을 단순히 데이터와 처리 방법으로 나누는 것이 아닌 객체 라는 단위로 나누고 이를 서로 상호작용할 수 있게 만들어 역할을 수행할 수 있게 만든다.
(객체는 주로 실생활에서 우리가 인식할 수 있는 사물)

**클래스란?** </br>
 객체 지향 프로그래밍(OOP)에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀이다. 객체를 정의하기 위한 상태(멤버변수)와 메서드(함수)로 구성된다.

**자바스크립트와 다른 언어와 OOP 차이점** </br>
먼저, Javascript 에서는 Prototype을 사용하여 객체를 표현하고
C Language 와 Golang 에서는 struct(구조체)를 사용해서 객체를 표현

Java의 Class와 다르게 Prototype으로 객체 지향 언어를 구현하고 있다는 것을.
그리고 객체는 현실 세계의 사물을 나타내는데 생성자 함수를 통해 “객체 지향”의 객체를 생성할 수 있으며 생성자 함수 내에 속성(property)과 행동(method)를 지정하면 생성된 객체들은 공통된 속성과 행동을 사용할 수 있으며
필요에 따라서는 객체의 원형(prototype)에 메서드를 추가하거나 상속을 구현해 확장할 수도 있다는 것을.

또한 추가적으로
은닉화(private 키워드)의 한계
Java나 TypeScript, 혹은 C++이나 C#같은 언어에는 클래스 내부에서만 쓰이는 속성 및 메소드를 구분시키기 위해 private라는 키워드를 제공한다. 이러한 은닉화(데이터를 클래스 외부로부터 안정적으로 가리는 효과)를 도와주는 기능이 JavaScript에서는 쓰이지 않는다.

추상화(interface 키워드) 기능 부재
객체지향 프로그래밍의 주요 키워드 중 하나인 추상화는, 속성과 메소드의 이름만 노출시켜서 사용을 단순화한다는 의미를 가지고 있다. 즉, 인터페이스(interface)의 단순화를 의미한다. Java나 TypeScript 언어는 이를 언어의 주요 기능으로 구현해 놓았다. interface는 JavaScript에 존재하지 않는 기능이다.


**SOLID 객체지향 설계 5원칙** </br>
**S: Single Responsibility Principle (단일 책임 원칙)** </br>
어떤 클래스를 변경해야 하는 이유는 오직 하나뿐이여야 한다.
클래스를 역할과 책임에 따라 분리해서 각각 하나의 역할과 책임만 갖게 한다.
(하나의 클래스에 역할과 책임이 많으면 SRP위반)

**O: Open-Closed Principle  (개방 폐쇄 원칙)** </br>      
(소프트웨어 엔티티 클래스, 모듈, 함수 등 확장에 대해서는 열려있어야 하지만 변경에는 닫혀있어야한다.)
- 자신의 확장에는 열려있고, 주변의 변화에는 닫혀있어야한다.
 (상위 클래스 또는 인터페이스를 중간에 둠으로써, 그 밑에 변화가 있어도 인터페이스를 참조하고 있는 객체는 영향 X)

**L: Liskov Substitution Principle  (리스코프 치환 원칙)** </br>
(서브타입은 언제나 자신의 기반 타입으로 교체할 수 있어야한다)
 - 상속을 잘 지키고 있으면 리스코프 치환원칙을 잘 지키고 있는 것이다.
 (객체지향의 상속특성을 올바르게 사용하면 자연스럽게 얻게되는 것.)
- 하위에 존재하는 것들은 상위에 있는 것들의 역할을 하는데 문제가 없어야한다.

**I: Interface Segregation Principle  (인터페이스 분리 원칙)** </br>
클라이언트 자신이 사용하지 않는 메서드에 의존관계를 맺으면 안됨.
SRP(단일책임원칙에서 제시한 해결책은 하나의 역할만 하는 다수의 클래스로 분할하는 해결 방법이었으나, 또 다른 방법은 ISP가 있다. SRP처럼 다수의 클래스로 분할하는 것이 아닌, 각각의 역할에 그 역할만 사용할 수 있게 인터페이스를 제한하는 것.

**D: Dependency Inversion Principle (의존성 역전 원칙)** </br>
(추상화된 것은 구체적인 것에 의존 X, 구체적인 것이 추상화된 것에 의존 O, 자주 변경되는 구체클래스에 의존 X)
 - 자신보다 변하기 쉬운 것에 의존하던 것을 추상화된 인터페이스나 상위클래스를 두어 변하기 쉬운 것의 변화에 영향을 받지 않게 하는 것 (OCP랑 성질이 비슷함)
- 상위 클래스일수록, 인터페이스일수록, 추상클래스 일수록 변하지 않을 가능성이 높기에 하위클래스나 구체 클래스가 아닌 상위클래스, 인터페이스, 추상클래스를 통해 의존하는 것이 의존역전원칙

출처 https://popo015.tistory.com/119

</br>

**1급시민, 1급객체, 1급함수** </br>

**-1급시민의 조건**</br>

변수에 담을 수 있다.</br>
함수(혹은 메소드)의 인자(매개변수, Parameter)로 전달할 수 있다.</br>
함수(혹은 메소드)의 반환값(return)으로 전달할 수 있다.</br>

```
var a = 1 // 변수에 담을 수 있다.
function f1 (num) { // 매개변수로 전달할 수 있다.
  var b = num + 1
  return b  // return으로 전달할 수 있다.
}
console.log(f1(a)) // result: 2
```
대부분(거의 모든)의 프로그래밍 언어에서 숫자형/문자형 등은 1급 시민의 조건을 충족합니다.

</br>

**-1급객체의 조건** </br>
1급 객체란, 말 그대로 1급 시민의 조건을 충족하는 객체(Object) 입니다. javascript에서 객체는 1급시민입니다. 즉, 1급객체를 사용합니다.
```
var a = {msg: 'a는 1급 객체입니다.'} // 변수에 담을 수 있다.
function f1 (a) { // 매개변수로 전달할 수 있다.
  var b = a
  b.msg2 = '이것은 2번째 메세지입니다.'
  return b  // return으로 전달할 수 있다.
}
```
console.log(f1(a)) // result : {msg: 'a는 1급 객체입니다.', b: '이것은 2번째 메세지입니다.'}
그리고 javascript의 function은 prototype을 통해 object를 상속 받아 사용합니다. 즉, javascript의 function 또한 object 라는 것입니다.
</br>

**-1급함수의 조건**</br>
위에 언급했듯이, javascript의 함수는 1급 함수이므로
javascript의 함수는 변수에 할당할 수 있다.
javascript의 함수는 매개변수로 전달할 수 있다.
javascript의 함수는, 함수를 반환할 수 있다.
```
// 변수에 함수를 할당한다.
var a = function (num) {
  return num * num
}
// 매개변수로 함수를 전달한다.
function b (fun) {
  var num = fun(10)
  // return 값으로 함수를 사용할 수 있다.
  return function (num2) {
    var num2 = num2 || 2
    return num * num2
  }
}
// b에 a라는 함수 전달했으며
// b는 다시 함수를 반환한다.
// 결국 c도 함수로 사용할 수 있다.
var c = b(a)
console.log(c())  // result : 200
console.log(c(3)) // result : 300
```
그렇기 때문에, closure 라는 개념을 사용할 수 있게 된 것입니다.
</br>
**closure**</br>
(JS뿐만 아니라 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어의 특성이다)
</br>
스코프는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정된다. 이를 렉시컬 스코핑(Lexical scoping)라 한다. 위 예제의 함수 innerFunc는 함수 outerFunc의 내부에서 선언되었기 때문에 함수 innerFunc의 상위 스코프는 함수 outerFunc이다. 함수 innerFunc가 전역에 선언되었다면 함수 innerFunc의 상위 스코프는 전역 스코프가 된다.
</br>
<MDN에서의 정의>
클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합이다.
</br>
위 정의에서 말하는 “함수”란 반환된 내부함수를 의미하고 “그 함수가 선언될 때의 렉시컬 환경(Lexical environment)”란 내부 함수가 선언됐을 때의 스코프를 의미한다. 즉, 클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수를 말한다. 이를 조금 더 간단히 말하면 클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수다라고 말할 수 있겠다.

**장점1. 데이터를 보존할 수 있다.**</br>
클로저 함수는 외부 함수의 실행이 끝나더라도 외부 함수 내 변수를 사용할 수 있다.</br>
클로저는 이처럼 특정 데이터를 스코프 안에 가두어 둔 채로 계속 사용할 수 있게하는 폐쇄성을 갖는다.</br>

**장점2. 정보의 접근 제한 (캡슐화)**</br>
‘클로저 모듈 패턴’을 사용해 객체에 담아 여러 개의 함수를 리턴하도록 만든다.</br>
이러한 정보의 접근을 제한하는 것을 캡슐화라고 한다.</br>

**장점3. 모듈화에 유리하다.**</br>
클로저 함수를 각각의 변수에 할당하면 각자 독립적으로 값을 사용하고 보존할 수 있다.</br>
이와 같이 함수의 재사용성을 극대화 함수 하나를 독립적인 부품의 형태로 분리하는 것을 모듈화라고한다.</br>
클로저를 통해 데이터와 메소드를 묶어다닐 수 있기에 클로저는 모듈화에 유리하다.</br>
</br>
**Promise**</br>
비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.
비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다. 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다. 다만 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '약속'(프로미스)을 반환합니다.
</br>
Promise는 다음 중 하나의 상태를 가집니다.</br>
- 대기(pending): 이행하지도, 거부하지도 않은 초기 상태</br>
- 이행(fulfilled): 연산이 성공적으로 완료됨</br>
- 거부(rejected): 연산이 실패함</br>
</br>

### 패스트 캠퍼스 강의 정리

**<JavaScript 변천사>** </br>
개발자들은 최신 버전으로 개발한 후 모든 핸드폰에서 돌아가기 위해서 5.0버전으로 변환해주는 변환기 (트랜스 파일러)를 사용한다.

**<웹앱의 구성요소>** </br>
브라우저는 웹앱에게 런타임 환경을 제공하는 것
(최근에는 nodejs등 다른 것 또한 JS를 실행시킬 수 있는 환경이 되었다.)

CSR & SSR
CSR-클라이언트 사이드 렌더링
브라우저에서 실행되는 JS의 실행 결과로 UI를 주도적으로 만드는 방법
(=HTML을 주도적으로 만들어서 UI를 표현하는 방법)

SSR-서버 사이드 렌더링
웹 서버가 주도적으로 HTML을 만들고 브라우저에게 전송

**<모던 JS와 개발 환경>** </br>
node js – 브라우저에서 실행되는 게 아니라, 데스크탑/ 노트북에서 JS를 실행하는 어플리케이션
번들러 – 하나의 JS코드에서 (모듈을 통해) 불러오는 다른 JS파일을 하나의 파일로 만들어 주는 일
브라우저에서 실제로 JS파일을 불러들이기 전에 많은 JS 파일을 하나의 파일로 만들어 놓는 일
ex) Webpack
또한 트랜스 파일링 – 인간이 이해하는 코드를 기계가 읽고 실행시킬 수 있는 형식으로 변환
번들러는 다른 버전의 JS들을 한 버전으로 변환시켜준다.
ex) babel
**<TypeScript vs JavaScript>** </br>
TypeScript
JS의 기능 + (데이터에 대한)명시적은 유형 설명

 

**<nodejs & npm>** </br>
터미널
```
node index.js
```
node를 이용해서 JS파일을 브라우저가 아닌 데스크탑에서 실행 가능
npm홈페이지에서 필요한 패키지 검색 가능하다.

**<Hacker News 클라이언트 앱>** </br>
해커뉴스 PWA 사이트에서 제공하는 REST API를 이용하여 내용을 불러올 예정
tailwindcss 이용해서 화면 더 예쁘게 구성

**<12줄의 코드로 시작하기>** </br>
터미널에서 parcel index.html로 실행
ajax – 네트워크 너머에 있는 데이터를 가져오는 도구

ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);

open( string, url, async: boolean )
async: boolean 이 false면 url에서 가져오는 데이터를 동기적으로 가져온다는 뜻

send함수를 호출하면 데이터를 가져온다.

XHR은 XHLHttpRequest의 약자
네트워크를 가져온 항목들만 보여주는 필터


JSON.parse : 응답 값(JSON)을 객체로 변환

const ul = document.createElement(‘ul’)을 통해서 태그를 만들고
이것을 root 하위에다가 넣어줘야한다.
document.getElementById(‘root’).appendChild(ul);

li.innerHTML = newsfeed[i].title; 을 이용해서 내용을 li태그 안에 넣는다.

**<두 개의 화면을 가진 웹앱>** </br>

이벤트를 이용해서 사용자가 (타이틀 등) 클릭했는지를 알 수 있다. </br>
이벤트 시스템을 이용해서 사용자가 버튼을 누르는 시점을 파악할 수 있다. </br> </br>
이벤트 호출 1) </br>
a.addEventListener(‘click’, function( ) { }); </br> </br>
이벤트 호출 2) – 해시 </br>
```
Window.addEventListener(‘hashchange’, function( ) {
});
```

///여기

# 인터페이스와 타입 별칭
TS에서 타입을 기술하는 2가지 방법
-인터페이스
-타입 별칭


#타입 별칭 예시
```
export type DayOfWeek = ‘월’ | ‘화’ | ‘수’ | ‘목’ | ‘금’ | ‘토’ | ‘일’;

const dayOfWeek: DayOfWeek = ‘월’;
->타입을 제한하고 싶을 때!

```

추가) enum과 type비교
타입: export type DayOfWeek = ‘월’ | ‘화’ | ‘수’ | ‘목’ | ‘금’ | ‘토’ | ‘일’;
enum: export enum DayOfTheWeek = { ‘월’ , ‘화’ , ‘수’ , ‘목’ , ‘금’ , ‘토’ , ‘일’ };

type은 컴파일 타임에 값이 들어가는지 안 들어가는지, 그런 코드가 있는지 검사
enum은 실제 데이터 (컴파일 타임이 아니라 런타임에 값이 들어간다)
->특정 값으로 제한하는 기능은 비슷하지만 enum은 실제 데이터


# 인터페이스

```
export interface IUser {
    readonly id : number;
    readonly name : Name;
    email : string;
    receiveInfo : Boolean;
    active : YesOrNo;
}
```
IUser 인터페이스는 객체 타입을 정의하고 있다

# ?의 의미
export interface IUser {
    address? : string;
}
물음표는 선택 항목이라는 뜻
->객체를 만드는데 address라는 속성이 있어도 되고, 없어도 된다!







->interface는 선언하고나서 또 선언하면서 추가할 수 있는데
type 알리아스는 불가능하다

ex)
export interface IUser {
    readonly id : number;
    readonly name : Name;
    email : string;
    receiveInfo : Boolean;
    active : YesOrNo;
}

export interface IUser {
    address? : string;
}

여러 개 인터페이스를 하나로 합칠 수 있다!! (상속과 유사)
```
export interface IUserProfile extends IUser {
    profileImage : string;
    github? : string;
    twitter? : string;
}
```
extends 로 인터페이스 확장

type 알리아스는 intersection이라는 같은 기능 제공!!
```
export type TUserProfile = IUser & {
profileImage : string;
    github? : string;
    twitter? : string;
}
```

여러 개의 인터페이스를 합칠 수 있다!

-> 이름은 문자열로 되어있고, 값은 어떤 값 유형으로 만들어져 있는 객체
value가 오로지 숫자 유형인 객체를 표현하고 싶을 때
export interface IOnlyNumberValueObject {
    [ key : string ] : number;
}

함수도 규격을 만들 수 있다!
ex) 
- 인터페이스
export interface IGetApi {
    ( url : string, search? : string ) : Promise<string>;
}

( 인자 ) : 함수 리턴값;

- 타입 알리아스
export type TGetApi = {
    ( url : string, search? : string ) : Promise<string>;
}

# 인터페이스를 이용해서 생성자의 규격 기술
export interface IRectConstructor {
    new ( x : number, y : number, width : number, height : number ) : IRect;
}
new -> 생성자
IRect 는 타입 정의로 이용

정리)
인터페이스에는 없지만 타입 알리아스에는 있는 거
-> 구체적인 어떤 타입 명시
따라서 데이터를 표현할 때는 타입 알리아스를 쓰고,
메소드, 클래스와 같은 구체적인 행위까지 포함된 객체를 디자인 할 때는 인터페이스 추천





</br> </br> </br>
**공식문서 외에 설명을 돕기 위해 개인 블로그 내용도 참고하였습니다. 혹시 저작권적인 문제가 있을시 바로 수정하겠습니다. 감사합니다!**
