"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(Obj) {
        this.Obj = Obj;
        this.sendGroup = new forms_1.FormGroup({
            Msg: new forms_1.FormControl(''),
            From: new forms_1.FormControl('dachi'),
            To: new forms_1.FormControl('gio'),
            Time: new forms_1.FormControl('12:12')
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.messages = this.Obj.get();
        this.from = this.messages[0]['To'];
    };
    DashboardComponent.prototype.send = function () {
        var data = this.sendGroup.value;
        this.Obj.addMsg(data);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
