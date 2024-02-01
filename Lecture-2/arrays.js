// let fruits = ["appple" ,"orange" , "grapes"]
// console.log(fruits);
// fruits.unshift("banana");
// console.log(fruits);
// fruits.shift()
// console.log(fruits.shift());
// console.log(fruits);

// for (let fruit of fruits) {   
//         console.log(fruit.toUpperCase());
//     }


//     for (let index in fruits) {   
//         console.log(fruits[index]);
//     }

// primiteve vs refrence data types
// let a=4;
// let b=a;

// console.log(" a"  ,a);
// console.log( " b" ,b);
// a++;
// console.log("after");
// console.log(" a"  ,a);
// console.log( " b" ,b);

// refrence type

// let arry1  =["item1" ,"item2"]
// let arry2 = arry1;

// console.log(arry1);
// console.log(arry2);

// console.log("after");

// arry1.push("item3")

// console.log(arry1);
// console.log(arry2);

// arrays destrucring

// let myArrays = ["item1" , "item2" , "item3"   , "item4"]

// let [myarrval1 ,myarrval2   ,...mynewArrays] = myArrays;

// console.log(myarrval1);
// console.log(myarrval2);
// console.log(mynewArrays);

// arrays  clone


let arry = ["shai"   , "pri"  , " ravi"]

let Newarrays = arry.concat()

console.log(Newarrays);


console.log(arry===Newarrays);

