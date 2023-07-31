import { BaseEntity } from 'typeorm';
import { Journal } from '../journal/journal.entity';
export declare class Accounting extends BaseEntity {
    id: number;
    account_title: string;
    classification: string;
    group: string;
    type: string;
    journal: Journal[];
    createdAt: Date;
}
