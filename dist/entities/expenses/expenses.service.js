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
exports.ExpensesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const expenses_entity_1 = require("./expenses.entity");
const expenses_repository_1 = require("./expenses.repository");
const user_entity_1 = require("../user/user.entity");
const user_repository_1 = require("../user/user.repository");
let ExpensesService = exports.ExpensesService = class ExpensesService {
    constructor(expensesRepository, userRepository) {
        this.expensesRepository = expensesRepository;
        this.userRepository = userRepository;
    }
    async findAll() {
        return this.expensesRepository.find({
            relations: ['user'],
        });
    }
    async findOne(id) {
        const x = this.expensesRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user']
        });
        return x;
    }
    async create(_expenses) {
        const expenses = new expenses_entity_1.Expenses();
        expenses.date = _expenses.date;
        expenses.type = _expenses.type;
        expenses.status = _expenses.status;
        expenses.amount = _expenses.amount;
        if (_expenses.user_ID) {
            const user = await this.userRepository.findOne({
                where: { id: _expenses.user_ID },
            });
            expenses.user = [user];
        }
        return this.expensesRepository.save(expenses);
    }
    async update(id, updateExpensesDto) {
        const expenses = await this.findOne(id);
        const { date, amount, type, status, user_ID } = updateExpensesDto;
        expenses.date = date;
        expenses.type = type;
        expenses.status = status;
        expenses.amount = amount;
        if (user_ID) {
            const user = await this.userRepository.findOne({
                where: { id: user_ID },
            });
            expenses.user = [user];
        }
        return await expenses.save();
    }
    async remove(id) {
        await this.expensesRepository.delete(id);
    }
};
exports.ExpensesService = ExpensesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(expenses_entity_1.Expenses)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [expenses_repository_1.ExpensesRepository,
        user_repository_1.UserRepository])
], ExpensesService);
//# sourceMappingURL=expenses.service.js.map