//write a program to find whether a given year is a leap year or not.
let year=1998;
if((year%4===0) && (year%100!=0) || (year%400===0))
console.log("it is a leap year");
else
console.log("it is not leap year");
