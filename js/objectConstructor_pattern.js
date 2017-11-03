var peopleConstructor = function (name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.print = function () {
        console.log(this.name+ " is "+this.age+" years old "+this.sex);
    }
}

//usage
var person1 = new peopleConstructor(24,'dd','m');
var person2 = new peopleConstructor(25,'ds','f');

person2.print();
