// method

// const person ={
//     fristname : "shai",
//     age : 23,
//     about: function(){
//         console.log(`person name is ${this.fristname} and age ${this.age}`);
//     }
// }

// person.about()

// call

// const person ={
//         fristname : "shai",
//         age : 23,
//         about: function(hobbies){
//             console.log(this.name,this.age ,hobbies);
//         }
//     }
//     const person2={
//         name:"prince",
//         age:34

//     }
    
    // person.about.call(person2 , "cricket")
    // apply
    // person.about.apply(person2 , ["cricket"])
    // bind 
    // const fun =person.about.bind(person2 , "cricket")
    // fun()
    const userMtheod = {
        about : function(){
              return ` my first name ${this.firstname} and age ${this.age}` 
        },
        id:function(){
             return this.age >=18;
        }
    }

    function Createuser (firstname , age, addres , idn ){
        person = Object.create(userMtheod);
        person.firstname =  firstname;
        person.age =age;
        person.addres = addres;
        person.idn = idn
        return person;
    }
 const user1 = Createuser( " shai" ,21 ,"aswertr" ,123);
 const user2 = Createuser( " shaile" ,4 ,"aswertr" ,123);
 
 console.log(user1);
 console.log(user2.id());
 console.log(user1.about());
 console.log(user1.id());
