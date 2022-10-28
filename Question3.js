//factorial of a number
function factorial(y)
{
    if (y===0)
    return 1;
    else 
    return ( y *  factorial(y-1));
}
let result = factorial(5);
console.log(result);
