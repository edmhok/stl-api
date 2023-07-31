import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';
import { JournalService } from './journal.service';
import { BranchService } from '../branch/branch.service';
import { AccountingService } from '../accounting_charts/accounting.service';
export declare class JournalController {
    private journalService;
    private readonly branchService;
    private readonly accountingService;
    constructor(journalService: JournalService, branchService: BranchService, accountingService: AccountingService);
    findAll(): Promise<import("./journal.entity").Journal[]>;
    findOne(id: number): Promise<import("./journal.entity").Journal>;
    create(createjournalDto: CreateJournalDto): Promise<import("./journal.entity").Journal>;
    update(id: string, updateJournalDto: UpdateJournalDto): string;
    remove(id: string): string;
}
