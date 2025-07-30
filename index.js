var MathModule;
(function (MathModule) {
    var Calculator = /** @class */ (function () {
        function Calculator() {
        }
        Calculator.prototype.multiply = function (a, b) {
            return a * b;
        };
        return Calculator;
    }());
    MathModule.Calculator = Calculator;
})(MathModule || (MathModule = {}));
/// <reference path="./math.ts" />
var calculator = new MathModule.Calculator();
var result = calculator.multiply(3, 4);
console.log("The result of multiplication is: ".concat(result));
