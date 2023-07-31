import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
export declare class Expenses extends BaseEntity {
    id: number;
    date: Date;
    type: string;
    status: string;
    amount: number;
    user: User[];
    createdAt: Date;
}
