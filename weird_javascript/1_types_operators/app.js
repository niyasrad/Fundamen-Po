/*

1. Dynamic Typing
 
The JavaScript engine automatically figures out the type of the variable on execution. It's not like Java or C++ where you have to declare the type of the variable. (Java is a statically typed language)

Understanding: 

Dynamically Typed - You don't tell the engine what type of data a variable holds, it figures it out while your code is running. While this is very powerful, it's also dangerous if you do not understand how JavaScript works.

*/

/*

2. Primitive Types

A type of data that represents a single value. That is, not an object. There are 6 primitive types in JavaScript.

2.1 undefined - Represents lack of existence. (You shouldn't set a variable to this)
2.2 null - Represents lack of existence. (You can set a variable to this)
2.3 boolean - true or false
2.4 number - Floating point number (There's always some decimals). Unlike other programming languages, there's only one number type in JavaScript. (There's no separate integer type)
2.5 string - A sequence of characters (Both '' and "" can be used)
2.6 symbol - Used in ES6 (Not supported in all browsers)

Understanding:

These are the basic values, and this is what the engine will dynamically figure out.

*/

/*

3. Operators

A special function that is syntactically (written) differently. Generally, operators take two parameters and return one result.

*/

var varToCallA = 3 + 4
console.log("3", varToCallA)

/*

Understanding: This is an infix notation. (The operator comes in between the two parameters). And you're calling a function called + with two parameters 3 and 4.

*/

/*

4. Operator Precedence and Associativity

Operator Precedence - Which operator function gets called first. (Higher precedence wins)
Operator Associativity - What order operator functions get called in. (Left-to-right or Right-to-left)

*/

var varToCallB = 3 + 4 * 5
console.log("4", varToCallB)

var varToCallC = 2, varToCallD = 3, varToCallE = 4
varToCallC = varToCallD = varToCallE
console.log("4.1", varToCallC, varToCallD, varToCallE)

/*

Understanding: 

4. The multiplication operator has a higher precedence than the addition operator. So, it gets called first.
4.1 The associativity of the assignment operator is Right-to-left. So, varToCallE gets assigned to varToCallD first, and then varToCallD gets assigned to varToCallC.

Deeper Dive: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

*/

/*

5. Coercion

Converting a value from one type to another. This happens quite often in JavaScript because it's dynamically typed.

*/

var varToCallF = 1 + '2'
console.log("5", varToCallF)

/*

Understanding: The number 1 is coerced to a string and then concatenated with the string 2. This could be dangerous if you don't know what you're doing. (You could end up with a string when you're expecting a number)

Debugging Tip: Use typeof to check the type of a variable.

*/

/*

6. Comparison Operators

Operators that return a boolean value.

*/

var varToCallG = 3 < 2 < 1
console.log("6", varToCallG)

/*

While it should return false, it returns true. This is because of the associativity of the comparison operator. It's left-to-right. So, 3 < 2 is evaluated first, which returns false. And then false < 1 is evaluated, which returns true. (false is coerced to 0 and true is coerced to 1)

While coercion is useful, it can also be dangerous.

*/

/*

Double Equals vs Triple Equals

Double Equals - Does type coercion
e.g 1 == '1' returns true

This is considered a negative part of the language and is dangerous. So, use Triple Equals instead.

Triple Equals - Does not do type coercion
e.g 1 === '1' returns false


Understanding: Always use Triple Equals. But use Double Equals when you implicitly want to do type coercion.
Deeper Dive: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

*/

/*

7. Existence and Booleans

Converting a value to true or false is particularly useful when you're checking for the existence of something.

*/

var varToCallH

if (!varToCallH && !("") && !(null) && !(undefined) && !(0) && !(NaN)) {
    console.log("7", "It does not exist!")
}

/*

But, 0 is coerced to false. So, you have to be careful.
We can handle that by also checking for if it's 0.

*/

var varToCallI = 0

if (!varToCallI && varToCallI !== 0) {
    console.log("7.1", "It does not exist!")
}

/*

Understanding: This is a safe way to check for the existence of something.

*/

/*

8. Default Values

We can check and give out default values if the parameter does not exist using the || OR operator.

*/

function funToCallJ(varToCallJ) {
    console.log("8", varToCallJ)
    console.log("8.1", 'varToCallJ' + varToCallJ)
}

funToCallJ()

/*

Here, the parameter varToCallJ is undefined. So, it's coerced to a string and concatenated with the string 'varToCallJ'. This is not what we want. But this is not unexpected behaviour, since we know how coercion works.

*/

function funToCallK(varToCallK) {
    varToCallK = varToCallK || 'default'
    console.log("8.2", varToCallK)
    console.log("8.3", 'varToCallK' + varToCallK)
}

funToCallK()
funToCallK('Hey!')

/*

Understanding: This is a safe way to set default values, as the || OR operator returns the first value that can be coerced to true. So, if varToCallK is undefined, it will return 'default'

But entering 0 as a parameter will still return 'default'. So, you have to be careful.

*/

/*

9. Framework Aside - Default Values

The scripts that you include in your HTML file are executed in the order they are written. So, if you have a script that depends on another script, you have to make sure that the script that it depends on is written before it.

For example, I've written html file which adds 2 scripts, lib_one and lib_two, and each of them have a variable varToCallAA.

What happens?

*/

console.log("9", varToCallAA)

/*

Now try changing the lib_two to make sure it checks for default value using the command

window.varToCallAA = window.varToCallAA || 'Library Two'

What happens?

*/

/*

Understanding: In frameworks or libraries, you have to be careful about the order in which you include the scripts, as well as you'll see a lot of default values being set.

*/
