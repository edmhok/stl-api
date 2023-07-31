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
exports.BranchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const branch_entity_1 = require("./branch.entity");
const branch_repository_1 = require("./branch.repository");
const attendant_entity_1 = require("../attendant/attendant.entity");
const attendant_repository_1 = require("../attendant/attendant.repository");
let BranchService = exports.BranchService = class BranchService {
    constructor(branchRepository, attendantRepository) {
        this.branchRepository = branchRepository;
        this.attendantRepository = attendantRepository;
    }
    findAll() {
        return this.branchRepository.find({
            relations: ['attendant'],
        });
    }
    async findOne(id) {
        const x = this.branchRepository.findOne({
            where: {
                id: id,
            },
            relations: ['attendant'],
        });
        return x;
    }
    async create(_branch) {
        const branch = new branch_entity_1.Branch();
        branch.code = _branch.code;
        branch.name = _branch.name;
        branch.address = _branch.address;
        if (_branch.attendant_ID) {
            const attendant = await this.attendantRepository.findOne({
                where: { id: _branch.attendant_ID },
            });
            branch.attendant = [attendant];
        }
        return this.branchRepository.save(branch);
    }
    async update(id, updateBranchDto) {
        const branch = await this.findOne(id);
        const { code, name, address, attendant_ID } = updateBranchDto;
        branch.code = code;
        branch.name = name;
        branch.address = address;
        if (attendant_ID) {
            const attendant = await this.attendantRepository.findOne({
                where: { id: attendant_ID },
            });
            branch.attendant = [attendant];
        }
        return await branch.save();
    }
    async remove(id) {
        await this.branchRepository.delete(id);
    }
};
exports.BranchService = BranchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(branch_entity_1.Branch)),
    __param(1, (0, typeorm_1.InjectRepository)(attendant_entity_1.Attendant)),
    __metadata("design:paramtypes", [branch_repository_1.BranchRepository,
        attendant_repository_1.AttendantRepository])
], BranchService);
//# sourceMappingURL=branch.service.js.map