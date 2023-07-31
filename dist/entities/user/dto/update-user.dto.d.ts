import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    id: number;
    branch_ID: number;
    attendant_ID: number;
    bets: number;
    username: string;
    password: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    position: string;
    daily_rental: number;
    status: string;
    createdAt: Date;
}
export {};
