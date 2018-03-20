//destructuring examples

if (!Object.entries)
   Object.entries = function( obj ){
      var ownProps = Object.keys( obj ),
         i = ownProps.length,
         resArray = new Array(i); // preallocate the Array

      while (i--)
         resArray[i] = [ownProps[i], obj[ownProps[i]]];
      return resArray;
};

let user = { name: "John", years: 30 };

let {name, years:age, isAdmin = false} = user;

console.log( name ); 
console.log( age );
console.log( isAdmin );


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    if(Object.keys(salaries).length==0) {
        return null;
    }

    var name = '';
    var topSalary = 0;
    for( let [person,salary] of Object.entries(salaries)) {
        if( salary > topSalary ) {
            topSalary = salary;
            name = person;
        }
    }

    return name?name:null;
}

console.log(topSalary(salaries));

