import { Branch } from './branch.entity';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { BranchRepository } from './branch.repository';
import { AttendantRepository } from '../attendant/attendant.repository';
export declare class BranchService {
    private branchRepository;
    private attendantRepository;
    constructor(branchRepository: BranchRepository, attendantRepository: AttendantRepository);
    findAll(): Promise<Branch[]>;
    findOne(id: number): Promise<Branch>;
    create(_branch: CreateBranchDto): Promise<Branch>;
    update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch>;
    remove(id: number): Promise<void>;
}
