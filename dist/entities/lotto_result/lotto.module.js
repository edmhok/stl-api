"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LottoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lotto_service_1 = require("./lotto.service");
const lotto_controller_1 = require("./lotto.controller");
const lotto_repository_1 = require("./lotto.repository");
const lotto_entity_1 = require("./lotto.entity");
let LottoModule = exports.LottoModule = class LottoModule {
};
exports.LottoModule = LottoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                lotto_entity_1.Lotto, lotto_repository_1.LottoRepository
            ])],
        controllers: [lotto_controller_1.LottoController],
        providers: [lotto_service_1.LottoService],
    })
], LottoModule);
//# sourceMappingURL=lotto.module.js.map