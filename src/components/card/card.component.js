/**
 * Component CardComponent
 */
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
var core_2 = require("angular2/core");
var CardComponent = (function () {
    function CardComponent() {
    }
    __decorate([
        core_2.Input('path'), 
        __metadata('design:type', String)
    ], CardComponent.prototype, "path", void 0);
    __decorate([
        core_2.Input('content'), 
        __metadata('design:type', String)
    ], CardComponent.prototype, "content", void 0);
    __decorate([
        core_2.Input('description'), 
        __metadata('design:type', String)
    ], CardComponent.prototype, "description", void 0);
    CardComponent = __decorate([
        core_1.Component({
            selector: 'card',
            moduleId: module.id,
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
})();
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map