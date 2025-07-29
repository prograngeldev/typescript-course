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
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, color, wheels, gears) {
        this.brand = brand;
        this.color = color;
        this.wheels = wheels;
        this.gears = gears;
        this.on = false;
    }
    Vehicle.prototype.start = function () {
        if (!this.on) {
            this.on = true;
            console.log("El veh\u00EDculo ".concat(this.brand, " ha arrancado."));
        }
        else {
            console.log("El veh\u00EDculo ".concat(this.brand, " ya est\u00E1 en marcha."));
        }
    };
    Vehicle.prototype.stop = function () {
        if (this.on) {
            this.on = false;
            console.log("El veh\u00EDculo ".concat(this.brand, " se ha detenido."));
        }
        else {
            console.log("El veh\u00EDculo ".concat(this.brand, " ya est\u00E1 detenido."));
        }
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle("Honda", "rojo", 4, 6);
vehicle1.start();
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(brand, color, wheels, gears) {
        var _this = _super.call(this, brand, color, wheels, gears) || this;
        _this.wheeling = false;
        return _this;
    }
    Motor.prototype.startWheeling = function () {
        if (!this.wheeling) {
            this.wheeling = true;
            console.log("El veh\u00EDculo ".concat(this.brand, " est\u00E1 haciendo wheeling."));
        }
        else {
            console.log("El veh\u00EDculo ".concat(this.brand, " ya est\u00E1 haciendo wheeling."));
        }
    };
    return Motor;
}(Vehicle));
var motor1 = new Motor("Yamaha", "azul", 2, 5);
motor1.start();
motor1.startWheeling();
