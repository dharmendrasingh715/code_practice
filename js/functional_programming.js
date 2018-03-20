//we will try some functional programming here 


function mapForEach(arr,fn) {
    var result = [];

    for ( var i = 0; i<arr.length; i++ ) {
        result.push(fn(arr[i]));
    }

    return result;
}

var a = [1,2,3];

//double the each item by passing function

function double (num) {
    return num*2;
}

var arr1 = mapForEach(a,double);

console.log(arr1);



//compare with one
function grtThanOne(num) {
    return num > 1;
}

var arr2 = mapForEach(a,grtThanOne);

console.log(arr2);

// use function expression;
var arr3 = mapForEach(a, function(num){
    return num > 1;
});

console.log(arr3);

//make more generic

var checkGrtThan = function(limiter,num) {
    return num > limiter ;
}

var arr4 = mapForEach(a,checkGrtThan.bind(this,2));

console.log(arr4);

//Currying example 

var currSet = function(limiter){
    return checkGrtThan.bind(this, limiter);
}

var arr5 = mapForEach(a,currSet(2));

console.log(arr5);