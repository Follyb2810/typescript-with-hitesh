//!function
function addTwo(num:number){ 
    return num + 2
}
addTwo(5)

function getUpper(val:string){
    return val.toUpperCase()
}
getUpper('1')

function signUp(name:string,email:string,password:string,isPaid:boolean){}
 signUp('fooly','folly@','folly',true)

 let loginUser =(email :string,name:string,isPaid:boolean=true)=>{}
 loginUser('fooly','folly@',true)

 //!return

 function getNum (num:number):number{
    return  num
 }
 getNum(12)
 const getHello=(hell:string):string=>{
    return 'hello '
 }
 const hero=['thor','spider','oron']
 const heros=[1,2,3]

 hero.map(hero=>`herro is ${hero}` )
 heros.map(hero=>`herro is ${hero}` )

 function voidError(err:string):void{
    console.log(voidError)
 }

 function voidHandle(err:string):never{
    // console.log(voidError)
    throw new Error(err)
 }
 
export {}  