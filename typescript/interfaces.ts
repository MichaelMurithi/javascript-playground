interface Employee{
    firstName: string;
    lastName:string;
    position:string;
    getDetails: () => string 
}

const manager: Employee = { //The manager in this case implements Employee interface
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

