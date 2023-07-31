import { CreateAccountingDto } from './create-accounting.dto';
declare const UpdateAccountingDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAccountingDto>>;
export declare class UpdateAccountingDto extends UpdateAccountingDto_base {
    id: number;
    account_title: string;
    classification: string;
    group: string;
    type: string;
    journal_ID: number;
    createdAt: Date;
}
export {};
