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
exports.AccountingController = void 0;
const common_1 = require("@nestjs/common");
const create_accounting_dto_1 = require("./dto/create-accounting.dto");
const update_accounting_dto_1 = require("./dto/update-accounting.dto");
const accounting_service_1 = require("./accounting.service");
const journal_service_1 = require("../journal/journal.service");
let AccountingController = exports.AccountingController = class AccountingController {
    constructor(accountingService, branchService) {
        this.accountingService = accountingService;
        this.branchService = branchService;
    }
    async findAll() {
        return this.accountingService.findAll();
    }
    async findOne(id) {
        return this.accountingService.findOne(+id);
    }
    create(createAccountingDto) {
        return this.accountingService.create(createAccountingDto);
    }
    update(id, updateAccountingDto) {
        this.accountingService.update(+id, updateAccountingDto);
        return 'Updated';
    }
    remove(id) {
        this.accountingService.remove(+id);
        return 'Deleted!';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccountingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_accounting_dto_1.CreateAccountingDto]),
    __metadata("design:returntype", void 0)
], AccountingController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_accounting_dto_1.UpdateAccountingDto]),
    __metadata("design:returntype", void 0)
], AccountingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountingController.prototype, "remove", null);
exports.AccountingController = AccountingController = __decorate([
    (0, common_1.Controller)('accounting'),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => journal_service_1.JournalService))),
    __metadata("design:paramtypes", [accounting_service_1.AccountingService,
        journal_service_1.JournalService])
], AccountingController);
//# sourceMappingURL=accounting.controller.js.map