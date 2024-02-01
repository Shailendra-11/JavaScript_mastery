
 //  forech 

// const numbers = [7,8,9,4]


// numbers.forEach(function(num , index){
//     console.log(` index ${index} present arrays ${num}*2 is multiply ${num*2}`);
// });


// map method
// const  num =  [2,3,4,6,8]
// const numbers = num.map((number)=>{
//         return number*number;
// })
// console.log(numbers);


// const users =[
//     {firstname:"shai" ,age:3},
//     {firstname:"nilu" ,age:34},
//     {firstname:"shek" ,age:78},
//     {firstname:"tam" ,age:12},
//     {firstname:"mini" ,age:12},
// ]
// users.forEach((user)=>{
//     console.log(user.age);
// })

// const  userName = users.map(function(user){
//       return user.firstname;
// })
// console.log(userName);

// filter

// const number  =  [1,2,3,4,5,6,7,8];

// const eveNNumber = number.filter(function(num){
//        return num%2==0 ;
// })

// console.log(eveNNumber);


// reduce

// const numer =[1,2,3,4,5,6]


// const sum = numer.reduce(( accumlator , current)=>{
//        return accumlator+current
// },0)

// console.log(sum);


// sort 

const arra= [1,245,67,89,38,45]

arra.sort((a,b)=>{
    return b-a;
});

console.log(arra);