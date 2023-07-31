import { BaseEntity } from 'typeorm';
import { Branch } from '../branch/branch.entity';
import { User } from '../user/user.entity';
export declare class Attendant extends BaseEntity {
    id: number;
    name: string;
    username: string;
    password: string;
    branch: Branch[];
    user: User[];
    createdAt: Date;
}
