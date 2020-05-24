"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bancho_js_1 = require("bancho.js");
var TextChatBot_1 = __importDefault(require("./TextChatBot"));
var OsueasyClient = /** @class */ (function () {
    function OsueasyClient(username, password) {
        this.banchoClient = new bancho_js_1.BanchoClient({ username: username, password: password });
    }
    OsueasyClient.prototype.createTextChatBot = function (prefix) {
        return new TextChatBot_1.default(this.banchoClient, prefix);
    };
    return OsueasyClient;
}());
exports.default = OsueasyClient;
//# sourceMappingURL=OsueasyClient.js.map