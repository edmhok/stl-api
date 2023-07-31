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
exports.Branch = void 0;
const typeorm_1 = require("typeorm");
const attendant_entity_1 = require("../attendant/attendant.entity");
const user_entity_1 = require("../user/user.entity");
const journal_entity_1 = require("../journal/journal.entity");
let Branch = exports.Branch = class Branch extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Branch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branch.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branch.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branch.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => attendant_entity_1.Attendant, (attendant) => attendant.branch, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Branch.prototype, "attendant", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Branch.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.branch, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Branch.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => journal_entity_1.Journal, (journal) => journal.branch, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Branch.prototype, "journal", void 0);
exports.Branch = Branch = __decorate([
    (0, typeorm_1.Entity)({ name: 'branch' })
], Branch);
//# sourceMappingURL=branch.entity.js.map