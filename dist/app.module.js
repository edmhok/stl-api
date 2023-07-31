"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./authentication/auth.module");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const branch_entity_1 = require("./entities/branch/branch.entity");
const branch_module_1 = require("./entities/branch/branch.module");
const attendant_entity_1 = require("./entities/attendant/attendant.entity");
const attendant_module_1 = require("./entities/attendant/attendant.module");
const user_entity_1 = require("./entities/user/user.entity");
const user_module_1 = require("./entities/user/user.module");
const lotto_entity_1 = require("./entities/lotto_result/lotto.entity");
const lotto_module_1 = require("./entities/lotto_result/lotto.module");
const bets_entity_1 = require("./entities/bets/bets.entity");
const bets_module_1 = require("./entities/bets/bets.module");
const expenses_entity_1 = require("./entities/expenses/expenses.entity");
const expenses_module_1 = require("./entities/expenses/expenses.module");
const tapada_entity_1 = require("./entities/tapada/tapada.entity");
const tapada_module_1 = require("./entities/tapada/tapada.module");
const journal_entity_1 = require("./entities/journal/journal.entity");
const journal_module_1 = require("./entities/journal/journal.module");
const accounting_module_1 = require("./entities/accounting_charts/accounting.module");
const accounting_entity_1 = require("./entities/accounting_charts/accounting.entity");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DATABASE_HOST,
                port: 3306,
                username: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                entities: [
                    branch_entity_1.Branch,
                    attendant_entity_1.Attendant,
                    user_entity_1.User,
                    lotto_entity_1.Lotto,
                    bets_entity_1.Bets,
                    expenses_entity_1.Expenses,
                    journal_entity_1.Journal,
                    tapada_entity_1.Tapada,
                    accounting_entity_1.Accounting
                ],
                synchronize: true,
                autoLoadEntities: true,
            }),
            auth_module_1.AuthModule,
            branch_module_1.BranchModule,
            attendant_module_1.default,
            user_module_1.UserModule,
            lotto_module_1.LottoModule,
            bets_module_1.BetsModule,
            expenses_module_1.ExpensesModule,
            tapada_module_1.TapadaModule,
            journal_module_1.JournalModule,
            accounting_module_1.AccountingModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map