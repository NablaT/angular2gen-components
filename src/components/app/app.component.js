var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var header_component_1 = require('../header/header.component');
var about_component_1 = require('../about/about.component');
var home_component_1 = require('../home/home.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            moduleId: module.id,
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                header_component_1.HeaderComponent
            ]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Home', component: home_component_1.HomeComponent },
            { path: '/about', name: 'About', component: about_component_1.AboutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map