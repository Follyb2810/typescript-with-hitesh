//! object
const User = {
    name:'folly',
    email:'folly@gma',
    isActive:true
}
const Users = {
    name:'folly',
    age:1,
    isActive:true,
    street:'1222'
}

function createUser({name:string,isActive:bolean,age:number}){}
// createUser(Users)
createUser({name:'fool',isActive:true,age:true})

function createCourse():{name:string,isActive:boolean,price:number}{
    return {name:"string",isActive:true,price:10}
}

//! type

type User ={
    name:string,
    email:string,
    isActive:boolean
}
function userType(user:User):User{
    return User
}
userType({name:'folly',email:'a',isActive:false})

type userDetail ={
    name:string,
    email:string,
    isActive:boolean,
    class:string,
    readonly _id: string,
    card?:number  //!optional
}

const userDetail:userDetail ={
        name:'a',
        email:'s',
        isActive:true,
        class:'',
        _id:'a'
        
}

// function getFolly({name:string,email:string,age:number}){
//     return {name,email,age}
// }

// getFolly({name:'f',email:'b',age:1})
function getFolly({ name: nameValue, email: emailValue, age: ageValue }: { name: string, email: string, age: number }) {
    return { name: nameValue, email: emailValue, age: ageValue };
}

const result = getFolly({ name: 'f', email: 'b', age: 1 });
console.log(result);

export {}