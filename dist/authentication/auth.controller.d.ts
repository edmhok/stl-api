import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/entities/user/dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        Branch_Id: any;
    }>;
    create(createUsersDto: CreateUserDto): Promise<{
        id: number;
        branch: import("../entities/branch/branch.entity").Branch[];
        attendant: import("../entities/attendant/attendant.entity").Attendant[];
        bets: import("../entities/bets/bets.entity").Bets[];
        expenses: import("../entities/expenses/expenses.entity").Expenses[];
        tapada: import("../entities/tapada/tapada.entity").Tapada[];
        username: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        position: string;
        daily_rental: number;
        status: string;
        createdAt: Date;
    }>;
}
