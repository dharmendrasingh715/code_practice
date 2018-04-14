function currier(fn) {
    var args  = Array.prototype.slice.call(arguments,1);

    return function () {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments,0)));
    };
}


function greet(age, sex, name) {
    var salut = sex === "male"?"mr.":"ms.";

    if(age > 21) {
      return "hello "+ salut + " "+ name;
    } else {
      return "hey "+ name;
    }
}


var greeter = currier(greet,20,"m");

var greetings =  greeter("dd");

console.log(greetings);