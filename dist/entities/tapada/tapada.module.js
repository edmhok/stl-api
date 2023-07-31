"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TapadaModule = void 0;
const common_1 = require("@nestjs/common");
const tapada_controller_1 = require("./tapada.controller");
const tapada_service_1 = require("./tapada.service");
const typeorm_1 = require("@nestjs/typeorm");
const tapada_entity_1 = require("./tapada.entity");
const tapada_repository_1 = require("./tapada.repository");
const user_repository_1 = require("../user/user.repository");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const attendant_entity_1 = require("../attendant/attendant.entity");
const attendant_repository_1 = require("../attendant/attendant.repository");
const branch_entity_1 = require("../branch/branch.entity");
const branch_repository_1 = require("../branch/branch.repository");
const bets_entity_1 = require("../bets/bets.entity");
const bets_repository_1 = require("../bets/bets.repository");
let TapadaModule = exports.TapadaModule = class TapadaModule {
};
exports.TapadaModule = TapadaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                tapada_entity_1.Tapada,
                tapada_repository_1.TapadaRepository,
                user_entity_1.User,
                user_repository_1.UserRepository,
                attendant_entity_1.Attendant,
                attendant_repository_1.AttendantRepository,
                branch_entity_1.Branch,
                branch_repository_1.BranchRepository,
                bets_entity_1.Bets,
                bets_repository_1.BetsRepository,
            ]),
        ],
        controllers: [tapada_controller_1.TapadaController],
        providers: [tapada_service_1.TapadaService, user_service_1.UserService]
    })
], TapadaModule);
//# sourceMappingURL=tapada.module.js.map