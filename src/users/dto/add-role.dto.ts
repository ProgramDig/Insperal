import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Значення ролі" })
  @IsString({ message: "Повинно бути строчкою" })
  readonly value: string;

  @ApiProperty({ example: "21", description: "Ідентифікатор користувача" })
  @IsNumber({}, { message: "Повинно бути числом" })
  readonly userId: number;
}