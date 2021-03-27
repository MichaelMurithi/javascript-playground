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