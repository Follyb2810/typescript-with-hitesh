console.log('hello follyjjj')

class User {
   public email:string
    name:string
    private _courseCount = 1
    protected _courseCounts = 1
 private  readonly city:string ='lagos'
    constructor(email:string,name:string){
        this.email = email,
        this.name = name
        this.city = this.city    
    }
    private delereToken(){
        console.log('token deleted')
    }

    get getAppleEmail():string{
      return `apple ${this.email}`
    }
    get courseCount():number{
     return this._courseCount
    }
    set courseCount(courseNumber){
        if(courseNumber <= 1){
        throw new Error('couser cout ')
        }
        this._courseCount = courseNumber
    }
} 

const follyb = new User('folly','babs')
follyb

//!  Inheriance

class subUser extends User{
    isFmaily:boolean=true
    changeCousreCouser(){
        this._courseCounts =5
    }
}