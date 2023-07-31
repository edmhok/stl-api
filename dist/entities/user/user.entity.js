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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const attendant_entity_1 = require("../attendant/attendant.entity");
const branch_entity_1 = require("../branch/branch.entity");
const bets_entity_1 = require("../bets/bets.entity");
const expenses_entity_1 = require("../expenses/expenses.entity");
const tapada_entity_1 = require("../tapada/tapada.entity");
let User = exports.User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => branch_entity_1.Branch, (branch) => branch.user, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => attendant_entity_1.Attendant, (attendant) => attendant.user, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "attendant", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => bets_entity_1.Bets, (bets) => bets.user, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], User.prototype, "bets", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => expenses_entity_1.Expenses, (expenses) => expenses.user, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], User.prototype, "expenses", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tapada_entity_1.Tapada, (tapada) => tapada.user, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], User.prototype, "tapada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "middle_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "daily_rental", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'user' })
], User);
//# sourceMappingURL=user.entity.js.map