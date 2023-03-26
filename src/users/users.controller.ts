import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";

@ApiTags("Користувачі")
@Controller("users")
export class UsersController {

  constructor(private userService: UsersService) {}

  @ApiOperation({summary:"Створення користувача"})
  @ApiResponse({status:200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({summary:"Отримання всіх користувачів"})
  @ApiResponse({status:200, type: [User]})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
