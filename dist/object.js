"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! object
const User = {
    name: 'folly',
    email: 'folly@gma',
    isActive: true
};
const Users = {
    name: 'folly',
    age: 1,
    isActive: true,
    street: '1222'
};
function createUser({ name: string, isActive: bolean, age: number }) { }
// createUser(Users)
createUser({ name: 'fool', isActive: true, age: true });
function createCourse() {
    return { name: "string", isActive: true, price: 10 };
}
function userType(user) {
    return User;
}
userType({ name: 'folly', email: 'a', isActive: false });
const userDetail = {
    name: 'a',
    email: 's',
    isActive: true,
    class: '',
    _id: 'a'
};
// function getFolly({name:string,email:string,age:number}){
//     return {name,email,age}
// }
// getFolly({name:'f',email:'b',age:1})
function getFolly({ name: nameValue, email: emailValue, age: ageValue }) {
    return { name: nameValue, email: emailValue, age: ageValue };
}
const result = getFolly({ name: 'f', email: 'b', age: 1 });
console.log(result);
