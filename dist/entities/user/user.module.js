"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const user_repository_1 = require("./user.repository");
const attendant_entity_1 = require("../attendant/attendant.entity");
const attendant_repository_1 = require("../attendant/attendant.repository");
const attendant_service_1 = require("../attendant/attendant.service");
const branch_entity_1 = require("../branch/branch.entity");
const branch_repository_1 = require("../branch/branch.repository");
const branch_service_1 = require("../branch/branch.service");
const bets_entity_1 = require("../bets/bets.entity");
const bets_repository_1 = require("../bets/bets.repository");
const bets_service_1 = require("../bets/bets.service");
const expenses_entity_1 = require("../expenses/expenses.entity");
const expenses_repository_1 = require("../expenses/expenses.repository");
const expenses_service_1 = require("../expenses/expenses.service");
const tapada_repository_1 = require("../tapada/tapada.repository");
const tapada_entity_1 = require("../tapada/tapada.entity");
const tapada_service_1 = require("../tapada/tapada.service");
let UserModule = exports.UserModule = class UserModule {
};
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                user_repository_1.UserRepository,
                attendant_entity_1.Attendant,
                attendant_repository_1.AttendantRepository,
                branch_entity_1.Branch,
                branch_repository_1.BranchRepository,
                bets_entity_1.Bets,
                bets_repository_1.BetsRepository,
                expenses_entity_1.Expenses,
                expenses_repository_1.ExpensesRepository,
                tapada_entity_1.Tapada,
                tapada_repository_1.TapadaRepository
            ]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, branch_service_1.BranchService, attendant_service_1.AttendantService, bets_service_1.BetsService, expenses_service_1.ExpensesService, tapada_service_1.TapadaService,],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map