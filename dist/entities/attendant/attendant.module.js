"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const attendant_service_1 = require("./attendant.service");
const attendant_controller_1 = require("./attendant.controller");
const attendant_repository_1 = require("./attendant.repository");
const attendant_entity_1 = require("./attendant.entity");
const branch_repository_1 = require("../branch/branch.repository");
const branch_service_1 = require("../branch/branch.service");
const branch_entity_1 = require("../branch/branch.entity");
const user_service_1 = require("../user/user.service");
const user_repository_1 = require("../user/user.repository");
const user_entity_1 = require("../user/user.entity");
const bets_entity_1 = require("../bets/bets.entity");
const bets_repository_1 = require("../bets/bets.repository");
const expenses_repository_1 = require("../expenses/expenses.repository");
const expenses_entity_1 = require("../expenses/expenses.entity");
const tapada_entity_1 = require("../tapada/tapada.entity");
const tapada_repository_1 = require("../tapada/tapada.repository");
const journal_entity_1 = require("../journal/journal.entity");
const journal_repository_1 = require("../journal/journal.repository");
let AttendantModule = class AttendantModule {
};
AttendantModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                attendant_entity_1.Attendant,
                attendant_repository_1.AttendantRepository,
                branch_repository_1.BranchRepository,
                branch_entity_1.Branch,
                user_entity_1.User,
                user_repository_1.UserRepository,
                bets_entity_1.Bets,
                bets_repository_1.BetsRepository,
                expenses_entity_1.Expenses,
                expenses_repository_1.ExpensesRepository,
                tapada_entity_1.Tapada,
                tapada_repository_1.TapadaRepository,
                journal_entity_1.Journal,
                journal_repository_1.JournalRepository
            ]),
        ],
        controllers: [attendant_controller_1.AttendantController],
        providers: [attendant_service_1.AttendantService, branch_service_1.BranchService, user_service_1.UserService],
    })
], AttendantModule);
exports.default = AttendantModule;
//# sourceMappingURL=attendant.module.js.map