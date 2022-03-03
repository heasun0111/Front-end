class HashTable {
  constructor() {
    this.storage = [];
    this.length = 0;
  }
  //해싱
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  insert(key, value) {
    let index = this.hash(key);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let storageCheck = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          storageCheck = true;
        }
      }
      //storage[index][i][0] === key로 못넣으면 push로 추가
      if (!storageCheck) {
        this.storage[index].push([key, value]);
      }
    }
  }

  delete(key) {
    let index = this.hash(key);
    if (this.storage[index] === undefined) {
      return false;
    } else if (
      this.storage[index].length === 1 &&
      this.storage[index][0][0] === key
    ) {
      //splice를 이용하여 배열의 요소를 삭제
      this.storage.splice(index, 1);
      return true;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index].splice(i, 1);
          return true;
        }
      }
      return false;
    }
  }
  search(key) {
    let index = this.hash(key);
    if (this.storage[index] === undefined) {
      return false;
    } else if (
      this.storage[index].length === 1 &&
      this.storage[index][0][0] === key
    ) {
      return this.storage[index][0][1];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
      return false;
    }
  }
  getTable() {
    return this.storage;
  }
}

//확인
let myHashTable = new HashTable();
myHashTable.insert(2, "오리");
myHashTable.insert(4, "닭");
myHashTable.insert(6, "꿩");

console.log(myHashTable.getTable());
console.log(myHashTable.search(4));
myHashTable.delete(6);
console.log(myHashTable.search(6));
console.log(myHashTable.getTable());

//getTable()시 NaN나오는거
//생성자 인자 받는거...

/*
[ NaN: [ [ 2, '오리' ], [ 4, '닭' ], [ 6, '꿩' ] ] ]
닭
false
[ NaN: [ [ 2, '오리' ], [ 4, '닭' ] ] ]
*/
