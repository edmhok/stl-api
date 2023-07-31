"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const accounting_entity_1 = require("./accounting.entity");
let AccountingRepository = exports.AccountingRepository = class AccountingRepository extends typeorm_1.Repository {
};
exports.AccountingRepository = AccountingRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(accounting_entity_1.Accounting)
], AccountingRepository);
//# sourceMappingURL=accounting.repository.js.map