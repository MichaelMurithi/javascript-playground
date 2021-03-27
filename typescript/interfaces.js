//Interface implemented by automobile. Defines the properties of automobile
var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log(this.brand + " has a speed of " + this.speed);
    }
};
automobile.speedMethod();
//Implementing interfaces in function
function car(automobile) {
    automobile.speed = 500; //Using a value that is not a number raises an error 
    console.log(automobile.brand + " has " + automobile.speed);
}
car(automobile);
//Implementing interfaces in classes
var Automobile = /** @class */ (function () {
    function Automobile() {
    }
    Automobile.prototype.speedMethod = function () {
        console.log("Hi my car is going at " + this.speed);
    };
    return Automobile;
}());
var car1 = new Automobile();
