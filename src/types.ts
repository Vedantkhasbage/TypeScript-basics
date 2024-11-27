type user={
    fname:string,
       age:number
}

type user2={
    lname:string
}

type user3=user | user2;

type user4=user & user2 & user3;

///type provide union and intersection while interction don't 