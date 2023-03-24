import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: "vladick@mail.com", description: "Пошта користувача"})
  readonly email: string;

  @ApiProperty({example: "vladick", description: "Логін користувача"})
  readonly login: string;

  @ApiProperty({example: "D@3274he38nk3OQ", description: "Пароль користувача"})
  readonly password: string;
}