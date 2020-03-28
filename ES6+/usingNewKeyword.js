/*UserCreator is a constructor function that creates an object*/
/*The userCreator object starts in uppercase to show that it is a constructor.*/
function UserCreator(name,age,password,location){
    this.name = name;
    this.age = age;
    this.password = password;
    this.location = location;
}
/*Adds the method increamentAge to the prototype object of the function */
userCreator.prototype.increamentAge = function(){this.age++};
userCreator.prototype.showUser = function(){
    console.log("Name: "+ this.name);
    console.log("Age: "+ this.age);
    console.log("Password: "+ this.password);
    console.log("Location: "+ this.location);
};
let user1 = new UserCreator("Myke",20,"644454Df","Umoja");
user1.increamentAge();
user1.showUser();
