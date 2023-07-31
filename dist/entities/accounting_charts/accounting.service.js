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
exports.AccountingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const accounting_entity_1 = require("./accounting.entity");
const accounting_repository_1 = require("./accounting.repository");
let AccountingService = exports.AccountingService = class AccountingService {
    constructor(accountingRepository) {
        this.accountingRepository = accountingRepository;
    }
    findAll() {
        return this.accountingRepository.find({});
    }
    async findOne(id) {
        const x = this.accountingRepository.findOne({
            where: {
                id: id,
            },
        });
        return x;
    }
    async create(_accounting) {
        const accounting = new accounting_entity_1.Accounting();
        accounting.account_title = _accounting.account_title;
        accounting.classification = _accounting.classification;
        accounting.group = _accounting.group;
        accounting.type = _accounting.type;
        return this.accountingRepository.save(accounting);
    }
    async update(id, updateAccountingDto) {
        const accounting = await this.findOne(id);
        const { account_title, classification, group, type } = updateAccountingDto;
        accounting.account_title = account_title;
        accounting.classification = classification;
        accounting.group = group;
        accounting.type = type;
        return await accounting.save();
    }
    async remove(id) {
        await this.accountingRepository.delete(id);
    }
};
exports.AccountingService = AccountingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(accounting_entity_1.Accounting)),
    __metadata("design:paramtypes", [accounting_repository_1.AccountingRepository])
], AccountingService);
//# sourceMappingURL=accounting.service.js.map