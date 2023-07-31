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
exports.BetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bets_entity_1 = require("./bets.entity");
const bets_repository_1 = require("./bets.repository");
const user_entity_1 = require("../user/user.entity");
const user_repository_1 = require("../user/user.repository");
let BetsService = exports.BetsService = class BetsService {
    constructor(betsRepository, userRepository) {
        this.betsRepository = betsRepository;
        this.userRepository = userRepository;
    }
    findAll() {
        return this.betsRepository.find({
            relations: ['user'],
        });
    }
    async findOne(id) {
        const x = this.betsRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user']
        });
        return x;
    }
    async findByDate(date) {
        return await this.betsRepository.find({
            where: {
                date
            },
        });
    }
    async create(_bets) {
        const bets = new bets_entity_1.Bets();
        bets.date = _bets.date;
        bets.draw_time = _bets.draw_time;
        bets.game_mode = _bets.game_mode;
        bets.number = _bets.number;
        bets.amount = _bets.amount;
        if (_bets.user_ID) {
            const user = await this.userRepository.findOne({
                where: { id: _bets.user_ID },
            });
            bets.user = [user];
        }
        return this.betsRepository.save(bets);
    }
    async update(id, updateBetsDto) {
        const bets = await this.findOne(id);
        const { date, draw_time, game_mode, number, amount, user_ID } = updateBetsDto;
        bets.date = date;
        bets.draw_time = draw_time;
        bets.game_mode = game_mode;
        bets.number = number;
        bets.amount = amount;
        if (user_ID) {
            const user = await this.userRepository.findOne({
                where: { id: user_ID },
            });
            bets.user = [user];
        }
        return await bets.save();
    }
    async remove(id) {
        await this.betsRepository.delete(id);
    }
};
exports.BetsService = BetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bets_entity_1.Bets)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [bets_repository_1.BetsRepository,
        user_repository_1.UserRepository])
], BetsService);
//# sourceMappingURL=bets.service.js.map