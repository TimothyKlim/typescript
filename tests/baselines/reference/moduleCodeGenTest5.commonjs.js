exports.x = 0;
var y = 0;
function f1() {
}
exports.f1 = f1;
function f2() {
}
var C1 = (function () {
    function C1() {
        this.p1 = 0;
    }
    C1.prototype.p2 = function () {
    };
    return C1;
})();
exports.C1 = C1;
var C2 = (function () {
    function C2() {
        this.p1 = 0;
    }
    C2.prototype.p2 = function () {
    };
    return C2;
})();
(function (E1) {
    E1._map = [];
    E1.A = 0;
})(exports.E1 || (exports.E1 = {}));

var u = E1.A;
var E2;
(function (E2) {
    E2._map = [];
    E2.B = 0;
})(E2 || (E2 = {}));

var v = E2.B;
