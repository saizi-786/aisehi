let pi = Math.PI;
console.log(pi);

let ans1 = num =>num*num;
let ans2 = (a,b)=> a+b;

console.log(ans1);
console.log(ans2);


// export behaviour show krega bexoz rquire dekh liys 
//  by degault exports an empty object {}

// module.exports =  {} // by default 
 module.exports =  {pi,ans1,ans2}; 


 //obj == key:valur
//  key and value are same

//  module.exports ={
//     pi:pi , //---> pi
//     ans1:ans1, //--->ans1
//     ans2:ans2 // --->ans2
    
//  }

//  module.exports = {
//     pii:pi , //---> pi
//     ans1 , //---> ans1
//     ans2 // ----> ans2
//  }