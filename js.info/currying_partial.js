//Simple partial application without bind
function multiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

var double  = multiplier(2);
console.log(double(3));

// Same example using bind 
function multiply(a,b) {
    return a * b;
}

var double2 = multiply.bind(null, 2);
console.log(double2(3));

//A simple partial application wrapper which will convert any function for partial application
function partial(fn) {
    var args = Array.prototype.splice.call(arguments,1);
    return function () {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments,0)));
    }
}

var p = partial(multiply,2);
console.log(p(3));

//Same method with es6 spread operator
function partialApp(fn,...argsBound) {
    return function(...args) {
        return fn.call(this,...argsBound,...args);
    }
}

var par  = partialApp(multiply,2);
console.log(par(3));


//currying is calling function like fn(a)(b)(c);

//Implementing advanced currying
function curry(fn) {
    return function curried() {
        var args = Array.prototype.splice.call(arguments,0);
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function() {
                return curried.apply(this, args.concat(Array.prototype.splice.call(arguments,0)));
            } 
        }
    }
}


var multiplication = curry(multiply);

console.log(multiplication(2)(3));
console.log(multiplication(2,3));