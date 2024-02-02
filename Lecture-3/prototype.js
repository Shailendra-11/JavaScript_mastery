// function Createuser (firstname , age, addres , idn ){
//     person = Object.create(Createuser.prototype);
//     person.firstname =  firstname;
//     person.age =age;
//     person.addres = addres;
//     person.idn = idn
//     return person;
// }

//  Createuser.prototype.about =  function(){
//     return ` my first name ${this.firstname} and age ${this.age}` 
// }
//  Createuser.prototype.id=function(){
//    return this.age >=18;
// }
// const user1 = Createuser( " shai" ,21 ,"aswertr" ,123);
// const user2 = Createuser( " shaile" ,4 ,"aswertr" ,123);

// console.log(user1);
// console.log(user2.id());
// console.log(user1.about());
//console.log(user1.id());

// new keyworld
function Createuser (firstname , age, addres , idn ){
     this.firstname =firstname;
     this.ag=age;
     this.addres=addres;
     this.idn=idn;
    
}

 Createuser.prototype.about =  function(){
    return ` my first name ${this.firstname} and age ${this.age}` 
}
 Createuser.prototype.id=function(){
   return this.age >=18;
}
const user1 = new Createuser( " shai" ,21 ,"aswertr" ,123);
const user2 = new Createuser( " shaile" ,4 ,"aswertr" ,123);

console.log(user1);
console.log(user2.id());
console.log(user1.about());
console.log(user1.id());

