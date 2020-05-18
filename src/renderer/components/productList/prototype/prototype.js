const test = () => {
  /*createProtoType();*/
  /* createObjectWithPrototype();*/
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

  console.log(obj1.name)
  console.log(obj2.name)

  console.log(Person1)
  console.log(Person2)
}


function createObjectWithPrototype() {
  let obj = new Object();
  obj.name = 'xiaofang';
  console.log(obj);
  console.log(obj.prototype)
  console.log(this.prototype)
}


export {
  test
}