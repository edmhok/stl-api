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
exports.LottoController = void 0;
const common_1 = require("@nestjs/common");
const create_lotto_dto_1 = require("./dto/create-lotto.dto");
const update_lotto_dto_1 = require("./dto/update-lotto.dto");
const lotto_service_1 = require("./lotto.service");
let LottoController = exports.LottoController = class LottoController {
    constructor(lottoService) {
        this.lottoService = lottoService;
    }
    async findAll() {
        return this.lottoService.findAll();
    }
    async findOne(id) {
        return this.lottoService.findOne(+id);
    }
    async findByDate(date) {
        return this.lottoService.findByDate(date);
    }
    create(createLottoDto) {
        return this.lottoService.create(createLottoDto);
    }
    update(id, updateLottoDto) {
        this.lottoService.update(+id, updateLottoDto);
        return 'Updated';
    }
    remove(id) {
        this.lottoService.remove(+id);
        return 'Deleted!';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LottoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LottoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('date/:date'),
    __param(0, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], LottoController.prototype, "findByDate", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lotto_dto_1.CreateLottoDto]),
    __metadata("design:returntype", void 0)
], LottoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lotto_dto_1.UpdateLottoDto]),
    __metadata("design:returntype", void 0)
], LottoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LottoController.prototype, "remove", null);
exports.LottoController = LottoController = __decorate([
    (0, common_1.Controller)('lotto'),
    __metadata("design:paramtypes", [lotto_service_1.LottoService])
], LottoController);
//# sourceMappingURL=lotto.controller.js.map