import { Lotto } from './lotto.entity';
import { LottoRepository } from './lotto.repository';
import { CreateLottoDto } from './dto/create-lotto.dto';
import { UpdateLottoDto } from './dto/update-lotto.dto';
export declare class LottoService {
    private lottoRepository;
    constructor(lottoRepository: LottoRepository);
    findAll(): Promise<Lotto[]>;
    findOne(id: number): Promise<Lotto>;
    findByDate(date: Date): Promise<Lotto[]>;
    create(_lotto: CreateLottoDto): Promise<Lotto>;
    update(id: number, updateLottoDto: UpdateLottoDto): Promise<Lotto>;
    remove(id: number): Promise<void>;
}
