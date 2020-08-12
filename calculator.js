function sum (a, b) {
    console.log("The sum of " + a + " & " +  b + " is : " + (a + b));
}

function multiply (a, b) {
    console.log("The multiplication of " + a + " & " +  b + " is : " + (a * b));
}


module.exports={
    sum : sum,
    multiply : multiply
};