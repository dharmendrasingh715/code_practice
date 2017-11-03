var peopleDynamicProto = function (name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    if(typeof this.print !== "function") {
        peopleDynamicProto.prototype.print = function () {
            console.log(this.name+ " is "+this.age+" years old "+this.sex);
        }
    }
};

var person1 = new peopleDynamicProto('dd',20,'m');

person1.print();

//to check if property in prototype chain
console.log("name" in person1);

//to check if property in specific object
console.log(person1.hasOwnProperty("name"));
