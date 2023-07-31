"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingModule = void 0;
const common_1 = require("@nestjs/common");
const accounting_controller_1 = require("./accounting.controller");
const accounting_service_1 = require("./accounting.service");
const typeorm_1 = require("@nestjs/typeorm");
const accounting_entity_1 = require("./accounting.entity");
const accounting_repository_1 = require("./accounting.repository");
const journal_entity_1 = require("../journal/journal.entity");
const journal_repository_1 = require("../journal/journal.repository");
const journal_service_1 = require("../journal/journal.service");
const branch_entity_1 = require("../branch/branch.entity");
const branch_repository_1 = require("../branch/branch.repository");
let AccountingModule = exports.AccountingModule = class AccountingModule {
};
exports.AccountingModule = AccountingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                accounting_entity_1.Accounting,
                accounting_repository_1.AccountingRepository,
                journal_entity_1.Journal,
                journal_repository_1.JournalRepository,
                branch_entity_1.Branch,
                branch_repository_1.BranchRepository,
            ]),
        ],
        controllers: [accounting_controller_1.AccountingController],
        providers: [accounting_service_1.AccountingService, journal_service_1.JournalService]
    })
], AccountingModule);
//# sourceMappingURL=accounting.module.js.map