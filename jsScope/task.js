// 1
// undefined, because a is declared as a var when it's hoisted it'll be:
// var a;
// console.log(a);
// and vars don't throw errors, they return undefined.

// 2
// reference error because a is declared using let and when it's hoisted and used before initialization it will be in the TDZ.
// the TDZ is the zone between when the let variable is in the running scope and when it's declared. Using the variable in that zone throws ReferenceError.

// 3
// 2 then 1

// 4
//  the x variable is accessed within the function scope before it was intialized
// and since it was declared using let, it returns reference error.

// 5
// 3 3 3

// 6
// 0 1 2

// 7
// 2

// 8
// error because variable a has ben declared already.

// 9
// function foo() {
//   return 20;
// }

// 10
// 20 (function block a mutates global a)

// 11
// 10  (leakage since it's var)

// 12
// referenceError  (let doesn't allow leakage so when using the variable outside the block you get an error)

// 13
// 10

// 14
//  3 3 3

// 15
// IIFE => Immediate Invoked Function EXpression
// 0 1 2
