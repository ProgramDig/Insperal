import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "vladick@mail.com", description: "Пошта користувача" })
  @IsString({ message: "Повинна бути строчкою" })
  @IsEmail({}, { message: "Некоректна пошта" })
  readonly email: string;

  @ApiProperty({ example: "vladick", description: "Логін користувача" })
  @IsString({ message: "Пошта повинна бути строчкою" })
  @Length(3, 16, { message: "Не манше 3 і не більше 16" })
  readonly login: string;

  @ApiProperty({ example: "D@3274he38nk3OQ", description: "Пароль користувача" })
  @IsString({ message: "Пошта повинна бути строчкою" })

  readonly password: string;
}