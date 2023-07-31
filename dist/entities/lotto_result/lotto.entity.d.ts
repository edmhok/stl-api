import { BaseEntity } from 'typeorm';
export declare class Lotto extends BaseEntity {
    id: number;
    date: Date;
    draw_time: String;
    game_mode: string;
    number: number;
    createdAt: Date;
}
