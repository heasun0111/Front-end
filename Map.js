class Map {
  constructor() {
    this.elements = {};
    this.length = 0;
  }
  /*
  constructor(arrays) {
    this.elements = {};
    this.length = 0;
    if (arrays === undefined) {
      return;
    }
    for (let i = 0; i < arrays.length; i++) {
      this.add(arrays[i]);
    }
  }
  */
  put(key, value) {
    this.length++;
    this.elements[key] = value;
  }
  get(key) {
    return this.elements[key];
  }
  contains(key) {
    if (this.elements[key]) {
      return true;
    } else {
      return false;
    }
  }
  remove(key) {
    if (this.contains(key)) {
      delete this.elements[key];
      this.length--;
    }
  }
  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  clear() {
    this.elements = {};
    this.length = 0;
  }
  size() {
    return this.length;
  }
  keys() {
    let keys = new Array();
    for (let prop in this.elements) {
      keys.push(prop);
    }
    return keys;
  }
  values() {
    let values = new Array();
    for (let prop in this.elements) {
      values.push(this.elements[prop]);
    }
    return values;
  }
}

//확인
let myMap = new Map();
myMap.put(1, "heasun");
myMap.put(2, "heesoo");
myMap.put(3, "moon");

console.log(myMap.get(1));
console.log(myMap.size());
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.contains(2));
myMap.remove(2);
console.log(myMap.contains(2));
console.log(myMap.size());
console.log(myMap.isEmpty());
myMap.clear();
console.log(myMap.isEmpty());

//생성자 배열인자 받도록...

/*
결과값
heasun
3
[ '1', '2', '3' ]
[ 'heasun', 'heesoo', 'moon' ]
true
false
2
false
true
*/
