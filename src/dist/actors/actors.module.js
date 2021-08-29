"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorsModule = void 0;
const common_1 = require("@nestjs/common");
const actors_service_1 = require("./actors.service");
const actors_controller_1 = require("./actors.controller");
let ActorsModule = class ActorsModule {
};
ActorsModule = __decorate([
    (0, common_1.Module)({
        controllers: [actors_controller_1.ActorsController],
        providers: [actors_service_1.ActorsService]
    })
], ActorsModule);
exports.ActorsModule = ActorsModule;
//# sourceMappingURL=actors.module.js.map