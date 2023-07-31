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
exports.JournalController = void 0;
const common_1 = require("@nestjs/common");
const create_journal_dto_1 = require("./dto/create-journal.dto");
const update_journal_dto_1 = require("./dto/update-journal.dto");
const journal_service_1 = require("./journal.service");
const branch_service_1 = require("../branch/branch.service");
const accounting_service_1 = require("../accounting_charts/accounting.service");
let JournalController = exports.JournalController = class JournalController {
    constructor(journalService, branchService, accountingService) {
        this.journalService = journalService;
        this.branchService = branchService;
        this.accountingService = accountingService;
    }
    async findAll() {
        return this.journalService.findAll();
    }
    async findOne(id) {
        return this.journalService.findOne(+id);
    }
    create(createjournalDto) {
        return this.journalService.create(createjournalDto);
    }
    update(id, updateJournalDto) {
        this.journalService.update(+id, updateJournalDto);
        return 'Updated';
    }
    remove(id) {
        this.journalService.remove(+id);
        return 'Deleted!';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JournalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JournalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_journal_dto_1.CreateJournalDto]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_journal_dto_1.UpdateJournalDto]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "remove", null);
exports.JournalController = JournalController = __decorate([
    (0, common_1.Controller)('journal'),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => branch_service_1.BranchService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => accounting_service_1.AccountingService))),
    __metadata("design:paramtypes", [journal_service_1.JournalService,
        branch_service_1.BranchService,
        accounting_service_1.AccountingService])
], JournalController);
//# sourceMappingURL=journal.controller.js.map