# Everyday Types in Typescript

## **Primitives**
The primitive types in typescript are:

* **string** represents string values like 'hello world'
* **number** e.g 42
* **boolean** for true/false values

## **Arrays**
Arrays can be defined as:
 * `number[]` defines an array of numbers
 * `string[]` defines an array of strings
 * `Array[number]` and `Array[string]` can also be used to represent the same thing.


## **any**
Useful when:
-  You don't wan't a particular value to cause a typechecking error.
- It is useful when you don't wan't to write out a long type just to convince TypeScript that a particluar line of code is okay.

## Functions

### Parameter Type annotation
It goes after the parameter name. A type annotation is added after each parameter to declare what type it is

``` typescript
function greet(name: string){
    console.log(" Hello " + name + "!!")
}
```
- The argument to that function is checked in this case

### Return Type annotations
They appear after the parameter list:

``` typescript
function getFavouriteName(): number{
    return 18
}
```
- Not ussually needed because typescript infers the function's return type based on its return statements.
- Used mostly for documentation purposes to prevent accidental changes.

### Contextual typing for functions
- Parameters to a function are automatically given types where typescript can determine how it's going to be called.

``` typescript
studentNames = ["James", "John", "Carol"]

studentNames.forEach(function(studentName){
    console.log(studentName.tolowerCase())
})
```
Typescript raises an error because ~~tolowerCase~~ does not exist on *string* type but instead **toUpperCase**'

- Also applies to arrow functions

## Object Types
- Refers to any javascript value with properties
- To define an object type, we list all its properties and their types.

```typescript
function printCordinate(pt:{x:number,y:number}){
    console.log("The coordinate's x value is "+ pt.x)
    console.log("The coordinate's y value is "+ pt.y)
}
```
- `,` or `;` can be used to separate the properties (its optional)
- To specify that a property is optionall, a `?` is added after the property name:

```typescript
function printName(obj:{ firstName: string; lastName?: string}){
    //...In this case the lastName is optional
}
```
## Union Types
- It is a type formed from two or other types representing values that may be any of those types.
- The two other types are reffered to as union members

```typescript
function printId(id: number | string){
    console.log("Your ID is: "+ id)
}
```
- Typescript will only allow you to do things with union if that thing is valid for every member of the union.

### Narrowing a union with code
In this case, typescript can deduce a more specific type for a value based on the structure of the code:

#### ** Narrowing primitives examle**
``` typescript
function printId(id: number | string){
    if (typeof id === 'string'){
        console.log(id.toUpperCase()) //In this case, string operations are applicable
    } else {
        //Number operations are applicable
        console.log(id)
    }
}

```

#### **Narrowing with arrays**

```typescript
function welcomePeople(x:string[] | string){
    if (Array.isArray(x)){
        //Here 'x' is an array
        console.log("Hello, "+ x.join(" and "))
    } else {
        //When x is is one person
        console.log("Hello, "+ x)
    }
}
```
#### **Where union members have a property in common**

``` typescript
function getFirstThree(value: number[] | string){
    return value.slice(0,3)
}
```

## Type aliases
- Useful when we want to use the same type more than once and refer to it by a single name
- The `type` keyword is used 

``` typescript
example:

type Person = {
    firstName: string;
    lastName;
    age: number;
    isEmployed:boolean
}

function employ(employee:Person){
    employee.isEmployed == true
    console.log(`${firstName} ${lastName} of age ${age} has been employeed`)
}
```
* Aliases can be used to name union types

``` typescript
type employeeID = number | string
```
**Note**
- Aliases cannot be used to create different/distinct version of the same type

## Interfaces
It is another way to name an object type

``` typescript
interface Employee{
    firstName: string;
    lastName:string;
    position:string;
    getDetails: () => string 
}

const manager: Employee = { 
    //The manager in this case implements Employee interface
    firstName:"Duncan",
    lastName:"Wekulo",
    position:"Manager",
    getDetails:function(){
        return this.position + " "+ this.firstName +" "+ this.lastName
    } 
}

function hire(person: Employee){
    console.log(person.getDetails(), " has been hired")
}

hire(manager) // Manager Duncan Wekulo has been hired
```
- Typescript only cares that the value passed has the expected properties hence it is reffered to as a *structurely typed type system*.