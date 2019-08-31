"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
var app = new App().app, PORT = 3000;
app.listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
});
