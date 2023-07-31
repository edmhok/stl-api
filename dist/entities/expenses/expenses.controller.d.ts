import { CreateExpensesDto } from './dto/create-expenses.dto';
import { UpdateExpensesDto } from './dto/update-expenses.dto';
import { ExpensesService } from './expenses.service';
import { UserService } from '../user/user.service';
export declare class ExpensesController {
    private expensesService;
    private readonly userService;
    constructor(expensesService: ExpensesService, userService: UserService);
    findAll(): Promise<import("./expenses.entity").Expenses[]>;
    findOne(id: number): Promise<import("./expenses.entity").Expenses>;
    create(createexpensesDto: CreateExpensesDto): Promise<import("./expenses.entity").Expenses>;
    update(id: string, updateExpensesDto: UpdateExpensesDto): string;
    remove(id: string): string;
}
