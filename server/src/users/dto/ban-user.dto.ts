import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({example: "21", description: "Ідентифікатор користувача"})
  readonly userId: number;
  @ApiProperty({example: "Спам", description: "Опис бану"})
  readonly banReason: string;
}