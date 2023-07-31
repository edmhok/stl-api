import { CreateBetsDto } from './dto/create-bets.dto';
import { UpdateBetsDto } from './dto/update-bets.dto';
import { BetsService } from './bets.service';
import { UserService } from '../user/user.service';
export declare class BetsController {
    private betsService;
    private readonly userService;
    constructor(betsService: BetsService, userService: UserService);
    findAll(): Promise<import("./bets.entity").Bets[]>;
    findOne(id: number): Promise<import("./bets.entity").Bets>;
    findByDate(date: Date): Promise<import("./bets.entity").Bets[]>;
    create(createBetsDto: CreateBetsDto): Promise<import("./bets.entity").Bets>;
    update(id: number, updateBetsDto: UpdateBetsDto): string;
    remove(id: number): string;
}
