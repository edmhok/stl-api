import { Tapada } from './tapada.entity';
import { CreateTapadaDto } from './dto/create-tapada.dto';
import { UpdateTapadaDto } from './dto/update-tapada.dto';
import { TapadaRepository } from './tapada.repository';
import { UserRepository } from '../user/user.repository';
export declare class TapadaService {
    private tapadaRepository;
    private userRepository;
    constructor(tapadaRepository: TapadaRepository, userRepository: UserRepository);
    findAll(): Promise<Tapada[]>;
    findOne(id: number): Promise<Tapada>;
    create(_tapada: CreateTapadaDto): Promise<Tapada>;
    update(id: number, updateTapadaDto: UpdateTapadaDto): Promise<Tapada>;
    remove(id: number): Promise<void>;
}
