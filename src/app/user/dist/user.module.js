"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var user_routing_module_1 = require("./user-routing.module");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var forms_1 = require("@angular/forms");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent, register_component_1.RegisterComponent, dashboard_component_1.DashboardComponent],
            imports: [
                common_1.CommonModule,
                user_routing_module_1.UserRoutingModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
