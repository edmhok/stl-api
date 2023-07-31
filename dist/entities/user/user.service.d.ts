import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AttendantRepository } from '../attendant/attendant.repository';
import { BranchRepository } from '../branch/branch.repository';
export declare class UserService {
    private userRepository;
    private attendantRepository;
    private branchRepository;
    constructor(userRepository: UserRepository, attendantRepository: AttendantRepository, branchRepository: BranchRepository);
    findAll(): Promise<User[]>;
    userCredential(query: object | any): Promise<User>;
    findOne(id: number): Promise<User>;
    create(_user: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
}
