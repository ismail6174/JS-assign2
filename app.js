// JS - Assignment 2 (wordsheet)

//Chapter 6 (Math Expression II) - Starts

//Q1. 
//Code a short form of x = x + 1; Use either of the two legal expressions.

var x = 5;
var y = x++;
document.write(x)
document.write(y)

//Q2.
// If x has a value of 100, what is the fastest way to reduce it to 99
//with a math expression?

var x = 100;
var y = --x;
console.log(y)

//Q3. 
//var x = 50; var y = x++;
//What is the value of y?

the value of y = 50


//Q4.
// var y = 50; var z = --y;
//What is the value of z?

the value of z = 49


//Q5.
//In a single statement, decrement num and assign its original value to newNum.

var newNum = num--;

//Q6. In a single statement add 1 to a variable and assign its original
//value to another variable.

var a = ++a;
var b 

//Q7. Assign a number value to a variable. Increment the variable.
//Display the new value in an alert

var num = 12;
var num1 = num++;
alert("the new value is" + num)


//Chapter 6 (Math Expression II) - Ends


//Chapter 7 (Math Expression III) - Starts

//Q1.
// var calculatedNum = 2 + (2 * 6); What
//is the value of calculatedNum? 

var calculatedNum = 2+(2*6);
console.log(calculatedNum) //output=14

//Q2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?

var calculatedNum = (2+2)*6;
console.log(calculatedNum) //output=24

//Q3. var calculatedNum = (2 + 2) * (4 + 2);
//What is the value of calculatedNum?

var calculatedNum = (2 + 2) * (4 + 2);
console.log(calculatedNum) 
//output = 4 * 6 = 24

//4. var calculatedNum = ((2 + 2) * 4) + 2;
//What is the value of calculatedNum?

var calculatedNum = ((2 + 2) * 4) + 2;
console.log(calculatedNum) 
//output = (4 * 4) + 2= 18

//Q5. 
//Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
//clarified with parentheses, producing 56.

////correct parantheses:
var simplify= (2+2)*(4+10);
console.log(simplify) //output=56

//Q6.
 //Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
//clarified with parentheses, producing 20.

////correct parantheses:
var simplify= 2+(2*4)+10;
console.log(simplify) //output=20

//Q7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
//clarified with parentheses, producing 0.5.

////correct parantheses:
var simplify= 4/(2*4);
console.log(simplify) //output=0.5


//Chapter 7 (Math Expression III) - Ends


//Chapter 8 (Concatenating Text Strings) - Starts 

//Q1. var num = "2" + "2";
//What is the value of num? Include quotation marks.

var num = "2" +"2";
console.log('"' + num + '"');
//output "22"

//Q2. message = ("Hello," + "Dolly");
//What is the value of message? (Include the quotation marks.)
//Alert the statement

var message = "Hello," + "Dolly";
alert('"' + message + '"')
//output="Hello Dolly"

//Q3. alert("33" + 3);
//What message displays in the alert box?

alert("33" + 3) //output = 333

//Q4. Write an alert that displays the concatenation of the two parts of
//"Pakistan Zindabad".

alert('"' + "Pakistan Zindabad" + '"');

//Q5. Write a statement that assigns to a variable the concatenation of a
//string with a number

var a = "Ismail Shah" + 25;
console.log(a)
//output=IsmailShah25


//Q6. Assign strings to two variables. Then concatenate them and assign
//the result to a third variable.

var text1 = "Hello"
var text2 = "World"
var result= text1+text2
console.log(result)
//output = HelloWorld


//Chapter 8 (Concatenating Text Strings) - Ends


//Chapter 9 (Prompts) - Starts

//Q1. Code a prompt with the message "Enter first name". The user's
//response is assigned to firstName.

var firstName = prompt("Enter your first name");
console.log(firstName)

//Q2:
//Code a prompt with the message "Country?" and the default
//answer "China". The user's response is assigned to country.

var Country= prompt("Enter Country name");
console.log(Country , "China" );

//Q3. 
//Correct this statement var yourName = prompt(Enter Your Name");

var yourName = prompt("Enter Your Name");


//Q4. 
//Code a prompt that specifies a string as the message Include a default input.

var place= prompt("Enter any place");
alert(place , "Switzerland" );

//Q5.
// Assign strings to two variables. Code a prompt specifying the first
//variable as the message and the second variable as the default
//response. Assign the user's response to a third variable.

var message = "Hello! What are you searching?";
var defaultResponse= "books";

var userResponse= prompt(message, defaultResponse);

console.log("I'm searching for my", userResponse)

//Q6. 
//Display a prompt, including both a message and a default response.
//Display the user's response in an alert.

var userResponse= prompt("Which is your favourite book?", "Peer.e.Kamil");

alert("My favourite book is: " + userResponse)


//Chapter 9 (Prompts) - Ends

// JS - Assignment 2 (wordsheet) - Completed












