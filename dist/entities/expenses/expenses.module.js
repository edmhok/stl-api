"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesModule = void 0;
const common_1 = require("@nestjs/common");
const expenses_controller_1 = require("./expenses.controller");
const expenses_service_1 = require("./expenses.service");
const typeorm_1 = require("@nestjs/typeorm");
const expenses_entity_1 = require("./expenses.entity");
const expenses_repository_1 = require("./expenses.repository");
const user_repository_1 = require("../user/user.repository");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const attendant_entity_1 = require("../attendant/attendant.entity");
const attendant_repository_1 = require("../attendant/attendant.repository");
const branch_entity_1 = require("../branch/branch.entity");
const branch_repository_1 = require("../branch/branch.repository");
const bets_entity_1 = require("../bets/bets.entity");
const bets_repository_1 = require("../bets/bets.repository");
const tapada_repository_1 = require("../tapada/tapada.repository");
const tapada_entity_1 = require("../tapada/tapada.entity");
let ExpensesModule = exports.ExpensesModule = class ExpensesModule {
};
exports.ExpensesModule = ExpensesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                expenses_entity_1.Expenses,
                expenses_repository_1.ExpensesRepository,
                user_entity_1.User,
                user_repository_1.UserRepository,
                attendant_entity_1.Attendant,
                attendant_repository_1.AttendantRepository,
                branch_entity_1.Branch,
                branch_repository_1.BranchRepository,
                bets_entity_1.Bets,
                bets_repository_1.BetsRepository,
                tapada_entity_1.Tapada,
                tapada_repository_1.TapadaRepository
            ]),
        ],
        controllers: [expenses_controller_1.ExpensesController],
        providers: [expenses_service_1.ExpensesService, user_service_1.UserService]
    })
], ExpensesModule);
//# sourceMappingURL=expenses.module.js.map