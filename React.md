## React 내용 정리

### #React Hooks
Hooks을 이용해서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었고 컴포넌트의 생명 주기에 맞춰 특정 작업을 수행할 수 있게 되었다.
</br> </br>

### #useState( )
리액트 컴포넌트에서 동적인 값을 state(상태)라고 부른다.
Hooks을 이용해서 함수형 컴포넌트에서도 상태를 관리할 수 있는데,
그 중 useState( )함수를 통해서 함수형 컴포넌트에서도 state(상태)를 관리할 수 있다.

useState코드
```
const [현재 상태 값 저장 변수, 상태 값 갱신 Setter함수]=useState(상태 초기 값);
```
</br>

### #useEffect( )
컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
->클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형 컴포넌트에서도 사용 가능

useState코드
```
useEffect(function, deps)
```
function : 수행하고자 하는 작업
deps : 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열
</br></br>

### #getter/setter

접근자 프로퍼티(accessor property) 라 불리는 새로운 종류의 프로퍼티
접근자 프로퍼티의 본질은 함수인데, 이 함수는 값을 획득(get)하고 설정(set)하는 역할을 담당한다. 그런데 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보인다.
접근자 프로퍼티는 'getter(획득자)'와 ‘setter(설정자)’ 메서드로 표현된다.
객체 리터럴 안에서 getter와 setter 메서드는 get과 set으로 나타낼 수 있다.

접근자 프로퍼티엔 설명자 value와 writable가 없는 대신에 get과 set이라는 함수가 있습니다.
따라서 접근자 프로퍼티는 다음과 같은 설명자를 갖습니다.

get – 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
set – 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
enumerable – 데이터 프로퍼티와 동일함
configurable – 데이터 프로퍼티와 동일함


#### getter와 setter 활용법
getter와 setter를 ‘실제’ 프로퍼티 값을 감싸는 래퍼(wrapper)처럼 사용하면, 프로퍼티 값을 원하는 대로 통제할 수 있습니다.

#getter, setter를 통한 일관성 유지
```
class Time { 
  constructor(start, end) { 
    this._start = start;
    this._end = end;
    this._duration = end - start;
  }
  set start (newStart) { 
    this._start = newStart;
    this._duration = this._end - this._start; 
  }
  get start () {
    return this._start; 
  }
  
}

const time = new Time(0, 20);

time.start = 5;
console.log(time.start);

```
getter, setter를 통해 접근함으로써, 변수를 보호할 수 있다.
또한, setter를 통해 start와 duration을 설정함으로써, 위에서 발생한 일관성 문제를 해결할 수 있다.



</br></br></br></br>
출처: https://ko.javascript.info/fetch
      https://mygumi.tistory.com/161 [마이구미의 HelloWorld]


</br></br>
(공부할 거 : Hooks, useState, useEffect, getter/setter, fetch, Json, props/state)
