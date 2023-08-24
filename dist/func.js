"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//!function
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('1');
function signUp(name, email, password, isPaid) { }
signUp('fooly', 'folly@', 'folly', true);
let loginUser = (email, name, isPaid = true) => { };
loginUser('fooly', 'folly@', true);
//!return
function getNum(num) {
    return num;
}
getNum(12);
const getHello = (hell) => {
    return 'hello ';
};
const hero = ['thor', 'spider', 'oron'];
const heros = [1, 2, 3];
hero.map(hero => `herro is ${hero}`);
heros.map(hero => `herro is ${hero}`);
function voidError(err) {
    console.log(voidError);
}
function voidHandle(err) {
    // console.log(voidError)
    throw new Error(err);
}
