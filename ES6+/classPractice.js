class Workshop{
    constructor(teacher){
        this.teacher = teacher;
    }
    ask(question){
        console.log(this.teacher,question);
    }
}

class AnotherWorkshop extends Workshop{
    speakUp(msg){
        this.ask(msg)
    }
}

var reactJs = new AnotherWorkshop("Myke");
reactJs.speakUp("Hey, What is react?");
var angular = new Workshop("Purity");
angular.ask("Are you sure you know Angular?");