var peopleProto = function () {

};

peopleProto.prototype.name = "none";
peopleProto.prototype.age = 0;
peopleProto.prototype.sex = "none";
peopleProto.prototype.print = function () {
    console.log(this.name+ " is "+this.age+" years old "+this.sex);
}

var person1 = new peopleProto();
person1.age = 20;
person1.name = "dd";
person1.sex = "m";

person1.print();

//to check if property in prototype chain
console.log("name" in person1);

//to check if property in specific object
console.log(person1.hasOwnProperty("name"));
