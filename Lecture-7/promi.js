
console.log("script start");

const bucket =  ["coffee" , "chips" , "vegetable" ,"salt" , "rice"];
const firedRice = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice"))
    {
        console.log("to making firedrisce");

    }else{
        reject("could not making fired rice")
    }
})



firedRice.then((myfried)=>{
     console.log("lets eat" ,myfried);
}).catch((error)=>{
    console.log(error);
})

console.log("scritpt end");