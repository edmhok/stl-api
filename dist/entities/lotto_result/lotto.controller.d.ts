import { CreateLottoDto } from './dto/create-lotto.dto';
import { UpdateLottoDto } from './dto/update-lotto.dto';
import { LottoService } from './lotto.service';
export declare class LottoController {
    private lottoService;
    constructor(lottoService: LottoService);
    findAll(): Promise<import("./lotto.entity").Lotto[]>;
    findOne(id: number): Promise<import("./lotto.entity").Lotto>;
    findByDate(date: Date): Promise<import("./lotto.entity").Lotto[]>;
    create(createLottoDto: CreateLottoDto): Promise<import("./lotto.entity").Lotto>;
    update(id: string, updateLottoDto: UpdateLottoDto): string;
    remove(id: string): string;
}
