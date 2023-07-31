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
exports.TapadaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tapada_entity_1 = require("./tapada.entity");
const tapada_repository_1 = require("./tapada.repository");
const user_entity_1 = require("../user/user.entity");
const user_repository_1 = require("../user/user.repository");
let TapadaService = exports.TapadaService = class TapadaService {
    constructor(tapadaRepository, userRepository) {
        this.tapadaRepository = tapadaRepository;
        this.userRepository = userRepository;
    }
    findAll() {
        return this.tapadaRepository.find({
            relations: ['user'],
        });
    }
    async findOne(id) {
        const x = this.tapadaRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user']
        });
        return x;
    }
    async create(_tapada) {
        const tapada = new tapada_entity_1.Tapada();
        tapada.date = _tapada.date;
        tapada.runner_name = _tapada.runner_name;
        tapada.amount = _tapada.amount;
        tapada.draw_time = _tapada.draw_time;
        if (_tapada.user_ID) {
            const user = await this.userRepository.findOne({
                where: { id: _tapada.user_ID },
            });
            tapada.user = [user];
        }
        return this.tapadaRepository.save(tapada);
    }
    async update(id, updateTapadaDto) {
        const tapada = await this.findOne(id);
        const { date, runner_name, amount, draw_time, user_ID } = updateTapadaDto;
        tapada.date = date;
        tapada.runner_name = runner_name;
        tapada.amount = amount;
        tapada.draw_time = draw_time;
        if (user_ID) {
            const user = await this.userRepository.findOne({
                where: { id: user_ID },
            });
            tapada.user = [user];
        }
        return await tapada.save();
    }
    async remove(id) {
        await this.tapadaRepository.delete(id);
    }
};
exports.TapadaService = TapadaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tapada_entity_1.Tapada)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [tapada_repository_1.TapadaRepository,
        user_repository_1.UserRepository])
], TapadaService);
//# sourceMappingURL=tapada.service.js.map