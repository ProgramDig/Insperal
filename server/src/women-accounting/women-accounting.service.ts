import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CreateWADto } from "./dto/create-WA.dto";
import { InjectModel } from "@nestjs/sequelize";
import { WomenAccounting } from "./women-accounting.model";
import { UpdateWADto } from "./dto/update-WA.dto";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";
import { DeleteWADto } from "./dto/delete-WA.dto";

@Injectable()
export class WomenAccountingService {

  constructor(@InjectModel(WomenAccounting) private womenAccountRepository: typeof WomenAccounting,
              @Inject(REQUEST) private readonly request: Request) {
  }

  async create(dto: CreateWADto) {
    const woman = await this.womenAccountRepository.create(dto);
    return woman;
  }

  async update(dto: UpdateWADto) {
    const woman = await this.womenAccountRepository.findByPk(dto.id );
    if (!woman) {
      throw new HttpException("Такого запису не існує", HttpStatus.BAD_REQUEST);
    }
    await woman.update(dto);
    return woman;
  }

  async delete(dto: DeleteWADto) {
    const res = await this.womenAccountRepository.destroy({
      where: {
        id: dto.id
      }
    });
    return res > 0? {message: `Запис з id ${dto.id} видалено`} : {message: `Запис не видалено`};
  }

  async getOne(id: number) {
    const women = await this.womenAccountRepository.findByPk(id);
    if (!women) {
      throw new HttpException("Такого запису не існує", HttpStatus.BAD_REQUEST);
    }
    return women;
  }

  async getAll() {
    const women = await this.womenAccountRepository.findAll();
    return women;
  }
}
