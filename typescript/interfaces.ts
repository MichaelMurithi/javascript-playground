//Interface implemented by automobile. Defines the properties of automobile
interface AutomobileInterface{
    brand:string,
    speed:number,
    speedMethod:() => void
}

const automobile: AutomobileInterface ={
    brand:"BMW",
    speed:200,
    speedMethod(){
        console.log(`${this.brand} has a speed of ${this.speed}`)
    }
}

automobile.speedMethod()

//Implementing interfaces in function
function car(automobile:AutomobileInterface){
    automobile.speed = 500 //Using a value that is not a number raises an error 
    console.log(`${automobile.brand} has ${automobile.speed}`)
}

car(automobile)


//Implementing interfaces in classes
class Automobile implements AutomobileInterface{
    brand:string
    speed:number

    speedMethod(){
        console.log(`Hi my car is going at ${this.speed}`)
    }
}

const car1 = new Automobile()

interface AutomomobileInterface2 extends AutomobileInterface{
    
}