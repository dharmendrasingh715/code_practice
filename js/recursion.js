// Example for recursion

function pow(x, n) {
    return (n==1 || x==1)?x: x * pow(x , n-1);
}


console.log(pow(2,8));

// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 600
//     }],
  
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
// };

// function totalSalary(company) {
//     if(Array.isArray(company)){
//         return company.reduce((prev, current)=> prev + current.salary, 0);
//     } else {
//         var sum = 0;
//         for(let dept of Object.values(company)) {
//             sum += totalSalary(dept);
//         }
//         return sum;
//     }
// }

// console.log(totalSalary(company));

function sumTo(n) {
    return n==1?1:n+sumTo(n-1);
}

console.log(sumTo(3));

function factorial(n) {
    return n==1?1: n*factorial(n-1);
}

console.log(factorial(5));

function fibbonacci(n) {
    if(n <= 1) {
        return n;
    }
    else {
        return fibbonacci(n-1) + fibbonacci(n-2);
    }
}

console.log(fibbonacci(77));