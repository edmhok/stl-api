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
exports.AttendantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const attendant_entity_1 = require("./attendant.entity");
const attendant_repository_1 = require("./attendant.repository");
const branch_entity_1 = require("../branch/branch.entity");
const branch_repository_1 = require("../branch/branch.repository");
let AttendantService = exports.AttendantService = class AttendantService {
    constructor(attendantRepository, branchRepository) {
        this.attendantRepository = attendantRepository;
        this.branchRepository = branchRepository;
    }
    findAll() {
        return this.attendantRepository.find({
            relations: ['branch'],
        });
    }
    async findOne(id) {
        const x = this.attendantRepository.findOne({
            where: {
                id: id,
            },
            relations: ['branch'],
        });
        return x;
    }
    async create(_attendant) {
        const attendant = new attendant_entity_1.Attendant();
        attendant.name = _attendant.name;
        attendant.username = _attendant.username;
        attendant.password = _attendant.password;
        if (_attendant.branch_ID) {
            const branch = await this.branchRepository.findOne({
                where: { id: _attendant.branch_ID },
            });
            attendant.branch = [branch];
        }
        return this.attendantRepository.save(attendant);
    }
    async update(id, updateAttendantDto) {
        const attendant = await this.findOne(id);
        const { name, username, password, branch_ID } = updateAttendantDto;
        attendant.name = name;
        attendant.username = username;
        attendant.password = password;
        if (branch_ID) {
            const branch = await this.branchRepository.findOne({
                where: { id: branch_ID },
            });
            attendant.branch = [branch];
        }
        return await attendant.save();
    }
    async remove(id) {
        await this.attendantRepository.delete(id);
    }
};
exports.AttendantService = AttendantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(attendant_entity_1.Attendant)),
    __param(1, (0, typeorm_1.InjectRepository)(branch_entity_1.Branch)),
    __metadata("design:paramtypes", [attendant_repository_1.AttendantRepository,
        branch_repository_1.BranchRepository])
], AttendantService);
//# sourceMappingURL=attendant.service.js.map