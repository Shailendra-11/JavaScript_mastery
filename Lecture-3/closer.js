// closer


function Print(first ,last){

  function Printn(){
    console.log(first , last);
  } 

  return Printn;
}

let colser = Print("shai" , "ke");
 colser();
