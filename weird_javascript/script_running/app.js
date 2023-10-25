// To go over this guide as a cheat sheet, consider being energetic, open your own editor and try these out!

/* 

1. Execution Context -> It has the Global Object, "this", Outer Environment and Finally your code.
All the above variables, functions are attached with the global object

*/

var accessVarA = 'Random String Variable'

function accessVarB() {}

/* 

2. Execution Context -> Creation and hoisting
Here, observe that the function gets called in the output, but not the variable, it's rather returned undefined. When you remove it, it throws an error.

*/

funToCallB()
console.log("2",varToCallA)

function funToCallB() {
    console.log("2.1", "You've called the function!")
}
var varToCallA = 'Random String Variable'

/*

To understand this deeper, let's dig into the Execution Context Creation and Hoisting. 
Execution Context is created in two phases, Creation and Execution.
For creation, it sets up the memory space for variables and functions, called Hoisting.
In execution phase, we have the assigned values.

Functions are entirely stored in memory, but variables are not assigned
Let's try this then?

*/

const constFunToCallB = () => {
    console.log("You are not calling the actual function")
}

/* 

It would not execute before initialization!
Understanding: It's always better to use the variables and call functions only later. Javascript engine makes it's own decisions.

*/

/*

3. Undefined
When you see undefined, it means that the variable has been declared but not assigned any value.

*/

var undefinedVar
console.log("3",undefinedVar)

/*

But when it's not declared, it throws an error.
ReferenceError: notDeclaredVar is not defined (Doesn't have it in memory)

Pro Tip: Never use undefined, it's a reserved keyword. Use null instead. (Undefined must mean, i never set this value.)

*/



/*

4. Execution Context - Execution Phase
This is where your code is executed line by line.

*/

funToCallC()
console.log("4", varToCallC)

function funToCallC() {
    console.log("4.1", "You've called the function!")
}

var varToCallC = "Random String Variable"

console.log('4.2', varToCallC)

/*

Understanding: This happened because of the Execution Context. It has two phases.
The final phase involves line-line execution of the code.

*/

/*

5. Single Threaded, Synchronous Execution
Single Threaded - One command at a time.
Synchrounous - One at a time, in order.


Understanding: Javascript is a single threaded language and performs synchronous execution.

*/


/*

6. Function Invocation and Call Stack
Function Invocation - Running a function
Call Stack - Where the execution context is stored

*/

function funToCallD() {
    console.log("6", "You've called the function!")
}

function funToCallDTwo() {
    funToCallD()
    console.log("6.1", "You've called the function!")
}

funToCallDTwo()

/*

A new Execution Context is created and pushed to the call stack when a function is called. (It's own creation and execution phase)
Understanding: When you run a function, it's pushed to the call stack. When it's done, it's popped off the stack.

*/