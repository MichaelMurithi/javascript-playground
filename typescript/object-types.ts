let vehicle: {brand:string, wheels:number, } = {
    brand: "Range rover",
    wheels:10
}

//vehicle.brand = 12 --raises an error since the vehicle brand is expected to be of type 'string'
//vehicle.wheels = "ten" --raises an error since wheels is specified to be a number
