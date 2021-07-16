"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var IndexController_1 = require("./controllers/IndexController");
var ResizeController_1 = require("./controllers/ResizeController");
var _routes = [
    ['/', IndexController_1.IndexController],
    ['/', ResizeController_1.ResizeController]
];
var routes = function (app) {
    _routes.forEach(function (route) {
        var url = route[0], controller = route[1];
        app.use(url, controller);
    });
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map