"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const branch_service_1 = require("./branch.service");
const branch_controller_1 = require("./branch.controller");
const branch_repository_1 = require("./branch.repository");
const branch_entity_1 = require("./branch.entity");
const attendant_entity_1 = require("../attendant/attendant.entity");
const attendant_service_1 = require("../attendant/attendant.service");
const attendant_repository_1 = require("../attendant/attendant.repository");
const user_service_1 = require("../user/user.service");
const user_repository_1 = require("../user/user.repository");
const user_entity_1 = require("../user/user.entity");
const bets_repository_1 = require("../bets/bets.repository");
const bets_entity_1 = require("../bets/bets.entity");
const expenses_repository_1 = require("../expenses/expenses.repository");
const expenses_entity_1 = require("../expenses/expenses.entity");
const tapada_entity_1 = require("../tapada/tapada.entity");
const tapada_repository_1 = require("../tapada/tapada.repository");
const journal_service_1 = require("../journal/journal.service");
const journal_entity_1 = require("../journal/journal.entity");
const journal_repository_1 = require("../journal/journal.repository");
const accounting_entity_1 = require("../accounting_charts/accounting.entity");
const accounting_repository_1 = require("../accounting_charts/accounting.repository");
const accounting_service_1 = require("../accounting_charts/accounting.service");
let BranchModule = exports.BranchModule = class BranchModule {
};
exports.BranchModule = BranchModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                branch_entity_1.Branch,
                branch_repository_1.BranchRepository,
                attendant_entity_1.Attendant,
                attendant_repository_1.AttendantRepository,
                user_entity_1.User,
                user_repository_1.UserRepository,
                bets_entity_1.Bets,
                bets_repository_1.BetsRepository,
                expenses_entity_1.Expenses,
                expenses_repository_1.ExpensesRepository,
                tapada_entity_1.Tapada,
                tapada_repository_1.TapadaRepository,
                journal_entity_1.Journal,
                journal_repository_1.JournalRepository,
                accounting_entity_1.Accounting,
                accounting_repository_1.AccountingRepository
            ]),
        ],
        controllers: [branch_controller_1.BranchController],
        providers: [branch_service_1.BranchService, attendant_service_1.AttendantService, user_service_1.UserService, journal_service_1.JournalService, accounting_service_1.AccountingService]
    })
], BranchModule);
//# sourceMappingURL=branch.module.js.map