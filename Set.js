class CustomSet {
  constructor(arrays) {
    this.items = {};
    if (arrays === undefined) {
      return;
    }
    for (let i = 0; i < arrays.length; i++) {
      this.add(arrays[i]);
    }
  }
  has(element) {
    //객체가 특정 프로퍼티를 가지고 있는지를 불리언 값을 반환
    return this.items.hasOwnProperty(element);
  }
  add(element) {
    //집합에 원소 있는지 체크하고, 없으면 저장
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  values() {
    return Object.keys(this.items);
  }
  size() {
    return Object.keys(this.items).length;
  }
}
//합집합
CustomSet.prototype.union = function (otherSet) {
  let unionSet = new CustomSet();
  let element = this.values();
  //기존 집합 원소 먼저 넣고
  for (let i = 0; i < element.length; i++) {
    unionSet.add(element[i]);
  }
  //다른 집합 원소도 추가
  element = otherSet.values();
  for (let i = 0; i < element.length; i++) {
    unionSet.add(element[i]);
  }
  return unionSet;
};
//교집합
CustomSet.prototype.intersection = function (otherSet) {
  let intersectionSet = new CustomSet();
  let element = this.values();
  for (let i = 0; i < element.length; i++) {
    //원래 집합의 원소가 다른 집합에도 있으면 교집합에 넣어준다.
    if (otherSet.has(element[i])) {
      intersectionSet.add(element[i]);
    }
  }
  return intersectionSet;
};
//차집합
CustomSet.prototype.different = function (otherSet) {
  let differentSet = new CustomSet();
  let element = this.values();
  //기존 집합의 원소가 otherSet에 없으면 differentSet에 넣어준다.
  for (let i = 0; i < element.length; i++) {
    if (!otherSet.has(element[i])) {
      differentSet.add(element[i]);
    }
  }
  return differentSet;
};
//부분집합
CustomSet.prototype.subSet = function (otherSet) {
  //크기를 먼저 확인
  if (this.size() > otherSet.size()) {
    return false;
  } else {
    let element = this.values();
    for (let i = 0; i < element.length; i++) {
      //기존 집합 원소가 otherSet에 없으면 포함관계 아님
      if (!otherSet.has(element[i])) {
        return false;
      }
    }
    return true;
  }
};

//확인
let mySet = new CustomSet([1, 2, 3]);
mySet.add(4);
mySet.add(5);
mySet.add(5);
mySet.delete(2);

console.log(mySet.has(4));
console.log(mySet.has(2));
console.log(mySet.values());
console.log(mySet.size());

let mySet2 = new CustomSet([3, 4, 6, 7]);

console.log(mySet2.values());
unionSet = mySet.union(mySet2);
console.log(unionSet.values());

intersectionSet = mySet.intersection(mySet2);
console.log(intersectionSet);

differentSet = mySet.different(mySet2);
console.log(differentSet);

subSet2 = mySet.subSet(mySet2);
console.log(subSet2);

mySet.clear();
console.log(mySet.values());

//different랑 subSet 출력값 확인

/*
결과값
true
false
[ '1', '3', '4', '5' ]
4
[ '3', '4', '6', '7' ]
[ '1', '3', '4', '5', '6', '7' ]
CustomSet { items: { '3': '3', '4': '4' } }
CustomSet { items: { '1': '1', '5': '5' } }
false
[]
*/
