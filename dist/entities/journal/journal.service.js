"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const journal_entity_1 = require("./journal.entity");
const journal_repository_1 = require("./journal.repository");
const branch_entity_1 = require("../branch/branch.entity");
const branch_repository_1 = require("../branch/branch.repository");
const accounting_entity_1 = require("../accounting_charts/accounting.entity");
const accounting_repository_1 = require("../accounting_charts/accounting.repository");
let JournalService = exports.JournalService = class JournalService {
    constructor(journalRepository, branchRepository, accountingRepository) {
        this.journalRepository = journalRepository;
        this.branchRepository = branchRepository;
        this.accountingRepository = accountingRepository;
    }
    findAll() {
        return this.journalRepository.find({
            relations: ['branch', 'accounting']
        });
    }
    async findOne(id) {
        const x = this.journalRepository.findOne({
            where: {
                id: id,
            },
            relations: ['branch', 'accounting']
        });
        return x;
    }
    async create(_journal) {
        const journal = new journal_entity_1.Journal();
        journal.date = _journal.date;
        journal.description = _journal.description;
        journal.type = _journal.type;
        journal.amount = _journal.amount;
        if (_journal.branch_ID) {
            const branch = await this.branchRepository.findOne({
                where: { id: _journal.branch_ID },
            });
            journal.branch = [branch];
        }
        if (_journal.accounting_ID) {
            const accounting = await this.accountingRepository.findOne({
                where: { id: _journal.accounting_ID },
            });
            journal.accounting = [accounting];
        }
        return this.journalRepository.save(journal);
    }
    async update(id, updateJournalDto) {
        const journal = await this.findOne(id);
        const { date, branch_ID, description, type, accounting_ID, amount } = updateJournalDto;
        journal.date = date;
        journal.description = description;
        journal.type = type;
        journal.amount = amount;
        if (branch_ID) {
            const branch = await this.branchRepository.findOne({
                where: { id: branch_ID },
            });
            journal.branch = [branch];
        }
        if (accounting_ID) {
            const accounting = await this.accountingRepository.findOne({
                where: { id: accounting_ID },
            });
            journal.accounting = [accounting];
        }
        return await journal.save();
    }
    async remove(id) {
        await this.journalRepository.delete(id);
    }
};
exports.JournalService = JournalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(journal_entity_1.Journal)),
    __param(1, (0, typeorm_1.InjectRepository)(branch_entity_1.Branch)),
    __param(2, (0, typeorm_1.InjectRepository)(accounting_entity_1.Accounting)),
    __metadata("design:paramtypes", [journal_repository_1.JournalRepository,
        branch_repository_1.BranchRepository,
        accounting_repository_1.AccountingRepository])
], JournalService);
//# sourceMappingURL=journal.service.js.map