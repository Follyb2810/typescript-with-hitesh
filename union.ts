//union

let score:number| string =33 

type user ={
    name:string,
    id:number
}
type admin={
    username:string,
    id:number
}

let folly :user | admin ={name:'folly',id:222}
folly = {username:'folly',id:222}

const data :number[]=[1,2,3]
const data1 :string[]=["1","2","3"]
const data3 :(string|number)[]=["1","2","3",4,5]  //! can contain both string and number array
const data5 :any[]=["1","2","3",4,5]  //! loose
const data4 :string[]| number[]=["1","2","3"] //! can only contain string array or number array
const pie:314 =314 //! strict
let seatAllotment :"aisle"|'middle'|'window' //!strict
