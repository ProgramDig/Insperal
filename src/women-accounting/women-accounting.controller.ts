import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { CreateWADto } from "./dto/create-WA.dto";
import { WomenAccountingService } from "./women-accounting.service";
import { UpdateWADto } from "./dto/update-WA.dto";
import { DeleteWADto } from "./dto/delete-WA.dto";

@Controller("women-accounting")
export class WomenAccountingController {

  constructor(private womenAccountingService: WomenAccountingService) {
  }

  @Post("/create")
  createEntity(@Body() dto: CreateWADto){
    return this.womenAccountingService.create(dto)
  }

  @Patch("/update")
  updateEntity(@Body() dto: UpdateWADto){
    return this.womenAccountingService.update(dto)
  }

  @Delete("/delete")
  deleteEntity(@Body() dto: DeleteWADto){
    return this.womenAccountingService.delete(dto)
  }
  @Get("/:id")
  getOneEntity(){
    return this.womenAccountingService.getOne();
  }

  @Get("/")
  getAllEntities(){
    return this.womenAccountingService.getAll()
  }
}
