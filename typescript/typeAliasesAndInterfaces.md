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

### Differences between type aliases and interfaces
Type aliases *cannot be re-opened to add new properties* whereas *an interface is always extendable*


## Extending an Interface

```typescript
interface Employee{
    firstName: string;
    lastName:string;
    position:string;
    getDetails: () => string 
}

// The manager interface extends employee() by adding department property and manage method

interface Manager extends Employee {
    department:string;
    manage: () => string
}
```
### Extending a type
- Types are extended via intersections

```typescript
type Student = {
    name:string;
    course:string
}

type boardingStudent = Student & {
    hostel:string
}

````

