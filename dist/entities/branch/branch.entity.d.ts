import { BaseEntity } from 'typeorm';
import { Attendant } from '../attendant/attendant.entity';
import { User } from '../user/user.entity';
import { Journal } from '../journal/journal.entity';
export declare class Branch extends BaseEntity {
    id: number;
    code: string;
    name: string;
    address: string;
    attendant: Attendant[];
    createdAt: Date;
    user: User[];
    journal: Journal[];
}
