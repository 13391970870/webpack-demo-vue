import { _deepClone } from '@/api/service.js';
const test = () => {
  /*createProtoType();*/
  /* createObjectWithPrototype();*/
  createTest();
}

const createProtoType = () => {
  function Person1() {
    this.name = 'xiaoming'
  }

  function Person2() {

  }

  Person2.prototype.name = 'xiaohong'


  let obj1 = new Person1;
  let obj2 = new Person2;

  console.log(obj1)
  console.log(obj2)

  console.log(Person1)
  console.log(Person2)

  let obj3 = {
    name: 'zz'
  }
  Object.setPrototypeOf(obj1, obj3);
  obj1.name = 'xiaoqiang'

  console.log(new Person1)
}


function createObjectWithPrototype() {
  let obj = new Object();
  obj.name = 'xiaofang';
  console.log(obj);
  console.log(obj.prototype)
  console.log(this.prototype)
}

function createTest() {
  let obj1 = {
    name: '1'
  }


  let obj2 = Object.assign({},obj1);

  let obj3 = Object.assign({},obj2);

  console.log(obj3 === obj1);


  console.log(obj3);

  obj3.name = '3';


  console.log(obj1)

}


export {
  test
}