 class UserAccount{
    constructor (name,age,password,location){
        this.name = name;
        this.age =age;
        this.password = password;
        this.location = location;
    }
    increamentAge(){this.age++;}
    s
    showUser(){
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        console.log("Password: "+this.password);
        console.log("Location: "+this.location);
    }
}
const user1 = new UserAccount("Myke",19,633424,"Umoja");
user1.increamentAge();
user1.showUser();
