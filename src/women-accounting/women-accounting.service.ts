import { Injectable } from "@nestjs/common";
import { CreateWADto } from "./dto/Create-WA.dto";
import { InjectModel } from "@nestjs/sequelize";
import { WomenAccounting } from "./women-accounting.model";

@Injectable()
export class WomenAccountingService {

  constructor(@InjectModel(WomenAccounting) private womenAccountRepository: typeof WomenAccounting) {
  }

  async create(dto: CreateWADto) {
    console.log(dto)
    const woman = await this.womenAccountRepository.create(dto);
    return woman;
  }

  async getAll() {
    const women = await this.womenAccountRepository.findAll();
    return women;
  }
}
