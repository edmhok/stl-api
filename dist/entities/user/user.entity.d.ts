import { BaseEntity } from 'typeorm';
import { Attendant } from '../attendant/attendant.entity';
import { Branch } from '../branch/branch.entity';
import { Bets } from '../bets/bets.entity';
import { Expenses } from '../expenses/expenses.entity';
import { Tapada } from '../tapada/tapada.entity';
export declare class User extends BaseEntity {
    id: number;
    branch: Branch[];
    attendant: Attendant[];
    bets: Bets[];
    expenses: Expenses[];
    tapada: Tapada[];
    username: string;
    password: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    position: string;
    daily_rental: number;
    status: string;
    createdAt: Date;
}
