var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log(this.brand + " has a speed of " + this.speed);
    }
};
automobile.speedMethod();
