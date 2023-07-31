import { CreateBetsDto } from './create-bets.dto';
declare const UpdateBetsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBetsDto>>;
export declare class UpdateBetsDto extends UpdateBetsDto_base {
    id: number;
    date: Date;
    draw_time: string;
    game_mode: string;
    number: number;
    amount: number;
    user_ID: number;
    createdAt: Date;
}
export {};
