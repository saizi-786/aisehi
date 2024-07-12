

// file 2

// require('index') 

// let math=require('./index');
// console.log(math);

// console.log(math.pi);
// console.log(math.ans1(5));
// console.log(math.ans2(5,6));

//Another way to do above task is destructuring
let{pi , ans1, ans2} = require('./index') 

console.log(pi);
console.log(ans1(5));
console.log(ans2(5,6));



