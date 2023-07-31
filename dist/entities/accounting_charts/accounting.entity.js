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
exports.Accounting = void 0;
const typeorm_1 = require("typeorm");
const journal_entity_1 = require("../journal/journal.entity");
let Accounting = exports.Accounting = class Accounting extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Accounting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Accounting.prototype, "account_title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Accounting.prototype, "classification", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Accounting.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Accounting.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => journal_entity_1.Journal, (journal) => journal.accounting, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Accounting.prototype, "journal", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Accounting.prototype, "createdAt", void 0);
exports.Accounting = Accounting = __decorate([
    (0, typeorm_1.Entity)({ name: 'accounting' })
], Accounting);
//# sourceMappingURL=accounting.entity.js.map