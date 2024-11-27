let firstname="vedant"

interface usertype{
  firstname:string,
  lastname:String,
  age:number
}

function greet(user:usertype){
    console.log("Hello"+user.firstname)
}

const users={
    firstname:"vedant",
    lastname:"khasbage",
    age:19
}

greet(users)