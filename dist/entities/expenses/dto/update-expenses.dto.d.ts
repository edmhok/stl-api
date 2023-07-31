import { CreateExpensesDto } from './create-expenses.dto';
declare const UpdateExpensesDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateExpensesDto>>;
export declare class UpdateExpensesDto extends UpdateExpensesDto_base {
    id: number;
    date: Date;
    type: string;
    status: string;
    amount: number;
    user_ID: number;
    createdAt: Date;
}
export {};
