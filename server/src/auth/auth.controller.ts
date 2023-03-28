import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { IsRoleDto } from "./dto/IsRole.dto";

@ApiTags("Авторизація")
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @ApiOperation({summary:"Логін"})
  @ApiResponse({status:200, type: String})
  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({summary:"Реєстрація"})
  @ApiResponse({status:200, type: String})
  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }

  @ApiOperation({summary:"Перевірка на роль"})
  @ApiResponse({status:200, type: Object})
  @Post("/is-role")
  isRole(@Body() dto: IsRoleDto) {
    return this.authService.isRole(dto)
  }
}
