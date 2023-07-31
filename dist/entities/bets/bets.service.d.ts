import { Bets } from './bets.entity';
import { BetsRepository } from './bets.repository';
import { CreateBetsDto } from './dto/create-bets.dto';
import { UpdateBetsDto } from './dto/update-bets.dto';
import { UserRepository } from '../user/user.repository';
export declare class BetsService {
    private betsRepository;
    private userRepository;
    constructor(betsRepository: BetsRepository, userRepository: UserRepository);
    findAll(): Promise<Bets[]>;
    findOne(id: number): Promise<Bets>;
    findByDate(date: Date): Promise<Bets[]>;
    create(_bets: CreateBetsDto): Promise<Bets>;
    update(id: number, updateBetsDto: UpdateBetsDto): Promise<Bets>;
    remove(id: number): Promise<void>;
}
