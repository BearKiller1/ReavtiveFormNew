"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatService = void 0;
var core_1 = require("@angular/core");
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.messages = [
            { To: 'gio', from: "dachi", time: '12:43', msg: "rogor xar?" }
        ];
    }
    ChatService.prototype.addMsg = function (msgArray) {
        this.messages.push({ To: msgArray.To, from: msgArray.From, time: msgArray.Time, msg: msgArray.Msg });
        this.messages.push({ To: msgArray.from, from: msgArray.To, time: msgArray.Time, msg: 'Kargia Megobaro' });
    };
    ChatService.prototype.get = function () {
        return this.messages;
    };
    ChatService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
