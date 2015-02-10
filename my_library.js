/*Homework 5, broken down into the different topic we learned today.
1. Variables
2. Debugging (alerts, comments, the console)
3. Different data types
4. Arrays
5. Testing
6. Logic
7. Functions*/


//TOPIC #1: Variables. Below are a few different examples of variables. Note: variables begin with "var" followed by the actual variable, then the assignment operator and the value. Variables can only begin with a letter or an underscore. Also, javascript is case-sensitive so your browser will interpret "x" as being different than "X".

var a = 1

var x = 5346

var _numberofshoes = 15

var C = 82



//TOPIC #2: Debugging. Below are examples of alerts, comments, and printing to the console, using the variables defined in Topic #1.

console.log(a); 
//This will print 1 in the console.

console.log(a+x); 
//This will print 5347—the values of a and x added in the console.

console.log("x"); 
//This will print the letter "x". When you push something to the console in quotations, the console prints exactly what's in that string.

console.log(alert(_numberofshoes+a)); 
//This will cause the browser to open an alert dialogue box with the values of _numberofshoes and a added.

console.log(alert(x)); 
//This will cause the browser to open an alert dialogue with the value of x.
//This is a comment on a single line.
/*This is 
a comment on 
multiple lines.*/



//TOPIC #3: Different data types. Below are 4 different data types: strings, numbers, booleans, undefined.

"This is a string." 
//This is an example of a string. Values included in double quotations are treated as strings.

"String." 
//This is another example of a string.

4 
//This is an example of a number.

var m = 4 
//This is an example of a number defined by a variable.

true 
false
//These are the two booleans. It's an either or value type in which the script will only take the value true or the value false.

var h 
//This is an example of a data type that's undefined.



//TOPIC #4: Arrays. Below are examples of arrays. Arrays are basically a collection, or series, of strings.

var colors = ["yellow", "green", "blue", "red", "violet", "orange"];
//This is an example of an array that has six values. The values are assigned a number beginning at 0 which can be used in debugging and programming. See example below.

console.log(alert(colors[0]));
//In this example, the browser will pop up an alert that prints the word "yellow."

console.log(alert(colors[0] + colors[4]));
//In this example, the browser will pop up an alert that prints the word "yellow" followed by the word "violet."



//TOPIC #5: Testing. Testing allows the programmer to control the flow of scripts. In other words, the programmer can write a function that will only run if the test returns either true or false. 

4 < 10;
//This is an example of a test that will return a boolean value of true.

4 = 10;
//This is an example of a test that will return a boolean value of false.

"4" = "10"
//In this example, the test is comparing the strings against one another. It will return a boolean value of false.

