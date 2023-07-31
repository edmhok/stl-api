import { BranchService } from './branch.service';
import { UpdateBranchDto } from '../branch/dto/update-branch.dto';
import { AttendantService } from '../attendant/attendant.service';
import { CreateBranchDto } from './dto/create-branch.dto';
export declare class BranchController {
    private branchService;
    private readonly attendantService;
    constructor(branchService: BranchService, attendantService: AttendantService);
    fillAll(): Promise<import("./branch.entity").Branch[]>;
    findOne(id: number): Promise<import("./branch.entity").Branch>;
    create(createBranchDto: CreateBranchDto): Promise<import("./branch.entity").Branch>;
    update(id: string, updateBranchDto: UpdateBranchDto): string;
    remove(id: string): string;
}
