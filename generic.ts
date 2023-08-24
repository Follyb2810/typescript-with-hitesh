const scoreg:Array<number>=[]
const namess :Array<string>=[]



function identiy(val:boolean | number):boolean|number{
    return val
}

function identiyone(val:any):any{
    return val
}

function identiytwo<Type>(val:Type):Type{
    return val
}
identiytwo(3)
identiytwo("3")
identiytwo(true)

function identiythre<T>(val:T):T{
    return val
}

interface bootle{
    brand:string,
    type:number
}

identiythre<bootle>({})

function getSeats<T>(val:T[]):T{
    return val[2]
}

const getAll =<T>(val:T[]):T=>{
    return val[2]
}

interface db {
    connect:string,
    user:string,
    pwd:string
}

function another<T,U extends db>(valu1:T,valu2:U):object{
    return {
        valu1,valu2
    }

}

another(2,{
    connect:'f',
    user:'s',
    pwd:''

}) 


interface quiz {
    name:string,
    type:string
}
interface cousre{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[]
    addtoCart(prod:T){
        this.cart.push(prod)
    }
}