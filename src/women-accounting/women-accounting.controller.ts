import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from "@nestjs/common";
import { CreateWADto } from "./dto/create-WA.dto";
import { WomenAccountingService } from "./women-accounting.service";
import { UpdateWADto } from "./dto/update-WA.dto";
import { DeleteWADto } from "./dto/delete-WA.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { WomenAccounting } from "./women-accounting.model";
import { Roles } from "../auth/roles-auth.decorator";
import { RoleEnum } from "../roles/enums/role.enum";
import { RolesGuard } from "../auth/roles.guard";

@ApiTags("Особи обліку")
@Controller("women-accounting")
export class WomenAccountingController {

  constructor(private womenAccountingService: WomenAccountingService) {
  }

  @ApiOperation({ summary: "Створення запису особи обліку" })
  @ApiResponse({ status: 200, type: CreateWADto })
  @Roles(RoleEnum.ADMIN)
  @UseGuards(RolesGuard)
  @Post("/create")
  createEntity(@Body() dto: CreateWADto) {
    return this.womenAccountingService.create(dto);
  }

  @ApiOperation({ summary: "Оновлення запису особи обліку" })
  @ApiResponse({ status: 200, type: UpdateWADto })
  @Roles(RoleEnum.ADMIN)
  @UseGuards(RolesGuard)
  @Patch("/update")
  updateEntity(@Body() dto: UpdateWADto) {
    return this.womenAccountingService.update(dto);
  }

  @ApiOperation({ summary: "Видалення запису особи обліку" })
  @ApiResponse({ status: 200, type: DeleteWADto })
  @Roles(RoleEnum.ADMIN)
  @UseGuards(RolesGuard)
  @Delete("/delete")
  deleteEntity(@Body() dto: DeleteWADto) {
    return this.womenAccountingService.delete(dto);
  }

  @ApiOperation({ summary: "Отримання поточного запису особи обліку" })
  @ApiResponse({ status: 200, type: DeleteWADto })
  @Roles(RoleEnum.ADMIN)
  @UseGuards(RolesGuard)
  @Get("/:id")
  getOneEntity() {
    return this.womenAccountingService.getOne();
  }

  @ApiOperation({ summary: "Отримання всіх записів особи обліку" })
  @ApiResponse({ status: 200, type: [WomenAccounting] })
  @Roles(RoleEnum.ADMIN)
  @UseGuards(RolesGuard)
  @Get("/")
  getAllEntities() {
    return this.womenAccountingService.getAll();
  }
}
