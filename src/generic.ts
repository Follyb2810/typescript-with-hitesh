function gene(arg:number):number{
    return arg
}
function genes(arg:string):string{
    return arg
}
function genee(arg:number):number{
    return arg
}
function genees(arg:any):any{
    return arg
}  //! not acceptable

//! using generic
function identity<Type>(arg:Type):Type{
    return arg
}

const scores: number[] = [1,2,3]  ///!declaring array
const scoress :Array<number>[] =[[1],[2],[2]] ///!declaring array


function generic<Type>(val:Type):Type{
    return val
}
generic(2)
generic("2")
generic(true)

function shortWay<T>(arg:T):T{
    return arg
}

interface Bottle {
    brand:string,
    type:number
}


// shortWay<Bottle>({brand:'folly',type:1}):{}{
//     return {}
// }
const aba: number[]=[1,2]
function getProduct<T>(product:T[]):T {
    return product[1] 
}

//! uisng arrow
const getMoreProduct =<T>(product:T[]):T=>{
    return product[1]
}

console.log(getMoreProduct([1,2,4]))