/**
 * public and private are access modifiers
 * public methods are accessible in and out of the class
 * private methods are only accessible within the class definitions
 * protected makes the variable not accessible outside but available when another class is used to extend i.e a child of the previous class
 */
var Tree = /** @class */ (function () {
    function Tree(branch, leaf) {
        this.branch = branch;
        this.leaf = leaf;
        this.branch = branch;
        this.leaf = leaf;
    }
    Tree.prototype.moveLeaf = function () {
        console.log("Leaf is moving");
    };
    return Tree;
}());
var tree1 = new Tree("Bigger branch", "Green leaf");
tree1.moveLeaf();
