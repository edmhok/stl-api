import { Attendant } from './attendant.entity';
import { AttendantRepository } from './attendant.repository';
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { UpdateAttendantDto } from './dto/update-attendant.dto';
import { BranchRepository } from '../branch/branch.repository';
export declare class AttendantService {
    private attendantRepository;
    private branchRepository;
    constructor(attendantRepository: AttendantRepository, branchRepository: BranchRepository);
    findAll(): Promise<Attendant[]>;
    findOne(id: number): Promise<Attendant>;
    create(_attendant: CreateAttendantDto): Promise<Attendant>;
    update(id: number, updateAttendantDto: UpdateAttendantDto): Promise<Attendant>;
    remove(id: number): Promise<void>;
}
