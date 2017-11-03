var peopleFactory = function (name, age, sex) {

    var peopleObject = {};
    peopleObject.name = name;
    peopleObject.age = age;
    peopleObject.sex = sex;
    peopleObject.print = function () {
        console.log(this.name+ " is "+this.age+" years old "+this.sex);
    }

    return peopleObject;
}


//usage
var person1 = peopleFactory(24,'dd','m');
var person2 = peopleFactory(25,'ds','f');

person2.print();
