import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
export declare class Tapada extends BaseEntity {
    id: number;
    date: Date;
    runner_name: string;
    amount: number;
    draw_time: string;
    user: User[];
    createdAt: Date;
}
