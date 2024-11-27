// let num:number=23;

// num="vedantk"
// console.log(num)   //error


// let num:number| string =34;
// num="vedant"

// console.log(num)   //correct

// const num1:number=1;
// const num2:number=2;

// function sum(num1:number,num2:number){
//     return num1+num2;
// }


//  let ans= sum(2,1);
// console.log(ans);


// function checkage(age:number){
//     if(age>=18) return true;
//     return false;
// }

// console.log(checkage(9))


// function f1(f2:()=>void){
//     f2()
// }

// function f2(){
//     console.log("I print after 1 sec");
// }

// f1(f2);

//we have to define a function which will take one function as input and call other function after 1 secound

// function Delay(fn :()=>void){
//    setTimeout(fn,1000);
// }

//  Delay(function(){
//     console.log("printed")
// })




// function Delay(fn :()=>number){
//     setTimeout(fn,1000);
//  }
 
//   Delay(function(){
//      console.log("printed")
//      return 1;
//  })

function greeting(fn:()=>string){
  setTimeout(fn,5000)
}

function greetingtouser(user:string){
    console.log("Hello Gm "+user);
}

greetingtouser("vedant")