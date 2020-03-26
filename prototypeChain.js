
function accountCreator(name,age,password,location){
    const newUser = Object.create(userMethods);
    newUser.name = name;
    newUser.age = age;
    newUser.password = password;
    newUser.location = location;
    return newUser;
}
let userMethods = {
    increamentAge:function(){this.age+=1;},
    showUser:function(){
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        console.log("Password: "+this.password);
        console.log("Location: "+this.location);}
};
let acc1 = accountCreator("Myke",19,644535,"Nairobi");
acc1.increamentAge();
acc1.showUser();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   