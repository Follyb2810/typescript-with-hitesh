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
var loginUser = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser('fooly', 'folly@', true);
//!return
function getNum(num) {
    return num;
}
getNum(12);
var getHello = function (hell) {
    return 'hello ';
};
var hero = ['thor', 'spider', 'oron'];
var heros = [1, 2, 3];
hero.map(function (hero) { return "herro is ".concat(hero); });
heros.map(function (hero) { return "herro is ".concat(hero); });
function voidError(err) {
    console.log(voidError);
}
function voidHandle(err) {
    // console.log(voidError)
    throw new Error(err);
}
