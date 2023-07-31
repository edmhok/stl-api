import { CreateAccountingDto } from './dto/create-accounting.dto';
import { UpdateAccountingDto } from './dto/update-accounting.dto';
import { AccountingService } from './accounting.service';
import { JournalService } from '../journal/journal.service';
export declare class AccountingController {
    private accountingService;
    private readonly branchService;
    constructor(accountingService: AccountingService, branchService: JournalService);
    findAll(): Promise<import("./accounting.entity").Accounting[]>;
    findOne(id: number): Promise<import("./accounting.entity").Accounting>;
    create(createAccountingDto: CreateAccountingDto): Promise<import("./accounting.entity").Accounting>;
    update(id: string, updateAccountingDto: UpdateAccountingDto): string;
    remove(id: string): string;
}
