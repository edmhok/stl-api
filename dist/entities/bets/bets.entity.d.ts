import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
export declare class Bets extends BaseEntity {
    id: number;
    date: Date;
    draw_time: string;
    game_mode: string;
    number: number;
    amount: number;
    user: User[];
    createdAt: Date;
}
