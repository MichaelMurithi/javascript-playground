function accountCreator(name, password, age, location){
    let newUser = {};
    newUser.age = age;
    newUser.name = name;
    newUser.password = password;
    newUser.location = location;
    newUser.increamentAge = newUser.age++;
    newUser.showUser =function(){
        console.log("Name: "+newUser.name);
        console.log("Age: "+newUser.age);
        console.log("Password: "+newUser.password);
        console.log("Location: "+newUser.location);
    };
    return newUser;
}
let acc1 = accountCreator("Myke","6334243",19,"Nairobi");
const acc2= accountCreator("Cate","4343533",20,"Juja");
acc1.showUser();
/*
Problem of this approach:
- It ceates the same copy of code everytime a new user is created
- It leads to memory spillage
*/