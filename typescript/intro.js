var Example = /** @class */ (function () {
    function Example() {
        this.house = null;
    }
    Example.prototype.run = function () {
        console.log("Hello");
    };
    return Example;
}());
var tsExample = new Example();
tsExample.run();
