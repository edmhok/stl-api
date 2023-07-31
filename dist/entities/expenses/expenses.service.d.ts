import { Expenses } from './expenses.entity';
import { ExpensesRepository } from './expenses.repository';
import { CreateExpensesDto } from './dto/create-expenses.dto';
import { UpdateExpensesDto } from './dto/update-expenses.dto';
import { UserRepository } from '../user/user.repository';
export declare class ExpensesService {
    private expensesRepository;
    private userRepository;
    constructor(expensesRepository: ExpensesRepository, userRepository: UserRepository);
    findAll(): Promise<Expenses[]>;
    findOne(id: number): Promise<Expenses>;
    create(_expenses: CreateExpensesDto): Promise<Expenses>;
    update(id: number, updateExpensesDto: UpdateExpensesDto): Promise<Expenses>;
    remove(id: number): Promise<void>;
}
