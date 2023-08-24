// class UserClass {
//     email:string
//     public name:string
//  private readonly  city:string="lagos"
//     constructor(email:string,name:string){
//         this.name = name,
//         this.email =email
//     }
// }


//! readonly
//! private
//! public
//! 


// const brand = new UserClass("essentry","eunomy")

class ClsaaUsr {
    private _course = 1
    protected _courses = 1
    readonly city :string='lag'
    constructor(
        public email:string,
        public name:string,
        private id:string
    ){

    }
    private deleteToken(){
        console.log('helo token')
    }
    get getApplEmail():string{
        return 'hello folly '+this.email
    }

    get courseCount():number{
        return this._course
    }

    set courseCount(courseNum) {
        if(courseNum <=1){
            throw new Error('no course')
                this._course = courseNum
        }
    }

}


class subUsers extends ClsaaUsr{
  isFamily:boolean=true
  changeCousre(){
    this._courses = 3
  }
}