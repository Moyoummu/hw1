'use strict';
function sayHi()
{
    console.log('Hello, world!');
}
sayHi();
{
    let x = 5;
    var y = 10;
}
let x = 6;
console.log(x,y);
let mult = (a,b) => a*b;
console.log('Arrow function: ', mult(x,y));

console.log('(x=6) === 6 comparison:\n',x === 6);
console.log('(x=6) == 6 comparison:\n',x == 6);
let mn = "6";
console.log('more comparisons:\n');
console.log('(x=6) === (mn = \"6\") comparison:\n',x === mn);
console.log('(x=6) == (mn = \"6\") comparison:\n',x == mn);
const arr = [1, 3, "pepe", y];
console.log('typeof arr:\n', typeof(arr));
console.log('for of loop prints the array:\n');
for (let i of arr)
{
    console.log(i);
}
globalThis["yep"] = 59;
let yes = "yes", nay = "nay";
console.log('before deconstructuction: ', nay, yes);
[nay, yes] = [yes,nay];
console.log('after: ', nay, yes);
let jej = 10.895;
console.log('before truncation: ', jej);
console.log('after: ', Math.trunc(jej));