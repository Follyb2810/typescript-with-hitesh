"use strict";
function gene(arg) {
    return arg;
}
function genes(arg) {
    return arg;
}
function genee(arg) {
    return arg;
}
function genees(arg) {
    return arg;
} //! not acceptable
//! using generic
function identity(arg) {
    return arg;
}
const scores = [1, 2, 3]; ///!declaring array
const scoress = [[1], [2], [2]]; ///!declaring array
function generic(val) {
    return val;
}
generic(2);
generic("2");
generic(true);
function shortWay(arg) {
    return arg;
}
// shortWay<Bottle>({brand:'folly',type:1}):{}{
//     return {}
// }
const aba = [1, 2];
function getProduct(product) {
    return product[1];
}
//! uisng arrow
const getMoreProduct = (product) => {
    return product[1];
};
console.log(getMoreProduct([1, 2, 4]));
