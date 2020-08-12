var sum = require('./operations/sum')
var multiply = require('./operations/multiply')
var moment = require('moment')

first=7;
second=3;

console.log("Today is "+moment().format('dddd , MMMM Do YYYY HH:MM:SS A'))

sum(first,second);
multiply(first,second)