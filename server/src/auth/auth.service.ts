import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { User } from "../users/users.model";
import { IsRoleDto } from "./dto/IsRole.dto";

@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
              private jwtService: JwtService) {
  }

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }


  async registration(userDto: CreateUserDto) {
    const { email, login, password } = userDto;
    const candidate = await this.userService.getUserByEmailOrLogin(login, email);
    if (candidate) {
      throw new HttpException("Користувач з таким логіном або поштою вже створений", HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await this.userService.createUser({ email, login, password: hashPassword });
    return this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = { email: user.email, login: user.login, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
      role: user.roles[0].value
    };
  }

  async isRole(dto: IsRoleDto) {
    const user = this.jwtService.verify(dto.token);
    const role = user.roles.filter((item) => item.value === dto.role);
    if (role.length) {
      console.log(role)
      return { role: role[0].value };
    }
    throw new HttpException("Немає доступа", HttpStatus.NOT_FOUND);
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmailOrLogin(userDto.login, userDto.email);
    const passwordEquals = await bcrypt.compare(userDto.password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: "Невірні дані при логіні" });
  }
}
