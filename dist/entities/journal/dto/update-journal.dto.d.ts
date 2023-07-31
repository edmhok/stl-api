import { CreateJournalDto } from './create-journal.dto';
declare const UpdateJournalDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateJournalDto>>;
export declare class UpdateJournalDto extends UpdateJournalDto_base {
    id: number;
    date: Date;
    branch_ID: number;
    description: string;
    type: string;
    accounting_ID: number;
    amount: number;
    createdAt: Date;
}
export {};
