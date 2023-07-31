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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const user_repository_1 = require("./user.repository");
const attendant_entity_1 = require("../attendant/attendant.entity");
const attendant_repository_1 = require("../attendant/attendant.repository");
const branch_entity_1 = require("../branch/branch.entity");
const branch_repository_1 = require("../branch/branch.repository");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, attendantRepository, branchRepository) {
        this.userRepository = userRepository;
        this.attendantRepository = attendantRepository;
        this.branchRepository = branchRepository;
    }
    findAll() {
        return this.userRepository.find({
            relations: ['attendant', 'branch']
        });
    }
    userCredential(query) {
        const x = this.userRepository.findOne({
            where: query,
            relations: ['attendant', 'branch'],
        });
        return x;
    }
    async findOne(id) {
        const x = this.userRepository.findOne({
            where: {
                id: id,
            },
            relations: ['attendant', 'branch']
        });
        return x;
    }
    async create(_user) {
        const user = new user_entity_1.User();
        user.username = _user.username;
        user.password = _user.password;
        user.first_name = _user.first_name;
        user.middle_name = _user.middle_name;
        user.last_name = _user.last_name;
        user.position = _user.position;
        user.daily_rental = _user.daily_rental;
        user.status = _user.status;
        if (_user.branch_ID) {
            const branch = await this.branchRepository.findOne({
                where: { id: _user.branch_ID },
            });
            user.branch = [branch];
        }
        if (_user.attendant_ID) {
            const attendant = await this.attendantRepository.findOne({
                where: { id: _user.attendant_ID },
            });
            user.attendant = [attendant];
        }
        return this.userRepository.save(user);
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        const { username, password, first_name, middle_name, last_name, position, daily_rental, status, branch_ID, attendant_ID } = updateUserDto;
        user.username = username;
        user.password = password;
        user.first_name = first_name;
        user.middle_name = middle_name;
        user.last_name = last_name;
        user.position = position;
        user.daily_rental = daily_rental;
        user.status = status;
        if (branch_ID) {
            const branch = await this.branchRepository.findOne({
                where: { id: branch_ID },
            });
            user.branch = [branch];
        }
        if (attendant_ID) {
            const attendant = await this.attendantRepository.findOne({
                where: { id: attendant_ID },
            });
            user.attendant = [attendant];
        }
        return await user.save();
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(attendant_entity_1.Attendant)),
    __param(2, (0, typeorm_1.InjectRepository)(branch_entity_1.Branch)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        attendant_repository_1.AttendantRepository,
        branch_repository_1.BranchRepository])
], UserService);
//# sourceMappingURL=user.service.js.map