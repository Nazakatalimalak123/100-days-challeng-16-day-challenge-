var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var priceset1 = [1200, 1500, 1800];
var priceset2 = [1100, 1400, 1700];
var combinedprices = __spreadArray(__spreadArray([], priceset1, true), priceset2, true).sort(function (a, b) { return a - b; });
console.log(combinedprices);
