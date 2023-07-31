import { CreateTapadaDto } from './create-tapada.dto';
declare const UpdateTapadaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTapadaDto>>;
export declare class UpdateTapadaDto extends UpdateTapadaDto_base {
    id: number;
    date: Date;
    runner_name: string;
    amount: number;
    draw_time: string;
    user_ID: number;
    createdAt: Date;
}
export {};
