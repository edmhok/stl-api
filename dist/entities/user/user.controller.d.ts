import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BranchService } from '../branch/branch.service';
import { AttendantService } from '../attendant/attendant.service';
export declare class UserController {
    private userService;
    private readonly branchService;
    private readonly attendantService;
    constructor(userService: UserService, branchService: BranchService, attendantService: AttendantService);
    fillAll(): Promise<import("./user.entity").User[]>;
    getProfile(req: any): Promise<import("./user.entity").User>;
    findOne(id: number): Promise<import("./user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./user.entity").User>;
    remove(id: string): Promise<void>;
}
