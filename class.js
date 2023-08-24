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
 /** @class */ (function () {
    function ClsaaUsr(email, name, id) {
        this.email = email;
        this.name = name;
        this.id = id;
        this._course = 1;
        this.city = 'lag';
    }
    ClsaaUsr.prototype.deleteToken = function () {
        console.log('helo token');
    };
    Object.defineProperty(ClsaaUsr.prototype, "getApplEmail", {
        get: function () {
            return 'hello folly ' + this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClsaaUsr.prototype, "courseCount", {
        get: function () {
            return this._course;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error('no course');
                this._course = courseNum;
            }
        },
        enumerable: false,
        configurable: true
    });
    return ClsaaUsr;
}());
