// Exports using Common Module

const { randomFunction, getEvenSum, age } = require("./main");
randomFunction();
getEvenSum();
console.log(ages);

//*
//** */
//*** */
//**** */

// Exports using ES Module

import randFunc, { getEvenSum, age } from "./main.mjs";
randFunc();
getEvenSum();
console.log(age);
