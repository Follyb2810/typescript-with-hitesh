//!type
type Users ={
    email:string,
    userId:number   
}

interface User {
    email:string,
    userId:number,
    readonly dbId:number,
    googleId?:string,
    startTrail:()=>string,
    startReal():string,
    getCoupon(couponName:string,value:number):number  
}

interface User {
    githunToken:string
}
interface Admin extends User {
    role: 'admin'|'user'|'learner'
}


 

const folly:Admin={
    email:'a@',
    userId:1234,
    dbId:10,
    startTrail: function(){
        return 'heelo'
    },
    startReal:function(){
        return 'hello'
    },
    getCoupon:function(a:'helo',b:2){
        return 10 
    },
    githunToken:'folly',
    role:'admin'
}




//! type
type folly ={
    name:string,
    email:'a'|'b'
}
//! example
const me:folly ={
    name:'a',
    email:'b'
}