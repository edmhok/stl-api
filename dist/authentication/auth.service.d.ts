import { UserService } from '../entities/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        Branch_Id: any;
    }>;
    create(data: any): Promise<{
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
    decodeToken(token: any): any;
}
