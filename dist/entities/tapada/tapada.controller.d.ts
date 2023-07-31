import { CreateTapadaDto } from './dto/create-tapada.dto';
import { UpdateTapadaDto } from './dto/update-tapada.dto';
import { TapadaService } from './tapada.service';
import { UserService } from '../user/user.service';
export declare class TapadaController {
    private tapadaService;
    private readonly userService;
    constructor(tapadaService: TapadaService, userService: UserService);
    findAll(): Promise<import("./tapada.entity").Tapada[]>;
    findOne(id: number): Promise<import("./tapada.entity").Tapada>;
    create(createTapadaDto: CreateTapadaDto): Promise<import("./tapada.entity").Tapada>;
    update(id: string, updateTapadaDto: UpdateTapadaDto): string;
    remove(id: string): string;
}
