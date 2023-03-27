import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateWADto } from "./dto/Create-WA.dto";
import { WomenAccountingService } from "./women-accounting.service";

@Controller("women-accounting")
export class WomenAccountingController {

  constructor(private womenAccountingService: WomenAccountingService) {
  }

  @Post()
  createEntity(@Body() dto: CreateWADto){
    return this.womenAccountingService.create(dto)
  }

  @Get()
  getAllEntities(){
    return this.womenAccountingService.getAll()
  }
}
