"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const journal_controller_1 = require("./journal.controller");
const journal_service_1 = require("./journal.service");
const journal_entity_1 = require("./journal.entity");
const journal_repository_1 = require("./journal.repository");
const branch_service_1 = require("../branch/branch.service");
const accounting_service_1 = require("../accounting_charts/accounting.service");
const branch_entity_1 = require("../branch/branch.entity");
const branch_repository_1 = require("../branch/branch.repository");
const accounting_repository_1 = require("../accounting_charts/accounting.repository");
const accounting_entity_1 = require("../accounting_charts/accounting.entity");
const attendant_entity_1 = require("../attendant/attendant.entity");
const attendant_repository_1 = require("../attendant/attendant.repository");
let JournalModule = exports.JournalModule = class JournalModule {
};
exports.JournalModule = JournalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                journal_entity_1.Journal,
                journal_repository_1.JournalRepository,
                branch_entity_1.Branch,
                branch_repository_1.BranchRepository,
                accounting_entity_1.Accounting,
                accounting_repository_1.AccountingRepository,
                attendant_entity_1.Attendant,
                attendant_repository_1.AttendantRepository
            ]),
        ],
        controllers: [journal_controller_1.JournalController],
        providers: [journal_service_1.JournalService, branch_service_1.BranchService, accounting_service_1.AccountingService]
    })
], JournalModule);
//# sourceMappingURL=journal.module.js.map