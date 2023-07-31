import { BaseEntity } from 'typeorm';
import { Branch } from '../branch/branch.entity';
import { Accounting } from '../accounting_charts/accounting.entity';
export declare class Journal extends BaseEntity {
    id: number;
    date: Date;
    branch: Branch[];
    description: string;
    type: string;
    accounting: Accounting[];
    amount: number;
    createdAt: Date;
}
