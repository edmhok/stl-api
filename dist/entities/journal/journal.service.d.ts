import { Journal } from './journal.entity';
import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';
import { JournalRepository } from './journal.repository';
import { BranchRepository } from '../branch/branch.repository';
import { AccountingRepository } from '../accounting_charts/accounting.repository';
export declare class JournalService {
    private journalRepository;
    private branchRepository;
    private accountingRepository;
    constructor(journalRepository: JournalRepository, branchRepository: BranchRepository, accountingRepository: AccountingRepository);
    findAll(): Promise<Journal[]>;
    findOne(id: number): Promise<Journal>;
    create(_journal: CreateJournalDto): Promise<Journal>;
    update(id: number, updateJournalDto: UpdateJournalDto): Promise<Journal>;
    remove(id: number): Promise<void>;
}
