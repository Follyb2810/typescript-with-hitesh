"use strict";
console.log('hello follyjjj');
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this._courseCounts = 1;
        this.city = 'lagos';
        this.email = email,
            this.name = name;
        this.city = this.city;
    }
    delereToken() {
        console.log('token deleted');
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('couser cout ');
        }
        this._courseCount = courseNumber;
    }
}
const follyb = new User('folly', 'babs');
follyb;
//!  Inheriance
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFmaily = true;
    }
    changeCousreCouser() {
        this._courseCounts = 5;
    }
}
