// class Animal{
//     constructor(name ,age ,food){
//         this.name=name;
//         this.age=age;
//         this.food=food;
//     }
    
//     about(){
//         return `name this ${this.name } age  ${this.age}   food eating ${this.food}`
//     }

//     eat (){
//         return `what is ${this.age}`
//     }

// }

// class dog extends Animal{
//      constructor(name ,age ,food , speed){
//         super(name , age ,food)
//         this.speed = this.speed;
//      }
//      run(){
//         return `this is speed of dog ${this.speed}kph`
//     }
// }

// const a1 = new Animal("sheru",12 , "milk")
// const b = new dog("mo" , 13 ,"chiken" , 1.23)
 // console.log(a1);
 // console.log(a1.about());
// console.log(b);
// console.log(b.run());

class Animal {
    constructor(name, age, food) {
        this.name = name;
        this.age = age;
        this.food = food;
    }

    about() {
        return `name this ${this.name} age ${this.age}   food eating ${this.food}`;
    }

    eat() {
        return `what is ${this.age}`;
    }
}

class Dog extends Animal {
    constructor(name, age, food, speed) {
        super(name, age, food);
        this.speed = speed;
    }

    run() {
        return `this is speed of dog ${this.speed} kph`;
    }
}

const a1 = new Animal("sheru", 12, "milk");
const b1 = new Dog("mo", 13, "chicken", 1.23);

// console.log(a1);
// console.log(a1.about());
console.log(b1);
console.log(b1.run());
