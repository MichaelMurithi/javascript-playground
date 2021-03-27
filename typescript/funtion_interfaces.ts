import {AutomobileInterface} from './interfaces'

function car(automobile:AutomobileInterface){
    automobile.speed = 500
    console.log(`${automobile.brand} has ${automobile.speed}`)
}

const automobile: AutomobileInterface ={
    brand:"BMW",
    speed:200,
    speedMethod(){
        console.log(`${this.brand} has a speed of ${this.speed}`)
    }
}

car(automobile)
