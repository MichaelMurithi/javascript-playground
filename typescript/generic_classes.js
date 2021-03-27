var array1 = [1, 33, 23, 45, 65];
var array2 = ['Kenya', 'China', 'Rusia'];
var objectGenericsClass = /** @class */ (function () {
    function objectGenericsClass(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    return objectGenericsClass;
}());
var object1 = new objectGenericsClass("Hello", 1245); //string and number take the place of 'TYPE1' and 'TYPE2'
var object2 = new objectGenericsClass(true, 3242); //boolean and number take the place of 'TYPE1' and 'TYPE2'
