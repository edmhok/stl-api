import { CreateLottoDto } from './create-lotto.dto';
declare const UpdateLottoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateLottoDto>>;
export declare class UpdateLottoDto extends UpdateLottoDto_base {
    id: number;
    date: Date;
    draw_time: String;
    game_mode: string;
    number: number;
    createdAt: Date;
}
export {};
