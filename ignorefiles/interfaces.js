"use strict";
let firstname = "vedant";
function greet(user) {
    console.log("Hello" + user.firstname);
}
const users = {
    firstname: "vedant",
    lastname: "khasbage",
    age: 19
};
greet(users);
