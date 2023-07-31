import { Accounting } from './accounting.entity';
import { CreateAccountingDto } from './dto/create-accounting.dto';
import { UpdateAccountingDto } from './dto/update-accounting.dto';
import { AccountingRepository } from './accounting.repository';
export declare class AccountingService {
    private accountingRepository;
    constructor(accountingRepository: AccountingRepository);
    findAll(): Promise<Accounting[]>;
    findOne(id: number): Promise<Accounting>;
    create(_accounting: CreateAccountingDto): Promise<Accounting>;
    update(id: number, updateAccountingDto: UpdateAccountingDto): Promise<Accounting>;
    remove(id: number): Promise<void>;
}
