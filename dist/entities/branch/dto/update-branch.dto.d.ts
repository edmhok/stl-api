import { CreateBranchDto } from './create-branch.dto';
declare const UpdateBranchDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBranchDto>>;
export declare class UpdateBranchDto extends UpdateBranchDto_base {
    id: number;
    code: string;
    name: string;
    address: string;
    attendant_ID: number;
    createdAt: Date;
}
export {};
