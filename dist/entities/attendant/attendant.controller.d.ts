import { AttendantService } from './attendant.service';
import { UpdateAttendantDto } from './dto/update-attendant.dto';
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { BranchService } from '../branch/branch.service';
export declare class AttendantController {
    private attendantService;
    private readonly branchService;
    constructor(attendantService: AttendantService, branchService: BranchService);
    fillAll(): Promise<import("./attendant.entity").Attendant[]>;
    findOne(id: number): Promise<import("./attendant.entity").Attendant>;
    create(createAttendantDto: CreateAttendantDto): Promise<import("./attendant.entity").Attendant>;
    update(id: string, updateAttendantDto: UpdateAttendantDto): string;
    remove(id: string): string;
}
