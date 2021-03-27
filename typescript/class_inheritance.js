/**
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Building = /** @class */ (function () {
    function Building(floors, residents) {
        if (floors === void 0) { floors = 0; }
        if (residents === void 0) { residents = 0; }
        this.floors = floors;
        this.residents = residents;
        this.floors = floors;
        this.residents = residents;
    }
    Building.prototype.moveEscalator = function () {
        console.log("The escalators is moving...");
    };
    Building.prototype.viewBuilding = function () {
        console.log("My building has " + this.floors + " floors and " + this.residents + " residents");
    };
    return Building;
}());
var BuildingWithWindows = /** @class */ (function (_super) {
    __extends(BuildingWithWindows, _super);
    function BuildingWithWindows() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.windows = 12;
        return _this;
    }
    BuildingWithWindows.prototype.aerate = function () {
        console.log("The " + this.windows + " windows of the building are open");
    };
    return BuildingWithWindows;
}(Building));
var building = new Building(10, 10);
building.moveEscalator();
building.viewBuilding();
var modernBuilding = new BuildingWithWindows(5, 6);
modernBuilding.aerate();
