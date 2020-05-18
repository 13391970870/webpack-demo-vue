function test() {
  var obj2 = {
    firstName: 'curry',
    lastName: 'stephen'
  };
  Object.defineProperties(obj2, {
    fullName: {
      get: function () {
        return this.firstName + '-' + this.lastName;
      },
      set: function (data) {
        var names = data.split('-');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  });
  console.log(obj2.fullName); //curry-stephen

  obj2.fullName = 'kobe-bryant';
  console.log(obj2.fullName); //kobe-bryant
}

export default test;
