"use strict";
var ProductValidator = (function () {
    function ProductValidator() {
    }
    ProductValidator.duplicated = function (control) {
        var q = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'P123') {
                    resolve({ 'duplicated': true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
        return q;
    };
    return ProductValidator;
}());
exports.ProductValidator = ProductValidator;
//# sourceMappingURL=product-validator.js.map