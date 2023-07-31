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
exports.AttendantController = void 0;
const common_1 = require("@nestjs/common");
const attendant_service_1 = require("./attendant.service");
const update_attendant_dto_1 = require("./dto/update-attendant.dto");
const create_attendant_dto_1 = require("./dto/create-attendant.dto");
const branch_service_1 = require("../branch/branch.service");
let AttendantController = exports.AttendantController = class AttendantController {
    constructor(attendantService, branchService) {
        this.attendantService = attendantService;
        this.branchService = branchService;
    }
    async fillAll() {
        return this.attendantService.findAll();
    }
    async findOne(id) {
        return this.attendantService.findOne(+id);
    }
    create(createAttendantDto) {
        return this.attendantService.create(createAttendantDto);
    }
    update(id, updateAttendantDto) {
        this.attendantService.update(+id, updateAttendantDto);
        return 'Updated';
    }
    remove(id) {
        this.attendantService.remove(+id);
        return 'Deleted!';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttendantController.prototype, "fillAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AttendantController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attendant_dto_1.CreateAttendantDto]),
    __metadata("design:returntype", void 0)
], AttendantController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_attendant_dto_1.UpdateAttendantDto]),
    __metadata("design:returntype", void 0)
], AttendantController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendantController.prototype, "remove", null);
exports.AttendantController = AttendantController = __decorate([
    (0, common_1.Controller)('attendant'),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => branch_service_1.BranchService))),
    __metadata("design:paramtypes", [attendant_service_1.AttendantService,
        branch_service_1.BranchService])
], AttendantController);
//# sourceMappingURL=attendant.controller.js.map