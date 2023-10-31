/*

1. Objects and the Dot

Objects are collections of name-value pairs. The values, can be other collections of name-value pairs.

But let's think about how Objects reside in the memory.

- An Object, can have properties and methods.
- It can contain Primitives (Properties), Objects (Properties) and Functions (Method).
- The Object has reference pointers as to where the properties and methods are stored in the memory.

*/

var person = new Object()

person["name"] = "Tom"

console.log("1", person)

/*

You can also access the same property using a variable with bracket notation for the property name.

*/

const propertyName = "name"
console.log("1.1", person[propertyName])

/*

You can also access the same property using the dot notation for the property name.

*/

console.log("1.2", person.name)

person.address = new Object()
person.address.street = "123 Main St."
person.address.city = "New York"

console.log("1.3", person.address.city)
console.log("1.4", person["address"]["city"])

/*

Understanding: The preferred way of accessing properties is using the dot notation, unless you're accessing a property dynamically.

*/

/*

2. Objects and Object Literals

Object Literals are the preferred way of creating Objects.

An Object Literal is a comma-separated list of name-value pairs wrapped in curly braces, initialized as an Object with just curly braces.

*/

var personOne = {
    name: "Harry",
    address: {
        street: "456 Main St.",
        city: "Wuhan"
    }
}

console.log("2", personOne)

/*

We could pass an Object Literal to a function, and access it from there too.

*/

function greet(person) {
    console.log("2.1", "Hi", person.name)
}

greet(personOne)
greet({
    name: "PewDiePie"
})

/*

Understanding: Object Literals are the preferred way of creating Objects. And you can mix and match Object Literals with other Objects and JavaScript will power through.

*/

/*

3. Framework Aside: Faking Namespaces

Namespaces are a container for variables and functions.
But JavaScript doesn't have namespaces.
But, Objects can be used to fake namespaces.

Let's consider th4e following example.

*/

var ching = "Nihao"
var ching = "Chong"

console.log("3", ching)

var greeting = { 
    ching: "Nihao" 
}
var meeting = {
    ching: "Chong"
}

console.log("3.1", greeting.ching)

/*

Understanding: The last variable declaration overwrites the previous one. This is because, the variables are stored in the memory, and the last one overwrites the previous one. But, we're using Objects to fake namespaces, and contain all the variables and functions in a single Object. This helps when we're writing libraries, and we don't want to overwrite variables and functions.

*/

/*

4. JSON and Object Literals

JSON stands for JavaScript Object Notation.
JSON is inspired by Object Literals.

A very common misconception is that JSON is a subset of JavaScript. But, JSON is a subset of the Object Literal Notation of JavaScript.

*/

var objectToCallA = {
    name: "A",
    age: 21
}

console.log("4", objectToCallA)

/*

For a long time, we've been using XML to send data over the internet. But, XML is very verbose, and it's not very easy to parse, and also is data heavy. So, JSON was created as a subset of the Object Literal Notation of JavaScript.

e.g. 

<object>
    <name>A</name>
    <age>21</age>
</object>

same in JSON

{
    "name": "A",
    "age": 21
}

The difference between JSON and object literal notation is that, JSON is always a string with properties quoted as strings, and needs to be converted to an Object Literal Notation.

Note: Keep in mind that, JSON is also valid JavaScript's Object Literal Notation. But, the reverse is not true.

*/

/*

For any Object, to convert it to JSON, we can use the JSON.stringify() method.

*/

var jsonToCallB = JSON.stringify(objectToCallA)

console.log("4.1", jsonToCallB)

/*

To convert a JSON to an Object, we can use the JSON.parse() method.

*/

var objectToCallC = JSON.parse(jsonToCallB)

console.log("4.2", objectToCallC)

/*

Understanding: JSON is a subset of the Object Literal Notation of JavaScript. And, JSON is a string with properties quoted as strings, and needs to be converted to an Object Literal Notation. They are not the same thing. 

*/

/*

5. Functions are Objects

Functions are special types of Objects.

First Class Functions: Everything you can do with other types, you can do with functions. Assign them to variables, pass them around, create them on the fly.

Just like in Objects, we can attach properties and methods to functions - Primitive (Properties), Objects (Properties) and Functions (Method). But with that, it also contains hidden special proeprties. 

One is the name property, which is optional. If you don't give a name to a function, it will be an anonymous function. But, if you give a name to a function, it will be a named function.

The other is the code property, which contains the code of the function. And, the special thing about this property is that, it's invocable. And that's when the function is invoked, and the execution context is created.

*/

function funToCallD() {
    console.log("5", "Hi")
}

funToCallD.callerName = "Niyas"
funToCallD()
console.log("5.1", funToCallD.callerName)

/*

Understanding: Functions are special types of Objects. And, they have special properties like name and code. And, the code property is invocable.

*/
