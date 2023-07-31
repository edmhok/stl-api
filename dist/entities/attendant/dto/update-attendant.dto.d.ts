import { CreateAttendantDto } from './create-attendant.dto';
declare const UpdateAttendantDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAttendantDto>>;
export declare class UpdateAttendantDto extends UpdateAttendantDto_base {
    id: number;
    name: string;
    username: string;
    password: string;
    branch_ID: number;
    createdAt: Date;
}
export {};
