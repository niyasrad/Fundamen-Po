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

/*

7. Functions, Context and Variable Environments
Variable Environment - Where the variables live and how they relate to each other in memory. Essentially, where the variables are.

*/

function funToCallE() {
    var varToCallE
    console.log("7", varToCallE)
}

function funToCallF() {
    var varToCallE = 2
    console.log("7.1", varToCallE)
    funToCallE()
}

var varToCallE = 1
console.log("7.2", varToCallE)
funToCallF()
console.log("7.3", varToCallE)

/*

Understanding: The variable environment is created for each execution context. It's where the variables live and how they relate to each other in memory (Scope).

And this might bring a doubt, what about the global execution context?

When you decalare a variable inside of your function, it eliminates any possibility of accessing the global variable with the same name.

But if you do not declare a variable inside of your function, it will look up the scope chain and find the variable in the outer environment. More on that very soon.

*/

/*

8. Scope Chain

Warning: Interesting, but very fundemental concept. Pay attention!

The above mentioned problem, wherein, let's say I don't declare the variable, and see what's being logged inside the scope.

Scope Chain: The scope chain is the order in which functions are written lexically in the code.

*/

function funToCallG() {
    console.log("8", varToCallG)
}

function funToCallH() {
    varToCallG = 2
    console.log("8.1", varToCallG)
    funToCallG()
}

var varToCallG = 1
console.log("8.2", varToCallG)
funToCallH()

/*

Understanding: The variable is not declared, but it's still logging the value. Why?

Now, the variable is not declared in the function therefore it's checked up on the outer environment, which is the global execution context. (Lexically written before the function)

To remember: Whenever there's an execution context created, it also is created with a reference to the outer environment. (The place where the function was written lexically)

The links are called the scope chain. (The order in which functions are written lexically in the code)

*/

/*

Let's do something interesting, and change the lexical order.

*/

function funToCallJ() {
    function funToCallI() {
        console.log("8.3", varToCallI)
    }
    var varToCallI = 2
    console.log("8.3.1", varToCallI)
    funToCallI()
}

var varToCallI = 1
console.log("8.3.2", varToCallI)
funToCallJ()

/*

Understanding: The outer reference here for the nested function was the outer function. Therefore outputting the way we woudln't expect.

It will always look up the scope chain, and find the variable in the outer environment. (The place where the function was written lexically) 

Note: If it has to go up the scope chain, it will go up the scope chain, until it finds the variable. If it doesn't find it, it will throw an error.

*/

function funToCallK() {
    function funToCallL() {
        console.log("8.4", varToCallL)
    }
    console.log("8.4.1", varToCallL)
    funToCallL()
}

var varToCallL = 1
console.log("8.4.2", varToCallL)
funToCallK()


/*

Understanding: Lexical order is important. Check where, outside the scope chain, the variable is declared. If it's not declared, it will throw an error. This can help you debug issues in JavaScipt.

*/

/*

9. Scope, ES6 and Let

Scope: Where a variable is available in your code and if it's truly the same variable, or a new copy.

ES6: Let and Const

Let: Let is a new way of declaring variables in ES6. It's a block scoped variable. (It's only available in the block it's declared in, not outside of it)

If variables declared with let are tried to be accessed outside of the block or, before the declaration, it will throw an error.

*/

/*

10. Asynchronous Callbacks
Asynchronous: More than one at a time.

JavaScript is synchronous, single threaded language. But it has functions that are asynchronous. How? It's because of the event queue. (The event loop) And the browser has many elements like the HTTP request, DOM events, etc. that are asynchronous, and are handled by the browser.

Let's see an example of this.
Warning: Broken! (Don't run it)

*/

function funToCallM() {
    let timeToWait = 3000 + new Date().getTime()
    while (new Date() < timeToWait) {}
    console.log("10", "You've called the function!")
}

function clickHandler() {
    console.log("10.1", "Click event!")
}

document.addEventListener('click', clickHandler)
funToCallM()
console.log("10.2", "You've called the function!")

/*

Understanding: The event queue is looked at only when the execution stack is empty. (The call stack is empty)

Therefore, current long running functions will block the code from running. (The while loop)

*/
