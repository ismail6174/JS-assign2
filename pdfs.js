
//Assignment 2 - Pdfs - Starts


//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1= 4;
var num2 =6;
var total=num1+num2
console.log("the sum of" ,num1, "and", num2, "is" ,total)

//2. Repeat task1 for subtraction, multiplication, division.

//substraction:
var num1= 14;
var num2 =6;
var total=num1-num2
console.log("the difference of" ,num1, "and", num2, "is" ,total)

//multiplication:
var num1= 4;
var num2 =6;
var total=num1*num2
console.log("the multiple of" ,num1, "and", num2, "is" ,total)

//division:
var num1= 14;
var num2 =7;
var total=num1/num2
console.log("the division of" ,num1, "and", num2, "is" ,total)


//3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
/* b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value 
by 3. 
l. Output : “The remainder is : 0”. */


//a
var num;
//b
document.write("Value
after variable declaration is:" , null);

//c
num=5;

//d
document.write("Initial
value:" , num);

//e
var numincr=++num;

//f
document.write("Value after increment is:" , numincr);

//g
var num2=num+7;

//h
document.write("Value after addition is:", num2 )

//i
var numdcr = --num;

//j
document.write("Value after decrement is:" , numdcr);

//k
var remainder=num%3;

//L
document.write("the remainder is:" , remainder)



/*  4. Cost of one movie ticket is 600 PKR. Write a script to 
store
ticket price in a variable & calculate the cost of buying 5 
tickets
to a movie. Example output: */

var cost=600;
var ticket=5;
var total= cost * ticket;
console.log("Total cost to buy", ticket , "tickets to a movie is" , total)


/*  5. Write a script to display multiplication table of any 
number in your browser. E.g */


var table=6;
var count=1;
var county=table * count;

console.log(table, "x" , count , "=" ,
    county)
    
console.log(table, "x" , count+1 , "=" ,table*2)
    
console.log(table, "x" , count+2 , "=" ,table*3) 

console.log(table, "x" , count+3 , "=" ,table*4) 

console.log(table, "x" , count+4 , "=" ,table*5) 

console.log(table, "x" , count+5 , "=" ,table*6) 

console.log(table, "x" , count+6 , "=" ,table*7) 

console.log(table, "x" , count+7 , "=" ,table*8) 

console.log(table, "x" , count+8 , "=" ,table*9) 

console.log(table, "x" , count+9 , "=" ,table*10) 














