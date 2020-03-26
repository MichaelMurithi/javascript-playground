let user1 = {
    name:"William",
    score:3,
    increament:function(){user1.score++;}
};
let user2 = Object.create(null);
user2.name = "Myke";
user2.score = 10;
user2.increament = function(){
    user2.score++;
};
user2.increament();
console.log(user2.score);
user1.increament();
console.log(user1.score);