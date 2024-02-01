// function
// function declation
// function sum (number1, number2){
//     return number1 +number2;
// }

// console.log(sum(9,6));

// function expersion

// let sum =function (number1, number2){
//     return number1 +number2;
// }
// console.log(sum(4,5));

//function arrow

// let sum =(number1, number2) =>{
//         return number1 +number2;
//     }
 //     console.log(sum(4,5));

// let find = (arrays, target) => {
//   for (let i = 0; i < arrays.length; i++) {
//     if (arrays[i] === target) return true;
//   }
//   return false;
// };

// const arrays = [1, 2, 3, 4, 56];
// console.log(find(arrays, 8));

// const cheack = num => num % 2 === 0;
// console.log(cheack(8));


// hosting
// hello();
// function hello(){
//     console.log("hello bacha party");
// }

 // lexical scope 

// const a=9;

// function Printn (){
//     function inside(){
//          console.log(a , " inside functio");
//          const b = () =>{
//             console.log( a , " inside arrow function");
//          }
//          b();
//     }

//     inside();


// }
// Printn();


// block scope and function scope 


// {
//     let a = "shai"
//     console.log(a);
// }

// console.log(a);


// function fic(n){
//    if (n<1) {
//        return 1;
//    }
//    return n*fic(n-1)
// }

// console.log(fic(4));

// cull function


// function Print(he){
//     he();
//      console.log("hello world  1");
// }

// function Print2(){
//    console.log("hello world 2");
// }


// Print(Print2);
