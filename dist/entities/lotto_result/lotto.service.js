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
exports.LottoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lotto_entity_1 = require("./lotto.entity");
const lotto_repository_1 = require("./lotto.repository");
let LottoService = exports.LottoService = class LottoService {
    constructor(lottoRepository) {
        this.lottoRepository = lottoRepository;
    }
    findAll() {
        return this.lottoRepository.find();
    }
    async findOne(id) {
        const x = this.lottoRepository.findOne({
            where: {
                id: id,
            },
        });
        return x;
    }
    async findByDate(date) {
        return await this.lottoRepository.find({
            where: {
                date
            },
        });
    }
    async create(_lotto) {
        const lotto = new lotto_entity_1.Lotto();
        lotto.date = _lotto.date;
        lotto.draw_time = _lotto.draw_time;
        lotto.game_mode = _lotto.game_mode;
        lotto.number = _lotto.number;
        console.log({ lotto });
        return this.lottoRepository.save(lotto);
    }
    async update(id, updateLottoDto) {
        const lotto = await this.findOne(id);
        const { draw_time, game_mode, number } = updateLottoDto;
        lotto.draw_time = draw_time;
        lotto.game_mode = game_mode;
        lotto.number = number;
        return await lotto.save();
    }
    async remove(id) {
        await this.lottoRepository.delete(id);
    }
};
exports.LottoService = LottoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lotto_entity_1.Lotto)),
    __metadata("design:paramtypes", [lotto_repository_1.LottoRepository])
], LottoService);
//# sourceMappingURL=lotto.service.js.map