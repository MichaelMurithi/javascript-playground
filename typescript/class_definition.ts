/**
 * public and private are access modifiers
 * public methods are accessible in and out of the class
 * private methods are only accessible within the class definitions
 * protected makes the variable not accessible outside but available when another class is used to extend i.e a child of the previous class
 */
class Tree{
    
    constructor(public branch: string,private leaf:string){
        this.branch = branch
        this.leaf = leaf
    }

    public moveLeaf(){
        console.log("Leaf is moving")
    }

}

let tree1 = new Tree("Bigger branch", "Green leaf");
tree1.moveLeaf();