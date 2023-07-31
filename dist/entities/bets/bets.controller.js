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
exports.BetsController = void 0;
const common_1 = require("@nestjs/common");
const create_bets_dto_1 = require("./dto/create-bets.dto");
const update_bets_dto_1 = require("./dto/update-bets.dto");
const bets_service_1 = require("./bets.service");
const user_service_1 = require("../user/user.service");
let BetsController = exports.BetsController = class BetsController {
    constructor(betsService, userService) {
        this.betsService = betsService;
        this.userService = userService;
    }
    async findAll() {
        return this.betsService.findAll();
    }
    async findOne(id) {
        return this.betsService.findOne(+id);
    }
    async findByDate(date) {
        return this.betsService.findByDate(date);
    }
    create(createBetsDto) {
        return this.betsService.create(createBetsDto);
    }
    update(id, updateBetsDto) {
        this.betsService.update(+id, updateBetsDto);
        return 'Updated';
    }
    remove(id) {
        this.betsService.remove(+id);
        return 'Deleted!';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BetsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('date/:date'),
    __param(0, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], BetsController.prototype, "findByDate", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bets_dto_1.CreateBetsDto]),
    __metadata("design:returntype", void 0)
], BetsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_bets_dto_1.UpdateBetsDto]),
    __metadata("design:returntype", void 0)
], BetsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BetsController.prototype, "remove", null);
exports.BetsController = BetsController = __decorate([
    (0, common_1.Controller)('bets'),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [bets_service_1.BetsService,
        user_service_1.UserService])
], BetsController);
//# sourceMappingURL=bets.controller.js.map