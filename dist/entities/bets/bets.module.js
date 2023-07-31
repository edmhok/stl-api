"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bets_entity_1 = require("./bets.entity");
const bets_service_1 = require("./bets.service");
const bets_controller_1 = require("./bets.controller");
const bets_repository_1 = require("./bets.repository");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const user_repository_1 = require("../user/user.repository");
const attendant_entity_1 = require("../attendant/attendant.entity");
const attendant_repository_1 = require("../attendant/attendant.repository");
const branch_repository_1 = require("../branch/branch.repository");
const branch_entity_1 = require("../branch/branch.entity");
const expenses_entity_1 = require("../expenses/expenses.entity");
const expenses_repository_1 = require("../expenses/expenses.repository");
const tapada_repository_1 = require("../tapada/tapada.repository");
const tapada_entity_1 = require("../tapada/tapada.entity");
let BetsModule = exports.BetsModule = class BetsModule {
};
exports.BetsModule = BetsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                bets_entity_1.Bets,
                bets_repository_1.BetsRepository,
                user_entity_1.User,
                user_repository_1.UserRepository,
                attendant_entity_1.Attendant,
                attendant_repository_1.AttendantRepository,
                branch_entity_1.Branch,
                branch_repository_1.BranchRepository,
                expenses_entity_1.Expenses,
                expenses_repository_1.ExpensesRepository,
                tapada_entity_1.Tapada,
                tapada_repository_1.TapadaRepository,
            ]),
        ],
        controllers: [bets_controller_1.BetsController],
        providers: [bets_service_1.BetsService, user_service_1.UserService],
    })
], BetsModule);
//# sourceMappingURL=bets.module.js.map