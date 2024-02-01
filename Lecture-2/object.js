// object 


// const person = {
//     name: "harshit",
//     age:22,
//     hobbies: ["cricket" ,"dance" , "watching porn" ]
// }
// // add key value 

// person.gender = "male"
// console.log(person);
// console.log(person.age);
// console.log(person.hobbies);

// difference between dot and bracket notatiot

//  const key = "email"
// const person = {
//     name: "harshit",
//     age:22,
//    "person hobbies": ["cricket" ,"dance" , "watching porn" ]
// }

//    person[key] = "abs@123"
// console.log(person);

// console.log(person["person hobbies"]);


// iteration method of object
// const person = {
//     name: "harshit",
//     age:22,
//     hobbies: ["cricket" ,"dance" , "watching porn" ]
// }

// for in loops

// for(let key in person){
//     console.log(` ${key}  : ${person[key]}`);
// }
// console.log(Object.keys(person));


// for(let keys of Object.keys(person)){

//     console.log(person[keys]);
// }


// computed properies

// const key1 = "object1"
// const key2 = "object2"

// const value1 ="myvalue1 "
// const value2= " myvalue2"

// const obj ={
// [key1] : value1,
// [key2]: value2
// }

// // obj[key1] = value1;
// // obj[key2] = value2;

// console.log(obj);


// spred operator in object

// const obj1 ={
//     key1:"value1",
//     key2:"value2",

// }
// const obj2 ={
//     key3:"value3",
//     key4:"value4",
// }
// const newobject = {...obj1 , ...obj2 , key5:"value56" }
// console.log(newobject);
const obj1 ={
    key1: "value1",
    key2: "value2",
    key3:"value3",
    key4: "value4"
}
const {key1 , key2 , ...obj2} = obj1;
console.log(key1);
console.log(key2);
console.log(obj2);



